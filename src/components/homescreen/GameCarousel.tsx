import React, { useState, useEffect } from "react";
import { GenericPageProps } from "types";
import GameCard from "./GameCard";
import { AnimatedFlex, Div, FlexBox, Grid, Loader, Text } from "styles";
import { useStore } from "store";
import { getGamesByUsername } from "queries/queries";

import { config, useTransition } from "react-spring";
import { COLORS } from "utils/DEFS";

function GameCarousel({ container }: GenericPageProps) {
    const [gameList, setGameList] = useState<any[]>();
    const [loading, setLoading] = useState(false);
    const user = useStore((state) => state.userData);

    const transitions = useTransition(gameList, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        trail: 100,
        config: config.molasses,
    });

    useEffect(() => {
        if (!user?.username) return;

        getGamesByUsername({
            filter: {
                artist: { eq: user.username },
            },
        }).then((data) => {
            let test = data.games
                .filter(({ head, torso, legs }: any) => head && torso && legs)
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
    }, [user]);

    return (
        <Div
            style={{
                flex: "0 1",
                justifySelf: "flex-end",
                flexBasis: container?.current
                    ? container.current.offsetHeight - 50 + "px"
                    : "10px",
                overflowY: "auto",
            }}
        >
            {gameList?.length === 0 && (
                <Text color={COLORS.danger}>
                    This place looks empty, go and draw some sketches by
                    clicking on the draw button locate on the navigation bar and
                    let your creativity go wild.
                </Text>
            )}

            <Grid
                position="relative"
                style={{
                    justifyContent: "space-around",
                    gridTemplateColumns: "repeat(auto-fit, 400px)",
                    gap: "0.2em",
                }}
            >
                {loading === false ? (
                    <FlexBox
                        justifyContent="center"
                        width="100%"
                        height="80%"
                        style={{ top: "100px" }}
                        position="absolute"
                        margin="auto"
                    >
                        <Loader margin="2rem" width="100px" height="100px" />
                    </FlexBox>
                ) : null}

                {transitions((style, item) => (
                    <AnimatedFlex style={style}>
                        <GameCard game={item} key={item.id} />
                    </AnimatedFlex>
                ))}
            </Grid>
        </Div>
    );
}

export default GameCarousel;
