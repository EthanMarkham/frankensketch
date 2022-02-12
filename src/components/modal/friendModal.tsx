import SectionText from "components/general/SectionText";
import React, { useState } from "react";
import { Button, FlexBox, InputField, InputGroup, InputLabel, InputTextHelper, Text } from "styles";
import { Icons } from "styles/svg/ui-icons/icons";
import { COLORS } from "utils/DEFS";

const FriendModal = () => {
    const [fieldData, setFieldData] = useState("");

    //MOCK DATA
    const usersList = ["pparker", "hpotter", 'mmorales']

    return (
        <FlexBox direction="column" padding="0 1rem">
            <SectionText text="Add Friend"/>
            <InputGroup width="100%">
                <InputLabel>Enter friend username</InputLabel>
                <FlexBox direction="row" justifyContent="flex-start" margin="0.5rem 0">
                    <InputField
                        onChange={(event) => setFieldData(event.target.value)}
                        type="search"
                        required={true}
                    ></InputField>
                    <Button margin="0 0 0 1rem" onClick={() => {alert("Look for friends ()")}} background="none"><img src={Icons.FindUser}/></Button>
                </FlexBox>
                
            </InputGroup>
            <Text fontSize="1.25em">Results</Text>
            {/* Replace with real data */}
            {usersList.map((value, i) => {
                return (
                    <InputGroup width="100%">
                        <FlexBox direction="row" justifyContent="flex-start" margin="0.5rem 0">
                            <InputField
                                backgroundColor={COLORS.gray}
                                value={value}
                                disabled={true}
                            ></InputField>
                            <Button margin="0 0 0 1rem" onClick={() => {alert("Add friend ()")}} background="none"><img src={Icons.AddUser}/></Button>
                        </FlexBox>
                    </InputGroup>
                )
            })}

        </FlexBox>
    );
};

export default FriendModal;