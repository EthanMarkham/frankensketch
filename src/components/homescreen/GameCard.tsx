import { Game } from "API";
import React from "react";
import { useStore } from "store";
import { Card, Div, FlexBox, Text } from "styles";
import { COLORS } from "utils/DEFS";

function GameCard({ game }: { game: Game }) {
    const viewGame = useStore((store) => store.actions.viewGame);
    const completedDate = new Date(game.createdAt);
    return (
        <Card
            style={{ overflow: "hidden" }}
            margin="1rem"
            height="125px"
            width="90%"
            onClick={() => {
                viewGame(game.id);
            }}
        >
            <Text color={COLORS.black}>
                Frankenstitched at: {completedDate.toLocaleString()}
            </Text>
            <br />
            <FlexBox direction="row" justifyContent="space-around">
                <Div>
                    <Text color={COLORS.black}>Head: {game.head?.artist}</Text>
                    <Text color={COLORS.black}>
                        Torso: {game.torso?.artist}
                    </Text>
                    <Text color={COLORS.black}>Legs: {game.legs?.artist}</Text>
                </Div>
                <Div>
                    <Text color={COLORS.black}>
                        Likes:{" "}
                        {game.UserLikes?.items.filter(
                            (l) => l?._deleted !== true
                        ).length || 0}
                    </Text>
                </Div>
            </FlexBox>
        </Card>
    );
}

export default GameCard;
