import { API, Auth } from "aws-amplify";
//TODO: GROUP THESE IMPORTS SO WE CAN DO ALL FROM components/homescreen
import ActionButton from "components/general/ActionButton";
import GameCarousel from "components/homescreen/GameCarousel";
import SectionText from "components/general/SectionText";
import { Button, FlexBox, Stiches, Text } from "styles";
import { HomeScreenProps } from "types";
import { COLORS } from "utils/DEFS";
import { Icons } from "styles/svg/ui-icons/icons";
import Header from "components/header/header";
import { useStore } from "store";
import { useEffect, useState } from "react";
import Modal from "./Modal";

function HomeScreen(props: HomeScreenProps) {
    const changePage = useStore((state) => state.actions.setPage);
    const OnClickProfile = () => {
        changePage(5);
    };

    //Control modal functionality
    const [isShown, setIsShown] = useState(false);
    const [modalType, setModalType] = useState("");
    const [isNewGame, setIsNewGame] = useState(true);
    const joinGame = useStore((state) => state.actions.joinGame);

    const displayModal = (modalType: string, gameType?: boolean) => {
        //check if a game type was provided and update if so
        if (!(gameType === undefined)) {
            setIsNewGame(gameType);
        }
        //update modal type state
        setModalType(modalType);
        //display modal
        setIsShown(true);
    };

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
                <FlexBox
                    margin="0 1.5rem"
                    direction="row"
                    justifyContent="space-around"
                >
                    <ActionButton
                        text="Create Game"
                        disabled
                        onClick={() => alert("feature coming soon.")} //displayModal("startGame", true)
                        color={COLORS.secondaryGreen}
                    />
                    <ActionButton
                        text="Join Private"
                        disabled
                        onClick={() => alert("feature coming soon.")} //displayModal("startGame", true)
                        color={COLORS.primaryBTN}
                    />
                    <ActionButton
                        text="Join Public"
                        //onClick={joinGame}
                        onClick={() => joinGame()}
                        color={COLORS.success}
                    />
                </FlexBox>

                <SectionText text="Past Games" />

                <GameCarousel />
            </FlexBox>
            {isShown && (
                <Modal
                    setIsShown={setIsShown}
                    type={modalType}
                    isNewGame={isNewGame}
                />
            )}
        </FlexBox>
    );
}

export default HomeScreen;
