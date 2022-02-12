import SectionText from "components/general/SectionText";
import Header from "components/header/header";
import NavBar from "components/navbar/NavBar";
import { Button, FlexBox, PlaceHolderDiv } from "styles";
import { Icons } from "styles/svg/ui-icons/icons";

function Settings() {
    
    //TODO add actual settings
    const settingsList = [1,2,3,4,5,6,7,8,9,10,11]

    return (
        <FlexBox direction="column">
            <Header/>
            <FlexBox direction="column" margin="0 1.5rem">
                <SectionText text="Settings"/>
                {settingsList.map((value, i) => {
                    return <PlaceHolderDiv/>
                })}


            </FlexBox>
            <NavBar/>
        </FlexBox>
    );
}

export default Settings;
