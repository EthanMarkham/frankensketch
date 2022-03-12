//TODO: GROUP THESE IMPORTS SO WE CAN DO ALL FROM components/homescreen
//import ActionButton from "components/general/ActionButton";
import SectionText from "components/general/SectionText";
import { HomeScreenProps } from "types";
import { AnimatedFlex, Button, Div, FlexBox, Grid, Text } from "styles";
import { useStore } from "store";
import {
    getGamesByUsername,
    getUnfishedGamesByUsername,
} from "queries/queries";
import { config, useTransition } from "react-spring";
import { useEffect, useMemo, useState } from "react";
import GameCard from "components/homescreen/GameCard";
import { capitalizeFirstLetter } from "utils";
import { Icons } from "styles/svg/ui-icons/icons";

function HomeScreen({ container }: HomeScreenProps) {
    const [gameList, setGameList] = useState<any[]>();
    const [loading, setLoading] = useState(false);
    const user = useStore((state) => state.userData);
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
        setGameList([]);
        setServerSideProps({ viewAs: null });
    };

    useEffect(() => {
        if (viewAs === null) return;
        const filter = {
            filter: {
                artist: { eq: viewAs },
            },
        };

        /*
        getUnfishedGamesByUsername(filter)
            .then((data) => {
                console.log("unfisihed games", data);
            })
            .catch((err) => console.log("oops", err));

        console.log("fetching games for " + viewAs, filter);
        */
        getGamesByUsername(filter).then((data) => {
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

        return () => {
            //@TODO: Cancel pending calls
        };
    }, [viewAs]);

    return (
        <FlexBox direction="column" padding="0 1.5rem">
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
                    flex: "0 1",
                    justifySelf: "flex-end",
                    flexBasis: container?.current
                        ? container.current.offsetHeight - 50 + "px"
                        : "10px",
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
                    {loading === false ? (
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

                    {transitions((style, item) => (
                        <AnimatedFlex style={style}>
                            <GameCard game={item} key={item.id} />
                        </AnimatedFlex>
                    ))}
                </Grid>
            </Div>
        </FlexBox>
    );
}

export default HomeScreen;
