import React, { useState, useEffect } from "react";
import { GenericPageProps } from "types";
import GameCard from "./GameCard";
import { Game, ModelGameFilterInput } from "types/API";
import { Div, Grid } from "styles";
import { useStore } from "store";
import { queryGamesByUsername } from "queries/queries";
import { listGameInfo } from "graphql/queries";
import { API } from "aws-amplify";

function getGameInfo(gameList: any) {
    return new Promise<Game>(async (resolve, reject) => {
        const filter: ModelGameFilterInput = { or: [] };

        gameList.forEach((g: any) => {
            filter!!.or!!.push({ id: { eq: g.id } });
        });

        console.log(filter);

        const { data } = (await API.graphql({
            query: listGameInfo,
            variables: {
                filter: filter,
            },
        })) as any;

        if (data.listGames) resolve(data.listGames);
        else reject(data.error);
    });
}

function GameCarousel({ container }: GenericPageProps) {
    const [gameList, setGameList] = useState<[Game]>();
    const user = useStore((state) => state.userData);

    useEffect(() => {
        if (!user?.username) return;

        queryGamesByUsername(user?.username).then((data) => {
            console.log("games", data);
            getGameInfo(data).then((g) => {
                console.log(g);
            });
        });

        /*
        getUserDrawings(user?.username).then((data) => {
            console.log(data[0]);

            if (data.length === 0) return;
            const first = data.shift();
            const filter = data.reduce((acc, cur, i) => {
                let ptx: any = acc;
                let n = 0;
                while (n < i) {
                    if (!ptx.or) ptx.or = {};
                    ptx = ptx.or;
                    n++;
                }
                ptx.or = getFilterVar(cur.type!!, cur.id);
                return acc;
            }, getFilterVar(first!!.type!!, first!!.id));
            console.log(filter);
            getGames(filter).then((games) => {
                let finishedGames: Game[] = [];
                let unfinished = 0;

                games.forEach((g) => {
                    if (g.gameHeadId && g.gameLegsId && g.gameTorsoId)
                        finishedGames.push(g);
                    else unfinished++;
                });
                setGameList(finishedGames);
                alert("You have " + unfinished + " unfinished games!");
            });
        });
        */
    }, [user]);

    return (
        <Div
            style={{
                flex: "0 1",
                justifySelf: "flex-end",
                flexBasis: container?.current
                    ? container.current.offsetHeight * 0.7 + "px"
                    : "10px",
                overflowY: "auto",
            }}
        >
            <Grid
                style={{
                    justifyContent: "space-around",
                    gridTemplateColumns: "repeat(auto-fit, 400px)",
                    gap: "0.2em",
                }}
            >
                {gameList &&
                    gameList.map((g) => <GameCard game={g} key={g.id} />)}
            </Grid>
        </Div>
    );
}

export default GameCarousel;
