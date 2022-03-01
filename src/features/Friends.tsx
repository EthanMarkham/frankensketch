import SectionText from "components/general/SectionText";
import { Button, FlexBox, PlaceHolderDiv, Text } from "styles";
import { Icons } from "styles/svg/ui-icons/icons";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { getUser } from "../graphql/queries";
import { getRandomItem } from "utils/functions";
import { COLORS } from "utils/DEFS";

function Friends() {
    //Friend error message
    const noFriendResponses: string[] = [
        "Couln't find any friends, click on the plus icon to add new friends!",
        "No friends found! Click on the plus icon to add a friend.",
        "This looks so empty, go find new friends by clicking on the plus icon!",
    ];
    const [errorMessage, setErrorMessage] = useState("0 friends available");
    const [hasFriends, setHasFriends] = useState(false);

    //Control is modal should be shown
    const [isShown, setIsShown] = useState(false);

    //Friends List
    const [friendsList, setFriendList] = useState([]);
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
            <FlexBox direction="column" margin="0 1.5rem">
                {!hasFriends && (
                    <Text fontSize="1.5em" color={COLORS.danger}>
                        {errorMessage}
                    </Text>
                )}
                {hasFriends &&
                    friendsList.map((value, i) => {
                        return <PlaceHolderDiv />;
                    })}
            </FlexBox>

            {isShown && <Modal setIsShown={setIsShown} type="addFriend" />}
        </FlexBox>
    );
}

export default Friends;
