import SectionText from "components/general/SectionText";
import { Button, FlexBox, Text } from "styles";
import { Icons } from "styles/svg/ui-icons/icons";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { getUser } from "../graphql/queries";
import { getRandomItem } from "utils/functions";
import { COLORS } from "utils/DEFS";
import { toast } from "react-toastify";
import { UpdateUserInput } from "API";
import { updateUser } from "graphql/mutations";
import { useStore } from "store";

export default function Friends() {
    //Friend error message
    const noFriendResponses: string[] = [
        "Couln't find any friends, click on the plus icon to add new friends!",
        "No friends found! Click on the plus icon to add a friend.",
        "This place looks empty, go find new friends by clicking on the plus icon!",
    ];
    const [errorMessage, setErrorMessage] = useState("0 friends available");
    const [hasFriends, setHasFriends] = useState(false);
    const setServerSideProps = useStore(
        (state) => state.actions.setServerSideProps
    );
    const setPage = useStore((state) => state.actions.setPage);
    const currentUser = useStore((state) => state.userData);

    //Control is modal should be shown
    const [isShown, setIsShown] = useState(false);

    const viewDrawings = (username: string) => {
        setServerSideProps({ viewAs: username });
        setPage(1);
    };

    //Friends List
    const [friendsList, setFriendList] = useState<Array<string>>(
        new Array<string>()
    );
    useEffect(() => {
        getFriends();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    //WE HAVE AUTH INFO IN STATE ALREADY. CALL HOOK USE AUTH
    const getFriends = () => {
        try {
            Auth.currentAuthenticatedUser().then(async (data) => {
                const userData = (await API.graphql(
                    graphqlOperation(getUser, { id: data.username })
                )) as unknown as any;
                const friends: [] = userData.data.getUser.friends;
                if (friends.length === 0) {
                    setErrorMessage(getRandomItem(noFriendResponses));
                    setHasFriends(false);
                } else {
                    setHasFriends(true);
                    setFriendList(friends);
                }
            });
        } catch (error) {
            setErrorMessage(getRandomItem(noFriendResponses));
            setHasFriends(false);
        }
    };

    //TODO - Fix error when removing friend where data is duplicated
    const removeFriend = async (username: string) => {
        let friends = friendsList.filter((el) => el !== username);

        if (currentUser?.email) {
            let userInput: UpdateUserInput = {
                id: currentUser?.email,
                friends: friends,
            };
            try {
                await API.graphql(
                    graphqlOperation(updateUser, { input: userInput })
                );
                toast.success(`${username} has been removed from your friends`);
            } catch (error) {
                toast.error(
                    `Failed to remove ${username} from friends, please try again later!`
                );
            }
        }
    };

    return (
        <FlexBox direction="column">
            <FlexBox
                direction="row"
                justifyContent="space-between"
                margin="0 1.5rem"
            >
                <SectionText text="Friends" />
                <Button background="none" onClick={() => setIsShown(true)}>
                    <img src={Icons.Plus} alt="Plus icon" />
                </Button>
            </FlexBox>
            <FlexBox
                direction="column"
                margin="0 1.5rem"
                css={{ overflowY: "auto" }}
                height="100vh"
            >
                {!hasFriends && (
                    <Text
                        fontSize="1.5em"
                        fontWeight="300"
                        color={COLORS.danger}
                    >
                        {errorMessage}
                    </Text>
                )}
                {hasFriends &&
                    friendsList.map((value, i) => {
                        return (
                            <FlexBox
                                key={i}
                                justifyContent="space-between"
                                alignContent="center"
                                margin="0.5rem 0"
                                borderRadius="10px"
                                padding="0.5rem"
                                css={{ border: "2px solid white" }}
                            >
                                <Text
                                    fontSize="1.25em"
                                    style={{ flex: "1 1 90%" }}
                                    onClick={() => viewDrawings(value)}
                                >
                                    {value}
                                </Text>
                                <Button
                                    margin="0 0 0 1rem"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        removeFriend(value);
                                    }}
                                    background="none"
                                >
                                    <img
                                        src={Icons.Delete}
                                        width="25"
                                        height="25"
                                        alt="delete icon"
                                    />
                                </Button>
                            </FlexBox>
                        );
                    })}
            </FlexBox>

            {isShown && (
                <Modal
                    setIsShown={setIsShown}
                    type="addFriend"
                    friends={friendsList}
                />
            )}
        </FlexBox>
    );
}
