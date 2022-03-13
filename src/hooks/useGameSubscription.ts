import { Drawing, Game } from "API";
import { API, graphqlOperation } from "aws-amplify";
import { onUpdateGameMin } from "graphql/subscriptions";
import {
    getDrawingsMin,
    getFinishedGamesByDrawing,
    getGamesMin,
} from "queries/queries";
import { useState, useEffect, useReducer } from "react";
import { toast } from "react-toastify";
import { useStore } from "store";
import { sortGames } from "utils/functions";
import { Observable } from "../../node_modules/zen-observable-ts";

interface GameState {
    games: Array<any>;
    drawings: Array<any>;
}
function getReducer(onClick: (id: string) => any) {
    return function gameReducer(
        state: GameState,
        { type, payload }: { type: string; payload: any }
    ): GameState {
        switch (type) {
            case "setDrawing":
                if (!payload.drawings) return state;
                console.log("setting drawings to", payload.drawings);
                return { ...state, drawings: payload.drawings };
            case "set":
                if (!payload.games) return state;
                payload.callback(payload.games);
                return { ...state, games: payload.games };

            case "add":
                if (!payload.game) return state;
                const isOwnedGame = state.drawings.findIndex(
                    (d) =>
                        d.id === payload.game.gameHeadId ||
                        d.id === payload.game.gameTorsoId ||
                        d.id === payload.game.gameLegsId
                );
                if (isOwnedGame) {
                    console.log("sub caught", payload.game);

                    getGamesMin({
                        filter: {
                            id: {
                                eq: payload.game.id,
                            },
                        },
                    })
                        .then(({ games }) => {
                            if (!games || games.length === 0) {
                                return state;
                            }
                            const game = games[0]!!;

                            const gameIndex = state.games.findIndex(
                                (g) => g.id === game.id
                            );
                            console.log("found game at", gameIndex);

                            if (gameIndex > -1) {
                                let copy = state.games.slice();
                                copy[gameIndex] = game;
                                payload.callback(copy);
                                return { ...state, games: copy };
                            } else if (
                                game.gameLegsId &&
                                game.gameTorsoId &&
                                game.gameHeadId
                            ) {
                                toast.success("A new game has finished!", {
                                    onClick: () => {
                                        onClick(game.id);
                                    },
                                });

                                const games = sortGames([...state.games, game]);
                                payload.callback(games);
                                return {
                                    ...state,
                                    games,
                                };
                            }
                        })
                        .catch((e) => {
                            console.log(e);
                            return state;
                        });
                }
                return state;
            default:
                return state;
        }
    };
}

const initialState = {
    games: new Array<Game>(),
    drawings: new Array<Drawing>(),
};

function useGameSubscription(setGameList: (games: Array<Game>) => void) {
    const viewGame = useStore((state) => state.actions.viewGame);

    const [store, dispatch] = useReducer(
        getReducer((id) => {
            viewGame(id);
        }),
        initialState
    );
    const setDrawings = useStore((state) => state.actions.setDrawings);
    const setPage = useStore((state) => state.actions.setPage);

    const drawings = useStore((state) => state.drawings);
    const userData = useStore((state) => state.userData);

    const [initGames, setInitGames] = useState(false);
    const [initDrawings, setInitDrawings] = useState(false);

    // Step: Get inital drawings
    useEffect(() => {
        if (!userData?.username || initDrawings === true) return;
        getDrawingsMin({
            filter: {
                artist: { eq: userData.username },
            },
        }).then(({ drawings }) => {
            setDrawings(drawings);
            setInitDrawings(true);
        });
    }, [initDrawings, setDrawings, userData]);

    //Sync the list
    useEffect(() => {
        if (!initDrawings || initGames) return;

        if (drawings.length > 0) {
            getFinishedGamesByDrawing(drawings).then(({ games }) => {
                dispatch({
                    type: "set",
                    payload: { games, callback: setGameList },
                });
                setInitGames(true);
                console.log("syncing games", games);
            });
        } else {
            setInitGames(true);
        }
    }, [drawings, initDrawings, initGames, setGameList, userData]);

    //Set them to home screen after first fetch
    useEffect(() => {
        if (initGames) {
            setPage(1);
        }
    }, [initGames, setPage]);

    //Subscribe and listen for new games
    useEffect(() => {
        const call = API.graphql(
            graphqlOperation(onUpdateGameMin)
        ) as Observable<Object>;
        console.log("subscribing to games");
        const subscription = call.subscribe({
            next: ({ value }: any) => {
                console.log("sub caught", value);
                dispatch({
                    type: "add",
                    payload: {
                        game: value.data.onUpdateGame,
                        callback: setGameList,
                    },
                });
            },
            error: (error: any) => console.warn(error),
        });

        return () => subscription.unsubscribe();
    }, [setGameList]);

    useEffect(() => {
        console.log("updating drawing list");
        dispatch({ type: "setDrawings", payload: { drawings } });
    }, [drawings]);
}

export default useGameSubscription;
