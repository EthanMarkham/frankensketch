import React from "react";
import { FlexBox, SketchCanvas, Text } from "styles";
import { useStore } from "store";
import useDrawer from "hooks/useDrawer";

/*--------------------------------------------------------------------//
                      J S X      E X P O R T
//--------------------------------------------------------------------*/
const GameViewer = () => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const containerRef = React.useRef<HTMLDivElement>(null);
    const { game } = useStore((state) => state.serverSideProps);
    useDrawer(game, canvasRef, containerRef);

    return (
        <FlexBox
            direction="column"
            height="100vh"
            css={{ overflowY: "scroll" }}
        >
            <FlexBox padding="4em" height="20%" justifyContent="center">
                <Text>WHAT A MASTERPIECE</Text>
            </FlexBox>

            <FlexBox
                height="60%"
                position="relative"
                justifyContent="center"
                margin="auto 0"
                ref={containerRef}
            >
                <SketchCanvas ref={canvasRef} height="100%" width="100%" />
            </FlexBox>
            <FlexBox
                padding="4em"
                height="20%"
                justifyContent="center"
            ></FlexBox>
        </FlexBox>
    );
};

export default GameViewer;
