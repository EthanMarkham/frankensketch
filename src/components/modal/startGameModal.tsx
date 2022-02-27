import SectionText from "components/general/SectionText";
import JoinOptions from "components/homescreen/JoinOptions";
import useDialog from "hooks/useDialog";
import React, { useState } from "react";
import { Button, FlexBox, InputField, InputGroup, InputLabel, InputTextHelper } from "styles";
import { Icons } from "styles/svg/ui-icons/icons";
import { COLORS } from "utils/DEFS";

const StartGameModal = ({isNewGame}:{isNewGame?:boolean}) => {
    const [gameIdField, setgameIdField] = useState("");

    const [joinDialog, joinActions] = useDialog({
        headerProps: { backgroundColor: COLORS.blue },
    });

    const joinGame = () => {
        joinActions.open("But how?", <JoinOptions />);
    };

    const createNewGame = () => {
        alert("Create new game()")
    }

    return (
        <FlexBox direction="column" padding="0 1rem">
            <SectionText text="New Game"/>

            <InputGroup width="100%">
                <InputLabel>UniqueID</InputLabel>
                <InputField
                    onChange={(event) => setgameIdField(event.target.value)}
                    type="text"
                    disabled={isNewGame ? true : false}
                    required={true}
                ></InputField>
                <InputTextHelper>{isNewGame ? "" : "optional"}</InputTextHelper>
            </InputGroup>

            {isNewGame && (
                <InputGroup width="100%">
                    <InputLabel>Invite Friends</InputLabel>
                    <FlexBox direction="row" justifyContent="flex-start" margin="0.5rem 0">
                        <InputField
                            backgroundColor={COLORS.gray}
                        ></InputField>
                        <Button margin="0 0 0 1rem" onClick={() => {alert("Invite Friend ()")}} background="none"><img src={Icons.AddUser} alt="add user icon"/></Button>
                    </FlexBox>
                </InputGroup>
            )}
            <FlexBox vhCenter={true}>
                <Button 
                    backgroundColor={COLORS.success}
                    width="15rem" 
                    height="3rem" 
                    fontSize="1.25em" 
                    color={COLORS.white}
                    onClick={isNewGame ? createNewGame : joinGame}
                >
                    {isNewGame ? "Start game" : "Join game"}
                </Button>
            </FlexBox>
            {joinDialog && joinDialog}
        </FlexBox>
    );
};

export default StartGameModal;