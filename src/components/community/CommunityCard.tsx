import useDrawer from "hooks/useDrawer";
import React, { useState } from "react";
import { Button, FlexBox, Text } from "styles";
import { Game } from "models";
import { COLORS } from "utils/DEFS";
import { Icons } from "styles/svg/ui-icons/icons";
import { formatNumberWithMetricPrefix } from "utils/functions";
import Modal from "features/Modal";

const CommunityCard = ({ game }: { game: Game }) => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const containerRef = React.useRef<HTMLDivElement>(null);
    useDrawer(game, canvasRef, containerRef);

    //Control is modal should be shown
    const [isShown, setIsShown] = useState(false);

    //TODO - Change with actual like state
    const [like, setLike] = useState(false)

    //Update like state
    const updateLike = () => {
        setLike(!like)
        //TODO - Increase 
    }


    let gameDate = new Date()
    if (game.updatedAt) {
        gameDate = new Date(game.updatedAt)
    }

    //Simplify Likes Count
    let likesCount = ""
    if (game.UserLikes?.length) {
        likesCount = formatNumberWithMetricPrefix(game.UserLikes?.length)
    } else {
        likesCount = "0"
    }



    return (
        <div className="community-card">
            <FlexBox direction="column" width="100%">
                <FlexBox height="63vh" direction="column" backgroundColor={COLORS.bgSecondary} borderRadius='10px'>
                    <FlexBox justifyContent="flex-end">
                        <Button background="none" onClick={() => setIsShown(true)} padding='0.5rem'>
                            <img src={Icons.Info} width='25' height='25' alt="report icon" />
                        </Button>
                    </FlexBox>
                    <FlexBox vhCenter={true} width='100%' height="100%" margin="0 0 1.5rem 0" padding="0.5rem">
                        Canvas goes here
                    </FlexBox>
                </FlexBox>

                <FlexBox direction="row" justifyContent="space-between" height="10vh" margin="1rem 0">
                    <FlexBox direction="column">
                        <FlexBox direction="row">
                            <Text fontWeight="300" margin="0 0.5rem 0 0">Drawn by:</Text>
                            <FlexBox direction="column">
                                <Text fontWeight="300">Head: {game.head?.artist}</Text>
                                <Text fontWeight="300">Torso: {game.torso?.artist}</Text>
                                <Text fontWeight="300">Legs: {game.legs?.artist}</Text>
                            </FlexBox>
                        </FlexBox>
                        <Text fontWeight="300" margin="0.5rem 0 0 0">On: {gameDate.toLocaleDateString()}</Text>
                    </FlexBox>
                    <FlexBox direction="column">
                        <Button
                            background="none"
                            onClick={() => updateLike()}
                            height='57px'
                        >
                            <img src={like ? Icons.RedHeart : Icons.WhiteHeart} width='40' height='40' alt="heart icon" />
                        </Button>
                        <Text fontWeight="300" margin="0.5rem 0 0 0">{likesCount} likes</Text>
                    </FlexBox>
                </FlexBox>
            </FlexBox>
            {isShown && <Modal setIsShown={setIsShown} type="createReport" game={game} />}
        </div>
    );
};

export default CommunityCard;
