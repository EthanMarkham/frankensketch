import FriendModal from "components/modal/friendModal";
import GameInfoModal from "components/modal/gameInfoModal";
import ReportModal from "components/modal/reportModal";
import StartGameModal from "components/modal/startGameModal";
import React, { useState } from "react";
import { Button, FlexBox, Stiches } from "styles";
import { Icons } from "styles/svg/ui-icons/icons";

//ModalTypes: addFriend, startGame, createReport, gameInfo
//Add optional game info 
const Modal = ({
    setIsShown, 
    type,
    isNewGame
}:{
    setIsShown:any,
    type:string
    isNewGame?:boolean
}) => {
    return (
        <>
            <div className="darkBG" />
            <div className="centered">
                <div className="modal">
                <div className="modalHeader">
                    <Button margin="0.5rem" background="none" onClick={() => setIsShown(false)}><img src={Icons.GoBack}/></Button>
                    <Stiches margin="-0.25rem 0 .5rem 0" width="100%" />
                </div>
                <FlexBox direction="column" padding="0 1rem">
                    {type === "addFriend" && <FriendModal/>}
                    {type === "createReport" && <ReportModal/>}
                    {type === "gameInfo" && <GameInfoModal/>}
                    {type === "startGame" && <StartGameModal isNewGame={isNewGame}/>}
                </FlexBox>
                </div>
            </div>
        </>
    );
};

export default Modal;