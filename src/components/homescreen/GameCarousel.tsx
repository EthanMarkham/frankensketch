import { GenericPageProps } from "types";
import GameCard from "./GameCard";
import { API } from "aws-amplify";
import { listGames } from "graphql/queries";
import { Game, ListGamesQueryVariables } from "types/API";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import React, { useState, useEffect } from "react";
import { Div, Grid } from "styles";

function GameCarousel({ container }: GenericPageProps) {
    const [gameList, setGameList] = useState<Array<Game>>(new Array<Game>());

    useEffect(() => {
        new Promise<void>(async (resolve, reject) => {
            let variables: ListGamesQueryVariables = {
                filter: {
                    gameHeadId: { attributeExists: true },
                    gameLegsId: { attributeExists: true },
                    gameTorsoId: { attributeExists: true },
                },
            };

            const { data } = (await API.graphql({
                query: listGames,
                variables,
            })) as GraphQLResult;
            const result = data as any;
            setGameList(result.listGames.items as Array<Game>);
            resolve();
        }).then(() => {
            return;
        });
    }, []);

    useEffect(() => {
        let games = new Array<JSX.Element>();
        gameList.forEach((g) => {
            games.push();
        });
    }, [gameList]);

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
                {gameList.map((g) => (
                    <GameCard game={g} key={g.id} />
                ))}
            </Grid>
        </Div>
    );
}

export default GameCarousel;
