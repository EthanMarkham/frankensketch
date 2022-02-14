import React, { useEffect, useRef, useState } from "react";
import { FlexBox, SketchCanvas, Text } from "styles";
import { useStore } from "store";
import { calculateScale } from "utils";
import useDrawer from "hooks/useDrawer";

/*--------------------------------------------------------------------//
                      J S X      E X P O R T
//--------------------------------------------------------------------*/
const GameViewer = () => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const containerRef = React.useRef<HTMLDivElement>(null);
    const { game } = useStore((state) => state.serverSideProps);
    const [scale, setScale] = useState<number | null>(null);
    useDrawer(canvasRef, game);

    useEffect(() => {
        if (containerRef.current) {
            setScale(
                calculateScale(
                    containerRef.current.getBoundingClientRect(),
                    1860
                )
            );
        }
    }, [containerRef]);

    useEffect(() => {
        console.log(scale);
    }, [scale]);

    return (
        <FlexBox
            direction="column"
            ref={containerRef}
            height="100vh"
            css={{ overflowY: "scroll" }}
        >
            <FlexBox padding="4em" height="20%" justifyContent="center">
                <Text>WHAT A MASTERPIECE</Text>
            </FlexBox>

            {/*Info: waiting til we have scale calculated to render the canvas*/}
            <SketchCanvas ref={canvasRef} height="1860px" scale={scale} />
            <FlexBox
                padding="4em"
                height="20%"
                justifyContent="center"
            ></FlexBox>
        </FlexBox>
    );
};

export default GameViewer;
