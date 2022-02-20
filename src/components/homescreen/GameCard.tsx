import React from "react";
import { useStore } from "store";
import { Card, Text } from "styles";
import { Game } from "types/API";
import { COLORS } from "utils/DEFS";

//TODO - Set PROPS and make dynamic
function GameCard({ game }: { game: Game }) {
    const viewGame = useStore((store) => store.actions.viewGame);
    const completedDate = new Date(game.updatedAt);
    return (
        <Card
            style={{ overflow: "hidden" }}
            margin="1rem"
            height="125px"
            width="90%"
            onClick={() => viewGame(game)}
        >
            <Text color={COLORS.black}>
                Frakenstitched at: {completedDate.toLocaleString()}
            </Text>
            <br />
            <Text color={COLORS.black}>Head: {game.head?.artist}</Text>
            <Text color={COLORS.black}>Torso: {game.torso?.artist}</Text>
            <Text color={COLORS.black}>Legs: {game.legs?.artist}</Text>
        </Card>
    );
}

export default GameCard;
