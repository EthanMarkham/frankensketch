import ActionButton from "components/general/ActionButton";
import GameCarousel from "components/homescreen/GameCarousel";
import SectionText from "components/general/SectionText";
import { Button, FlexBox, Stiches, Text } from "styles";
import { HomeScreenProps } from "types";
import { COLORS } from "utils/DEFS";
import { Icons } from "styles/svg/ui-icons/icons";
import NavBar from "components/navbar/NavBar";
import Header from "components/header/header";
import { useStore } from "store";
import { useState } from "react";
import Modal from "./Modal";

function HomeScreen(props: HomeScreenProps) {
    const changePage = useStore((state) => state.actions.setPage);
    const OnClickProfile = () => {
        changePage(5);
    };

    //Control modal functionality
    const [isShown, setIsShown] = useState(false)
    const [modalType, setModalType] = useState("")
    const [isNewGame, setIsNewGame] = useState(true)

    const displayModal = (modalType:string, gameType?:boolean) => {
        //check if a game type was provided and update if so
        if(!(gameType === undefined)){
            setIsNewGame(gameType)
        }
        //update modal type state
        setModalType(modalType)
        //display modal
        setIsShown(true)
    }

    return (
        <FlexBox direction="column">
            <Header />

            <FlexBox justifyContent="flex-end" margin="0 1.5rem">
                <Button
                    background="none"
                    borderRadius="0"
                    onClick={OnClickProfile}
                >
                    <img src={Icons.User} alt="User profile icon" />
                    <Text color={COLORS.white}>Profile</Text>
                </Button>
            </FlexBox>

            <Stiches margin=" 0.5rem 0 0 0" width="100%" />
            <FlexBox margin="0 1.5rem" direction="column">
                <SectionText text="New Game" />

                <ActionButton
                    text="Create new game"
                    onClick={() => displayModal("startGame", true)}
                    color={COLORS.primaryBTN}
                />
                <ActionButton
                    text="Join Game"
                    //onClick={joinGame}
                    onClick={() => displayModal("startGame", false)}
                    color={COLORS.success}
                />

                <SectionText text="Active Games" />

                <GameCarousel />
                <SectionText text="Past Games" />

                <GameCarousel />
            </FlexBox>
            <NavBar />
            {isShown && <Modal setIsShown={setIsShown} type={modalType} isNewGame={isNewGame}/>}
        </FlexBox>
    );
}

export default HomeScreen;
