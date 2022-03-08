import CommunityCard from "components/community/CommunityCard";
import useCommunityContent from "hooks/useCommunityContent";
import { useState, useRef, useCallback } from "react";
import { FlexBox, Text } from "styles";
import { COLORS } from "utils/DEFS";

function Community() {
    //State
    //Custom Hook
    const [gameList, loading, error, nextToken, loadGames] =
        useCommunityContent();

    //Observe to keep track of when to load more data
    const observer = useRef<IntersectionObserver>();

    const lastGameRef = useCallback(
        (node) => {
            if (loading) return;
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting && nextToken) {
                        loadGames();
                    }
                },
                {
                    rootMargin: "100px",
                }
            );
            if (node) observer.current.observe(node);
        },
        [loading, nextToken, loadGames]
    );
    return (
        <FlexBox
            direction="column"
            padding="0 1.5rem"
            css={{ overflowY: "auto" }}
            height="100vh"
        >
            <FlexBox
                direction="column"
                justifyContent="center"
                alignContent="center"
            >
                <div className="community-card-container">
                    <FlexBox direction="column" width="100%">
                        <Text
                            color={COLORS.secondaryGreen}
                            css={{ textAlign: "center" }}
                            margin="0 0 1rem 0"
                        >
                            Let's see what others have created!
                        </Text>
                        {gameList.map((g, i) => {
                            if (gameList.length === i + 1) {
                                return (
                                    <FlexBox
                                        direction="column"
                                        width="100%"
                                        margin="0 0 0.5rem 0"
                                        ref={lastGameRef}
                                        key={i}
                                    >
                                        <CommunityCard game={g} key={g.id} />{" "}
                                        <hr className="community-card-separator" />{" "}
                                    </FlexBox>
                                );
                            } else {
                                return (
                                    <FlexBox
                                        direction="column"
                                        width="100%"
                                        margin="0 0 0.5rem 0"
                                        key={i}
                                    >
                                        <CommunityCard game={g} key={g.id} />{" "}
                                        <hr className="community-card-separator" />{" "}
                                    </FlexBox>
                                );
                            }
                        })}
                        {loading && <div>LOADING FRANKENSKETCHES</div>}

                        {!error && !loading && (
                            <FlexBox
                                direction="column"
                                justifyContent="space-around"
                                height="8rem"
                            >
                                <Text
                                    color={COLORS.secondaryGreen}
                                    css={{ textAlign: "center" }}
                                >
                                    WOW, you have seen all the available drawings that the community has created so far. Go draw something of your own!
                                </Text>
                                <Text
                                    color={COLORS.secondaryGreen}
                                    css={{ textAlign: "center" }}
                                >
                                    We want to see what you do next!
                                </Text>
                            </FlexBox>
                        )}

                        {error && (
                            <div>
                                An error has occurred and we couldn't load more
                                drawings! Sorry :(
                            </div>
                        )}
                    </FlexBox>
                </div>
            </FlexBox>
        </FlexBox>
    );
}

export default Community;
