import { getGameById, getSuggestedDrawing } from "queries/queries";
import { Store } from "types";
import create from "zustand";
import { postGame } from "./actions/postGame";
/*
PAGE INDEXS
            case -1:
                return <LoadingScreen />;
            case 0:
                return <Authentication />;
            case 1:
                return <HomeScreen />;
            case 2:
                return <Sketchpad />;
*/

const useStore = create<Store>((set, _get) => ({
    serverSideProps: null,
    subscriptions: new Map<string, () => void>(),
    userData: null, //maybe we dont need?
    pageIndex: -1,
    error: null, //GET RID OF
    games: [],
    drawings: [],
    actions: {
        setPage(index) {
            set((store) => ({ ...store, pageIndex: index }));
        },
        setGames(games) {
            set((store) => ({
                ...store,
                games: games,
            }));
        },
        addGame(game) {
            set((store) => ({
                ...store,
                games: [...store.games, game],
            }));
        },
        setDrawings(drawings) {
            set((store) => ({
                ...store,
                drawings: drawings,
            }));
        },
        addDrawing(drawing) {
            set((store) => ({
                ...store,
                drawings: [...store.drawings, drawing],
            }));
        },
        setServerSideProps(data) {
            set((store) => ({
                ...store,
                serverSideProps:
                    data === null
                        ? null
                        : { ...store.serverSideProps, ...data },
            }));
        },
        setUser(data) {
            set((store) => ({
                ...store,
                userData: data,
                pageIndex: data === null ? 0 : store.pageIndex,
            }));
        },
        subscribe: (key, callback) => {
            set((store) => {
                let copy = { ...store }; //deconstructed for deep clone
                copy.subscriptions.set(key, callback);
                return copy;
            });
        },
        unsubscribe: (key) => {
            set((store) => {
                let copy = { ...store }; //deconstructed for deep clone
                copy.subscriptions.delete(key);
                return copy;
            });
        },
        joinGame: () => {
            set((store) => ({ ...store, pageIndex: -1 }));

            //console.log(API.endpoint("api"));
            getSuggestedDrawing().then((data) => {
                console.log(data);
                set((store) => ({
                    ...store,
                    pageIndex: 2,
                    serverSideProps: { drawing: data },
                }));
            });
        },
        viewGame: (gameId) => {
            set((store) => ({ ...store, pageIndex: -1 }));

            getGameById({ id: gameId }).then((data) => {
                set((store) => ({
                    ...store,
                    serverSideProps: { ...store.serverSideProps, game: data },
                    pageIndex: 9,
                }));
            });
        },
        postGame: postGame(set),
        setError(data) {
            set((store) => {
                const uuid = store.error?.uuid ? store.error.uuid + 1 : 0;
                return { ...store, error: { ...data, uuid: uuid } };
            });
        },
    },
}));

export default useStore;
