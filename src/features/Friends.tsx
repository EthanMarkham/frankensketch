import SectionText from "components/general/SectionText";
import Header from "components/header/header";
import NavBar from "components/navbar/NavBar";
import {Button, FlexBox, PlaceHolderDiv, Text} from "styles"
import { Icons } from "styles/svg/ui-icons/icons";
import { useState } from "react";
import Modal from "./Modal";

function Friends() {
    //Control is modal should be shown
    const [isShown, setIsShown] = useState(false); 

    //TODO - Chage with actual friend list
    const friendsList = [1,2,3,4,5,6,7,8,9,10,11]

    return (
        <FlexBox direction="column">
            <Header/>
            <FlexBox direction="row" justifyContent="space-between" margin="0 1.5rem">
                <SectionText text="Friends"/>
                <Button background="none" onClick={() => setIsShown(true)}>
                    <img src={Icons.Plus} alt="Plus icon" />
                </Button>
            </FlexBox>
            <FlexBox direction="column" margin="0 1.5rem">
                {friendsList.map((value, i) => {
                    return <PlaceHolderDiv/>
                })}


            </FlexBox>
            
            <NavBar/>
            {isShown && <Modal setIsShown={setIsShown} type="addFriend"/>}
        </FlexBox>
    );
}

export default Friends;
