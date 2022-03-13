//TODO: GROUP THESE IMPORTS SO WE CAN DO ALL FROM components/homescreen
//import ActionButton from "components/general/ActionButton";
import SectionText from "components/general/SectionText";
import { HomeScreenProps } from "types";
import { AnimatedFlex, Button, Div, FlexBox, Grid, Text } from "styles";
import { useStore } from "store";
import { getGamesByUsername } from "queries/queries";
import { config, useTransition } from "react-spring";
import { useEffect, useMemo, useState } from "react";
import GameCard from "components/homescreen/GameCard";
import { capitalizeFirstLetter } from "utils";
import { Icons } from "styles/svg/ui-icons/icons";
import { sortGames } from "utils/functions";

function HomeScreen(props: HomeScreenProps) {
    const [gameList, setGameList] = useState<any[]>();
    const [loading, setLoading] = useState(false);
    const user = useStore((state) => state.userData);
    const games = useStore((state) => state.games);
    const setServerSideProps = useStore(
        (state) => state.actions.setServerSideProps
    );
    const serverSideProps = useStore((state) => state.serverSideProps);

    const transitions = useTransition(gameList, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        //leave: { opacity: 0 },
        trail: 10,
        config: config.molasses,
    });

    const viewAs = useMemo<string | null>(() => {
        if (serverSideProps && serverSideProps.viewAs)
            return serverSideProps.viewAs;
        if (user && user.username) return user.username;
        return null;
    }, [serverSideProps, user]);

    const viewingSelf = useMemo<boolean>(() => {
        if (
            !serverSideProps ||
            !serverSideProps.viewAs ||
            !user ||
            !user.username
        )
            return true;
        return user.username === serverSideProps.viewAs;
    }, [serverSideProps, user]);

    const cancelViewAs = () => {
        setServerSideProps({ viewAs: null });
    };

    useEffect(() => {
        console.log("init", viewAs);

        if (!user?.username) return;

        if (viewAs === null || viewAs === user.username) {
            console.log("setting gameList to self");
            setGameList(games);
            setLoading(false);
        } else {
            console.log("fetching gameList for " + viewAs);

            const filter = {
                filter: {
                    artist: { eq: viewAs },
                },
            };
            setLoading(true);

            getGamesByUsername(filter).then((data) => {
                let sorted = sortGames(data.games);
                setGameList(sorted);
                setLoading(false);
            });

            return () => {
                setGameList([]);
            };
        }
    }, [games, user?.username, viewAs]);

    return (
        <FlexBox
            direction="column"
            padding="0 1.5rem"
            width="100%"
            height="100%"
        >
            <FlexBox direction="row" justifyContent="flex-start">
                <SectionText
                    text={
                        capitalizeFirstLetter(viewAs ? viewAs : "") +
                        "'s Drawing History"
                    }
                    style={{ height: "50px" }}
                />
                {viewingSelf === false && (
                    <Button
                        margin="0 1em"
                        background="none"
                        borderRadius="0"
                        onClick={cancelViewAs}
                    >
                        <img src={Icons.RedX} alt="Cancel" />
                    </Button>
                )}
            </FlexBox>

            <Div
                style={{
                    flex: "0 1 100%",
                    justifySelf: "flex-end",
                    overflowY: "auto",
                }}
            >
                <Grid
                    position="relative"
                    style={{
                        justifyContent: "space-around",
                        gridTemplateColumns: "repeat(auto-fit, 400px)",
                        gap: "0.2em",
                    }}
                >
                    {loading === true ? (
                        <FlexBox
                            justifyContent="center"
                            width="100%"
                            height="80%"
                            style={{ top: "100px" }}
                            position="absolute"
                            margin="auto"
                        >
                            <Text>Loading</Text>
                        </FlexBox>
                    ) : null}

                    {gameList?.length === 0 && loading === false ? (
                        <FlexBox
                            justifyContent="center"
                            width="100%"
                            height="80%"
                            style={{ top: "100px" }}
                            position="absolute"
                            margin="auto"
                        >
                            <Text>
                                {viewingSelf === false ? viewAs : "You"} should
                                draw some games!
                            </Text>
                        </FlexBox>
                    ) : null}

                    {transitions((style, item) => (
                        <AnimatedFlex style={style}>
                            <GameCard
                                game={item}
                                key={item.id + item._version}
                            />
                        </AnimatedFlex>
                    ))}
                </Grid>
            </Div>
        </FlexBox>
    );
}

export default HomeScreen;
