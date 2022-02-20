import { Auth } from "aws-amplify";
import BackButton from "components/general/BackButton";
import SectionText from "components/general/SectionText";
import { useStore } from "store";
import { Button, FlexBox, PlaceHolderDiv, Text } from "styles";
import { COLORS } from "utils/DEFS";

function Profile() {
    //TODO - Get user information to be display in this page
    const profileInfo = [1, 2, 3, 4, 5, 6];
    const changePage = useStore((state) => state.actions.setPage);

    return (
        <FlexBox direction="column">
            <FlexBox justifyContent="space-between" margin="0 1.5rem">
                <BackButton
                    onClick={() => {
                        changePage(1);
                    }}
                />

                <Button background="none" onClick={() => Auth.signOut()}>
                    <Text color={COLORS.danger} fontSize="1.5em">
                        Logout
                    </Text>
                </Button>
            </FlexBox>
            <FlexBox direction="column" margin="0 1.5rem">
                <SectionText text="Profile" />
                {profileInfo.map((value, i) => {
                    return <PlaceHolderDiv />;
                })}
                <SectionText text="Stats" />
                {profileInfo.map((value, i) => {
                    return <PlaceHolderDiv />;
                })}
            </FlexBox>
        </FlexBox>
    );
}

export default Profile;
