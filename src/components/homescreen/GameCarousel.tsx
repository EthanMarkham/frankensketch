import React, { useState, useEffect } from "react";
import { GenericPageProps } from "types";
import GameCard from "./GameCard";
import { ModelGameFilterInput } from "types/API";
import { Div, FlexBox, Grid, Loader } from "styles";
import { useStore } from "store";
import { listGameInfo, queryGamesByUsername } from "queries/queries";
import { API } from "aws-amplify";
import { GameRecord } from "types/home";

function getGameInfo(gameList: any) {
    return new Promise(async (resolve, reject) => {
        const filter: ModelGameFilterInput = { or: [] };

        gameList.forEach((g: any) => {
            filter!!.or!!.push({ id: { eq: g.id } });
        });

        const { data } = (await API.graphql({
            query: listGameInfo,
            variables: {
                filter: filter,
            },
        })) as any;

        if (data.listGames) resolve(data.listGames.items);
        else reject(data.error);
    });
}

function GameCarousel({ container }: GenericPageProps) {
    const [gameList, setGameList] = useState<[GameRecord]>();
    const [loading, setLoading] = useState(false);
    const user = useStore((state) => state.userData);

    useEffect(() => {
        if (!user?.username) return;

        queryGamesByUsername(user?.username).then((data) => {
            console.log("games", data);
            getGameInfo(data).then((g: any) => {
                let test = g
                    .filter(
                        ({ head, torso, legs }: any) => head && torso && legs
                    )
                    .map((game: any) => {
                        const createdDate = [
                            game.head.createdAt,
                            game.torso.createdAt,
                            game.legs.createdAt,
                        ].reduce((a, b) => {
                            return a > b ? a : b;
                        });
                        return { ...game, createdAt: createdDate };
                    })
                    .sort((a: any, b: any) => {
                        return b.createdAt < a.createdAt ? -1 : 1;
                    });
                setGameList(test);
                setLoading(true);
            });
        });
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
                {loading === false ? (
                    <FlexBox justifyContent="center" width="100%">
                        <Loader margin="2rem" width="200px" height="200px" />
                    </FlexBox>
                ) : null}
                {gameList &&
                    gameList.map((g) => <GameCard game={g} key={g.id} />)}
            </Grid>
        </Div>
    );
}

export default GameCarousel;
