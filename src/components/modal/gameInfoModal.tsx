import SectionText from "components/general/SectionText";
import React, { useState } from "react";
import { Button, FlexBox, InputField, InputGroup, InputLabel, InputTextHelper, NavDiv, PlaceHolderDiv, Text } from "styles";
import { Icons } from "styles/svg/ui-icons/icons";
import { COLORS } from "utils/DEFS";

//TODO - Set game props
const GameInfoModal = () => {

    return (
        <FlexBox direction="column" padding="0 1rem">
            <SectionText text="Game Info"/>
            <PlaceHolderDiv height="50vh"/>
        </FlexBox>
    );
};

export default GameInfoModal;