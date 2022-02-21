import React, { useEffect, useMemo, useState } from "react";
import { Button, FlexBox, SketchCanvas, Text, Div } from "styles";
import usePaper from "hooks/usePaper";
import { useStore } from "store";
import { GenericPageProps } from "types";
import ActionButton from "components/general/ActionButton";
import { COLORS } from "utils/DEFS";
import BackButton from "components/general/BackButton";

/*--------------------------------------------------------------------//
                      J S X      E X P O R T
//--------------------------------------------------------------------*/
const Sketchpad = ({ container }: GenericPageProps) => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const containerRef = React.useRef<HTMLDivElement>(null);
    const serverProps = useStore((state) => state.serverSideProps);
    const changePage = useStore((state) => state.actions.setPage);
    //const [scale, setScale] = useState<number | null>(null);
    const [lineData, init, { position, scale }] = usePaper(canvasRef);
    const postGame = useStore((state) => state.actions.postGame);
    const drawingType = serverProps.drawing;

    useEffect(() => {
        if (containerRef.current) {
            init(drawingType);
        }
    }, [containerRef, init, drawingType]);

    return (
        <Div
            ref={containerRef}
            height={
                container?.current
                    ? container.current.offsetHeight + "px"
                    : "0px"
            }
            style={{
                position: "relative",
            }}
        >
            <BackButton onClick={() => changePage(1)} />
            <FlexBox
                justifyContent="center"
                style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    left: 0,
                }}
            >
                <Text>
                    Draw&nbsp;{drawingType === "legs" ? "some" : "a"}&nbsp;
                    {drawingType}
                </Text>
            </FlexBox>

            {/*Info: waiting til we have scale calculated to render the canvas*/}
            <SketchCanvas
                ref={canvasRef}
                scale={scale}
                style={{
                    position: "fixed",
                    right: 0,
                    left: position.x,
                    top: position.y,
                    bottom: 0,
                }}
            />

            <ActionButton
                onClick={() => postGame(lineData, serverProps.drawing)}
                style={{
                    position: "absolute",
                    right: 0,
                    left: 0,
                    margin: "auto",
                    bottom: "1em",
                }}
                text="Submit"
                color={COLORS.success}
            />
        </Div>
    );
};

export default Sketchpad;
