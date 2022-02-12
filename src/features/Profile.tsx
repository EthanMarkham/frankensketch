import { Auth } from "aws-amplify";
import SectionText from "components/general/SectionText";
import Header from "components/header/header";
import NavBar from "components/navbar/NavBar";
import { useStore } from "store";
import { Button, FlexBox, PlaceHolderDiv, Text } from "styles";
import { Icons } from "styles/svg/ui-icons/icons";
import { COLORS } from "utils/DEFS";

function Profile() {
    //TODO - Get user information to be display in this page
    const profileInfo = [1,2,3,4,5,6]

    const changePage =  useStore(state => state.actions.setPage);
    const onClickBack = () => {
       changePage(1)
    }

    return (
        <FlexBox direction="column">
            <Header/>
            <FlexBox justifyContent="space-between" margin="0 1.5rem">
                <Button background="none" borderRadius="0" onClick={onClickBack}>
                    <img src={Icons.GoBack} alt="Go back icon" />
                </Button>

                <Button background="none" onClick={() => Auth.signOut()}>
                    <Text color={COLORS.danger} fontSize="1.5em">Logout</Text>
                </Button>
            </FlexBox>
            <FlexBox direction="column" margin="0 1.5rem">
                <SectionText text="Profile"/>
                {profileInfo.map((value, i) => {
                    return <PlaceHolderDiv/>
                })}
                <SectionText text="Stats"/>   
                {profileInfo.map((value, i) => {
                    return <PlaceHolderDiv/>
                })}

            </FlexBox>
            <NavBar/>
        </FlexBox>
    );
}

export default Profile;
