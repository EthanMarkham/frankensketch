import React, { useCallback, useEffect, useState } from "react";
import { Button, FlexBox, SketchCanvas, Text } from "styles";
import usePaper from "hooks/usePaper";
import { useStore } from "store";
import { API, Auth } from "aws-amplify";
import { calculateScale } from "utils";
import { useControls } from "leva";

/*--------------------------------------------------------------------//
                      J S X      E X P O R T
//--------------------------------------------------------------------*/
const Sketchpad = () => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const containerRef = React.useRef<HTMLDivElement>(null);
    const serverProps = useStore((state) => state.serverSideProps);
    const [scale, setScale] = useState<number | null>(null);
    const [lineData, init] = usePaper(canvasRef);
    const postGame = useStore((state) => state.actions.postGame);
    const drawingType = serverProps.drawing;

    useEffect(() => {
        if (containerRef.current) {
            init(drawingType);
        }
    }, [containerRef, init, drawingType]);

    return (
        <FlexBox direction="column" ref={containerRef} height="100vh">
            <FlexBox padding="4em" height="20%" justifyContent="center">
                <Text>
                    Draw&nbsp;{drawingType === "legs" ? "some" : "a"}&nbsp;
                    {drawingType}
                </Text>
            </FlexBox>

            {/*Info: waiting til we have scale calculated to render the canvas*/}
            <SketchCanvas ref={canvasRef} />
            <FlexBox padding="4em" height="20%" justifyContent="center">
                <Button
                    padding="0.2em 2em"
                    onClick={() => postGame(lineData, serverProps.drawing)}
                >
                    Submit
                </Button>
            </FlexBox>
        </FlexBox>
    );
};

export default Sketchpad;
