import React from "react";
import { Game } from "models";
import { FlexBox } from "styles";

const GameListContainer = ({ game, title }: { game: Game; title: string }) => {
    return (
        <FlexBox width="100%">
            <FlexBox direction="row">
                <label>Head:</label>
                {game.gameHeadId !== null ? "DONE" : "Needs work"}
                <label>TORST:</label>
                {game.gameLegsId !== null ? "DONE" : "Needs work"}
                <label>Head:</label>
                {game.gameTorsoId !== null ? "DONE" : "Needs work"}
            </FlexBox>
        </FlexBox>
    );
};

export default GameListContainer;
