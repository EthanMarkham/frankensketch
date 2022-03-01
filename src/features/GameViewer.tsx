import React, { useEffect, useState } from "react";
import { FlexBox, SketchCanvas, Text } from "styles";
import { useStore } from "store";
import useDrawer from "hooks/useDrawer";
import { GenericPageProps } from "types";

/*--------------------------------------------------------------------//
                      J S X      E X P O R T
//--------------------------------------------------------------------*/
const GameViewer = ({ container }: GenericPageProps) => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const containerRef = React.useRef<HTMLDivElement>(null);
    const { game } = useStore((state) => state.serverSideProps);

    useDrawer(game, canvasRef, containerRef);

    const parentSize = container?.current
        ? container.current.getBoundingClientRect()
        : { width: 0, height: 0 };
    console.log(parentSize);

    const topOffset = 12.3468 - 0.03 * parentSize.width;

    return (
        <FlexBox
            direction="column"
            height={parentSize.height + "px"}
            css={{ overflowY: "scroll" }}
            background='url("images/stage.jpg")'
            style={{
                backgroundAttachment: "fixed",
                backgroundPosition: `center ${topOffset}vh`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
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
