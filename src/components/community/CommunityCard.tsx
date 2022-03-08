import useDrawer from "hooks/useDrawer";
import React, { useCallback, useState } from "react";
import { Button, FlexBox, SketchCanvas, Text } from "styles";
import { COLORS } from "utils/DEFS";
import { Icons } from "styles/svg/ui-icons/icons";
import Modal from "features/Modal";
import { useStore } from "store";
import { Game, UserLike } from "API";
import { unLikeDrawing, likeDrawing } from "queries/queries";

const CommunityCard = ({ game }: { game: Game }) => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const containerRef = React.useRef<HTMLDivElement>(null);
    const userData = useStore((state) => state.userData);
    const [likeCount, setLikeCount] = useState<number>(
        game.UserLikes
            ? game.UserLikes.items.filter((l) => l?._deleted !== true).length
            : 0
    );
    const [isLiking, setLiking] = useState(false);
    const [like, setLike] = useState(
        game.UserLikes?.items.find(
            (l) => l?.user === userData?.username && l?._deleted !== true
        )
    );

    useDrawer(game as any, canvasRef, containerRef, 0);
    const [isShown, setIsShown] = useState(false);

    const updateLike = useCallback(async () => {
        if (isLiking) return;
        setLiking(true);

        if (like !== undefined && like !== null) {
            await unLikeDrawing({ id: like.id, _version: like._version });
            setLike(null);
            setLiking(false);
            setLikeCount((cur) => cur - 1);
        } else {
            const data = await likeDrawing({
                gameID: game.id,
                user: userData?.username,
            });

            setLike(data as UserLike);
            setLiking(false);
            setLikeCount((cur) => cur + 1);
        }
    }, [isLiking, like, game.id, userData?.username]);

    let gameDate = new Date();
    if (game.updatedAt) {
        gameDate = new Date(game.updatedAt);
    }

    return (
        <>
            <FlexBox direction="column" width="100%">
                <FlexBox
                    height="63vh"
                    direction="column"
                    backgroundColor={COLORS.bgLight}
                    borderRadius="10px"
                >
                    <FlexBox justifyContent="flex-end">
                        <Button
                            background="none"
                            onClick={() => setIsShown(true)}
                            padding="0.5rem"
                        >
                            <img
                                src={Icons.Info}
                                width="25"
                                height="25"
                                alt="report icon"
                            />
                        </Button>
                    </FlexBox>
                    <FlexBox
                        vhCenter={true}
                        width="100%"
                        height="100%"
                        margin="0 0 1.5rem 0"
                        padding="0.5rem"
                        ref={containerRef}
                    >
                        <SketchCanvas
                            ref={canvasRef}
                            height="100%"
                            width="100%"
                        />
                    </FlexBox>
                </FlexBox>

                <FlexBox
                    direction="row"
                    justifyContent="space-between"
                    height="10vh"
                    margin="1rem 0"
                >
                    <FlexBox direction="column">
                        <FlexBox direction="row">
                            <Text fontWeight="300" margin="0 0.5rem 0 0">
                                Drawn by:
                            </Text>
                            <FlexBox direction="column">
                                <Text fontWeight="300">
                                    Head: {game.head?.artist}
                                </Text>
                                <Text fontWeight="300">
                                    Torso: {game.torso?.artist}
                                </Text>
                                <Text fontWeight="300">
                                    Legs: {game.legs?.artist}
                                </Text>
                            </FlexBox>
                        </FlexBox>
                        <Text fontWeight="300" margin="0.5rem 0 0 0">
                            On: {gameDate.toLocaleDateString()}
                        </Text>
                    </FlexBox>
                    <FlexBox direction="column">
                        <Button
                            background="none"
                            onClick={updateLike}
                            height="57px"
                        >
                            <img
                                src={
                                    like !== null && like !== undefined
                                        ? Icons.RedHeart
                                        : Icons.WhiteHeart
                                }
                                width="40"
                                height="40"
                                alt="heart icon"
                            />
                        </Button>
                        <Text fontWeight="300" margin="0.5rem 0 0 0">
                            {likeCount} likes
                        </Text>
                    </FlexBox>
                </FlexBox>
            </FlexBox>
            {isShown && (
                <Modal
                    setIsShown={setIsShown}
                    type="createReport"
                    game={game as any}
                />
            )}
        </>
    );
};

export default CommunityCard;
