import { API, Auth } from "aws-amplify";
//TODO: GROUP THESE IMPORTS SO WE CAN DO ALL FROM components/homescreen
import ActionButton from "components/general/ActionButton";
import GameCarousel from "components/homescreen/GameCarousel";
import JoinOptions from "components/homescreen/JoinOptions";
import SectionText from "components/general/SectionText";
import useDialog from "hooks/useDialog";
import { Button, FlexBox, FrankenSketchHeader, Stiches, Text } from "styles";
import { HomeScreenProps } from "types";
import { COLORS } from "utils/DEFS";
import { Icons } from "styles/svg/ui-icons/icons";
import NavBar from "components/navbar/NavBar";
import Header from "components/header/header";
import { useStore } from "store";
import { useEffect, useState } from "react";
import Modal from "./Modal";

function HomeScreen(props: HomeScreenProps) {
    // const [joinDialog, joinActions] = useDialog({
    //     headerProps: { backgroundColor: COLORS.blue },
    // });

    // const joinGame = () => {
    //     joinActions.open("But how?", <JoinOptions />);
    // };

    const changePage = useStore((state) => state.actions.setPage);
    const OnClickProfile = () => {
        changePage(5);
    };

    //Control modal functionality
    const [isShown, setIsShown] = useState(false);
    const [modalType, setModalType] = useState("");
    const [isNewGame, setIsNewGame] = useState(true);

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
            {/* {joinDialog && joinDialog} */}
            <Header />

            <FlexBox justifyContent="flex-end" margin="0 1.5rem">
                <Button
                    background="none"
                    borderRadius="0"
                    onClick={OnClickProfile}
                >
                    <img src={Icons.User} alt="User profile icon" />
                    <Text color={COLORS.white}>username</Text>
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
