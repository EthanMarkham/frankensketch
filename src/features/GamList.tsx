import { API, graphqlOperation } from "aws-amplify";
import React from "react";
import { listGames } from "graphql/queries";
import { FlexBox } from "styles";

const GameList = () => {
    const getGames = async () => {
        const gameData = await API.graphql(graphqlOperation(listGames));
        console.log(gameData);
    }

    return (
        <FlexBox direction="row">
            HI
        </FlexBox>
    )
}

export default GameList;