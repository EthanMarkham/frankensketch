//TODO: GROUP THESE IMPORTS SO WE CAN DO ALL FROM components/homescreen
import ActionButton from "components/general/ActionButton";
import GameCarousel from "components/homescreen/GameCarousel";
import SectionText from "components/general/SectionText";
import { FlexBox } from "styles";
import { HomeScreenProps } from "types";
import { COLORS } from "utils/DEFS";
import { useStore } from "store";
import { useEffect, useRef, useState } from "react";
import Modal from "./Modal";

function HomeScreen({ games, container }: HomeScreenProps) {
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
        <FlexBox direction="column" padding="0 1.5rem">
            <SectionText text="New Game" />
            <FlexBox
                padding="0 0.3rem"
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

            <GameCarousel container={container} />

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
