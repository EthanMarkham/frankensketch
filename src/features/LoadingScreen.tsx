import { Auth } from "aws-amplify";
import React from "react";
import { FlexBox, FrankenSketchHeader, Text, Loader, Button } from "styles";
import { COLORS } from "utils/DEFS";
import { getRandomItem } from "utils/functions";
import { loadingTipsResponses } from "utils/messages";
import blobScene from "../styles/svg/blob-scene-haikei.svg";

function LoadingScreen() {
    return (
        <FlexBox
            direction="column"
            verticalAlignment="center"
            vhCenter={true}
            backgroundImage={blobScene}
        >
            <FrankenSketchHeader fontSize="4em">
                FrankenSketch
            </FrankenSketchHeader>
            <Text color={COLORS.secondaryGreen} margin="2rem 0 0 ">
                {getRandomItem(loadingTipsResponses)}
            </Text>
            <Loader margin="2rem" width="200px" height="200px"></Loader>
            <Button onClick={() => Auth.signOut()} />
        </FlexBox>
    );
}

export default LoadingScreen;
