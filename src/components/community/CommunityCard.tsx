import useDrawer from "hooks/useDrawer";
import React from "react";
import { FlexBox, SketchCanvas } from "styles";
import { Game } from "models";

const CommunityCard = ({ game }: { game: Game }) => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const containerRef = React.useRef<HTMLDivElement>(null);
    useDrawer(game, canvasRef, containerRef);

    return (
        <FlexBox
            direction="column"
            height="100vh"
            css={{ overflowY: "scroll" }}
        >
            <FlexBox
                height="60%"
                position="relative"
                justifyContent="center"
                margin="auto 0"
                ref={containerRef}
            >
                <SketchCanvas
                    ref={canvasRef}
                    position="absolute"
                    height="100%"
                />
            </FlexBox>
            <FlexBox
                padding="4em"
                height="20%"
                justifyContent="center"
            ></FlexBox>
        </FlexBox>
    );
};

export default CommunityCard;
