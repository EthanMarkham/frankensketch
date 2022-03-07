import React from "react";
import { useStore } from "store";
import { Card, Text } from "styles";
import { Game } from "types/API";
import { GameRecord } from "types/home";
import { COLORS } from "utils/DEFS";

function GameCard({ game }: { game: GameRecord }) {
    const viewGame = useStore((store) => store.actions.viewGame);
    const completedDate = new Date(game.createdAt);

    //Query game with id here
    //viewGame(game);
    return (
        <Card
            style={{ overflow: "hidden" }}
            margin="1rem"
            height="125px"
            width="90%"
            onClick={() => {}}
        >
            <Text color={COLORS.black}>
                Frankenstitched at: {completedDate.toLocaleString()}
            </Text>
            <br />
            <Text color={COLORS.black}>Head: {game.head?.artist}</Text>
            <Text color={COLORS.black}>Torso: {game.torso?.artist}</Text>
            <Text color={COLORS.black}>Legs: {game.legs?.artist}</Text>
        </Card>
    );
}

export default GameCard;
