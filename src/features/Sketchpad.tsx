import React, { useCallback, useEffect, useState } from "react";
import { Button, FlexBox, SketchCanvas, Text } from "styles";
import usePaper from "hooks/usePaper";
import { useStore } from "store";
import { API } from "aws-amplify";
/*--------------------------------------------------------------------//
                        U T I L   F U N C T I O N S
//--------------------------------------------------------------------*/

// https://stackoverflow.com/questions/7863653/algorithm-to-resize-image-and-maintain-aspect-ratio-to-fit-iphone
const calculateScale = ({ height, width }: DOMRect): number => {
    const oldWidth = 360; //INFO: IF THESE VALUES CHANGE MAKE SURE TO UPDATE [styles/sketchpad.ts]
    const oldHeight = 640; //INFO: IF THESE VALUES CHANGE MAKE SURE TO UPDATE [styles/sketchpad.ts]
    const targetWidth = width;
    const targetHeight = height;

    const ratioW = targetWidth / oldWidth;
    const ratioH = targetHeight / oldHeight;
    return ratioW < ratioH ? ratioW : ratioH;
};

const postGame = (drawingType: string, lineData: any) => {
    API.post("api", "/api/postGame", {
        //response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
        body: {
            lineData: JSON.stringify(lineData),
            drawingType,
        },
    })
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log(err.response.data);
        });
};

/*--------------------------------------------------------------------//
                      J S X      E X P O R T
//--------------------------------------------------------------------*/
const Sketchpad = () => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const containerRef = React.useRef<HTMLDivElement>(null);
    const serverProps = useStore((state) => state.serverSideProps);
    const [scale, setScale] = useState<number | null>(null);
    const [lineData, init] = usePaper(canvasRef);

    const drawingType = serverProps.drawing;

    const saveGame = useCallback(() => {
        postGame(serverProps.drawing, lineData);
    }, [serverProps, lineData]);

    useEffect(() => {
        if (scale) {
            init(drawingType);
        }
    }, [drawingType, init, scale]);

    useEffect(() => {
        if (containerRef.current) {
            setScale(
                calculateScale(containerRef.current.getBoundingClientRect())
            );
        }
    }, [containerRef]);

    return (
        <FlexBox direction="column" ref={containerRef} height="100vh">
            <FlexBox padding="4em" height="20%" justifyContent="center">
                <Text>
                    Draw&nbsp;{drawingType === "legs" ? "some" : "a"}&nbsp;
                    {drawingType}
                </Text>
            </FlexBox>

            {/*Info: waiting til we have scale calculated to render the canvas*/}
            <SketchCanvas ref={canvasRef} scale={scale} />
            <FlexBox padding="4em" height="20%" justifyContent="center">
                <Button padding="0.2em 2em" onClick={() => saveGame()}>
                    Submit
                </Button>
            </FlexBox>
        </FlexBox>
    );
};

export default Sketchpad;
