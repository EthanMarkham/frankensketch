import { HomeScreenProps } from "types";
import { Carousel } from "@trendyol-js/react-carousel";
import GameCard from "./GameCard";
import { Button, FlexBox } from "styles";
import { COLORS } from "utils/DEFS";
import { API } from "aws-amplify";
import { listGames } from "graphql/queries";
import { Game, ListGamesQueryVariables } from "types/API";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import React, { useState, useEffect } from "react";

//TODO - Set PROPS and make dynamic
function GameCarousel(props: HomeScreenProps) {
    const [gameList, setGameList] = useState<Array<Game>>(new Array<Game>());
    const [games, setGames] = useState(new Array<JSX.Element>());

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
            games.push(<GameCard game={g} key={g.id} />);
        });
        setGames(games);
    }, [gameList]);

    return (
        <Carousel
            show={2.5}
            slide={2}
            swiping={true}
            infinite={false}
            useArrowKeys={true}
            responsive={true}
            dynamic={true}
            children={games}
            leftArrow={
                <FlexBox vhCenter={true} height="100%" width="1.25rem">
                    <Button
                        height="100%"
                        width="1.25rem"
                        fontSize="1.25em"
                        background="none"
                        color={COLORS.white}
                    >
                        &lt;
                    </Button>
                </FlexBox>
            }
            rightArrow={
                <FlexBox vhCenter={true} height="125px" width="1.25rem">
                    <Button
                        height="4rem"
                        width="1.25rem"
                        fontSize="1.25em"
                        background="none"
                        color={COLORS.white}
                    >
                        &gt;
                    </Button>
                </FlexBox>
            }
        />
    );
}

export default GameCarousel;
