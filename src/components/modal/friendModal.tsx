import { API, graphqlOperation } from "aws-amplify";
import SectionText from "components/general/SectionText";
import { listUsers } from "graphql/queries";
import React, { useEffect, useState } from "react";
import { Button, FlexBox, InputField, InputGroup, InputLabel, Text } from "styles";
import { Icons } from "styles/svg/ui-icons/icons";
import { User } from "types/API";
import { COLORS } from "utils/DEFS";

/*
TODO: Implement search functionality
TODO: Implement add friend functionality
*/

const FriendModal = () => {
    const [fieldData, setFieldData] = useState("");
    const [errorMessage, setErrorMessage] = useState("")

    //Users
    const [usersList, setUserList] = useState([""])
    useEffect(() => {
        getUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getUsers = async () => {
        try {
            const response = await (API.graphql(graphqlOperation(listUsers))) as unknown as any
            const data: User[] = response.data.listUsers.items
            let usernames: string[] = []
            data.forEach(e => usernames.push(e.userName));
            setUserList(usernames)
        } catch (error) {
            setErrorMessage("No results founds")
        }
    }

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
                    <Button margin="0 0 0 1rem" onClick={() => {alert("Look for friends ()")}} background="none"><img src={Icons.FindUser} alt=""/></Button>
                </FlexBox>
                
            </InputGroup>
            <Text fontSize="1.25em">Results</Text>
            {usersList.map((value, i) => {
                return (
                    <InputGroup width="100%" key={i}>
                        <FlexBox direction="row" justifyContent="flex-start" margin="0.5rem 0">
                            <InputField
                                backgroundColor={COLORS.gray}
                                value={value}
                                disabled={true}
                            ></InputField>
                            <Button margin="0 0 0 1rem" onClick={() => {alert("Add friend ()")}} background="none"><img src={Icons.AddUser} alt=""/></Button>
                        </FlexBox>
                    </InputGroup>
                )
            })}

        </FlexBox>
    );
};

export default FriendModal;