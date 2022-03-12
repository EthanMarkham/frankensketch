import { API, graphqlOperation } from "aws-amplify";
import { listUsers } from "graphql/queries";
import { User } from "models";
import { useEffect, useState } from "react";
import { Button, FlexBox, InputField, InputGroup, InputLabel, InputTextHelper, Text } from "styles";
import { Icons } from "styles/svg/ui-icons/icons";
import { user } from "types/admin";
import { COLORS } from "utils/DEFS";
import UserAccordion from "./UserAccordion";

const AdminUsers = () => {
    const [searchField, setSearchField] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [usersList, setUserList] = useState<Array<user>>(new Array<user>());

    const searchUser = () => {
        getUsers()
        setSearchField("")
    }

    //Get Users
    useEffect(() => {
        getUsers()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const getUsers = async () => {
        try {
            const response = await (API.graphql(graphqlOperation(listUsers, {
                filter: {
                    userName: {
                        contains: searchField
                    }
                }
            }))) as unknown as any
            const data: User[] = response.data.listUsers.items
            let users: user[] = []
            data.forEach(e => {
                if (!(e.createdAt === undefined) && !(e.updatedAt === undefined)) {
                    let temp: user = { id: e.id, userName: e.userName, createdAt: e.createdAt, updatedAt: e.updatedAt }
                    users.push(temp)
                }
            });
            setUserList(users)
        } catch (error) {
            setErrorMessage("0 Results Found.")
        }
    }

    //Update error messages
    useEffect(() => {
        switch (usersList.length) {
            case 0:
                setErrorMessage("0 Results Found.")
                break;
            default:
                setErrorMessage("")
                break;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [usersList])

    return (
        <FlexBox direction="column" height="65vh">
            <InputGroup width="100%">
                <InputLabel>Search</InputLabel>
                <FlexBox direction="row" justifyContent="flex-start" margin="0.5rem 0">
                    <InputField
                        onChange={(event) => setSearchField(event.target.value)}
                        type="search"
                        placeholder="username"
                        value={searchField}
                    ></InputField>
                    <Button margin="0 0 0 1rem" onClick={() => searchUser()} background="none"><img src={Icons.Search} width="30" alt="" /></Button>
                </FlexBox>
                <InputTextHelper color={COLORS.gray} fontSize='0.8em'>*case sensitive</InputTextHelper>
            </InputGroup>
            {errorMessage && (
                <FlexBox justifyContent="center">
                    <Text color={COLORS.danger} fontSize='2em'>{errorMessage}</Text>
                </FlexBox>
            )}

            <FlexBox direction="column" css={{ overflowY: "scroll" }} height='55vh'>
                {usersList.map((value, i) => {
                    return (
                        <UserAccordion key={i} {...value} />
                    )
                })}
            </FlexBox>
        </FlexBox>
    );
};

export default AdminUsers;