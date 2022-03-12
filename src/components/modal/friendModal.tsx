import { UpdateUserInput } from "API";
import { API, graphqlOperation } from "aws-amplify";
import SectionText from "components/general/SectionText";
import { updateUser } from "graphql/mutations";
import { listUsers } from "graphql/queries";
import React, { useEffect, useState } from "react";
import { useStore } from "store";
import {
    Button,
    FlexBox,
    InputField,
    InputGroup,
    InputLabel,
    InputTextHelper,
    Text,
} from "styles";
import { Icons } from "styles/svg/ui-icons/icons";
import { User } from "types/API";
import { COLORS } from "utils/DEFS";
import { toast } from "react-toastify";

const FriendModal = ({ friends, setIsShown }: { friends?: string[], setIsShown: any }) => {
    const [searchField, setSearchField] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [userList, setUserList] = useState([""]);

    const currentUser = useStore((state) => state.userData);

    //search
    const searchUser = () => {
        getUsers();
        setSearchField("");
    };

    //Get users
    useEffect(() => {
        getUsers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userList]);
    const getUsers = async () => {
        try {
            const response = (await API.graphql(
                graphqlOperation(listUsers, {
                    filter: {
                        userName: {
                            contains: searchField,
                        },
                    },
                })
            )) as unknown as any;
            const data: User[] = response.data.listUsers.items;
            let usernames: string[] = [];
            data.forEach((e) => usernames.push(e.userName));
            //dont show current friends
            if (friends) {
                usernames = usernames.filter((el) => !friends.includes(el));
            }
            //Remove self
            if (currentUser?.username) {
                usernames = usernames.filter(
                    (el) => el !== currentUser.username
                );
            }
            setUserList(usernames);
        } catch (error) {
            setErrorMessage("0 Results Found.");
        }
    };

    //Update error messages
    useEffect(() => {
        switch (userList.length) {
            case 0:
                setErrorMessage("0 Results Found.");
                break;
            default:
                setErrorMessage("");
                break;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userList]);

    //Add Friend
    const addFriend = async (username: string) => {
        if (currentUser?.email) {
            let userInput: UpdateUserInput = {
                id: currentUser.email,
                friends: [`${username}`],
            };
            try {
                await API.graphql(
                    graphqlOperation(updateUser, { input: userInput })
                );
                toast.success(`${username} has been added to your friends!`);
                setIsShown(false)
            } catch (error) {
                toast.error(
                    `Failed to add ${username} as a friend, please try again later!`
                );
            }
        }
    };

    return (
        <FlexBox direction="column" padding="0 1rem">
            <SectionText text="Add Friend" />
            <InputGroup width="100%">
                <InputLabel>Search</InputLabel>
                <FlexBox
                    direction="row"
                    justifyContent="flex-start"
                    margin="0.5rem 0"
                >
                    <InputField
                        onChange={(event) => setSearchField(event.target.value)}
                        type="search"
                        placeholder="username"
                        value={searchField}
                    ></InputField>
                    <Button
                        margin="0 0 0 1rem"
                        onClick={() => searchUser()}
                        background="none"
                    >
                        <img src={Icons.Search} width="30" alt="" />
                    </Button>
                </FlexBox>
                <InputTextHelper color={COLORS.gray} fontSize="0.8em">
                    *case sensitive
                </InputTextHelper>
            </InputGroup>
            <Text fontSize="1.25em">Results</Text>
            {errorMessage && (
                <FlexBox justifyContent="center">
                    <Text color={COLORS.danger} fontSize="2em">
                        {errorMessage}
                    </Text>
                </FlexBox>
            )}
            <FlexBox
                direction="column"
                css={{ overflow: "scroll" }}
                height="30rem"
            >
                {userList.map((value, i) => {
                    return (
                        <FlexBox
                            direction="row"
                            justifyContent="space-between"
                            margin="0.5rem 0"
                            alignContent="center"
                            padding="0.5rem"
                            borderRadius="10px"
                            key={i}
                            css={{ border: "2px solid white" }}
                        >
                            <Text fontSize="1.2em" color={COLORS.gray}>
                                {value}
                            </Text>
                            <Button
                                margin="0 0 0 1rem"
                                onClick={() => addFriend(value)}
                                background="none"
                            >
                                <img src={Icons.AddUser} alt="" />
                            </Button>
                        </FlexBox>
                    );
                })}
            </FlexBox>
        </FlexBox>
    );
};

export default FriendModal;
