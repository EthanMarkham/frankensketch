import React, { useEffect, useMemo } from "react";
import { FlexBox, SketchCanvas, Text } from "styles";
import { useStore } from "store";
import useDrawer from "hooks/useDrawer";
import { GenericPageProps } from "types";
import BackButton from "components/general/BackButton";
import useWindowSize from "hooks/useWindowSize";

/*--------------------------------------------------------------------//
                      J S X      E X P O R T
//--------------------------------------------------------------------*/
const GameViewer = ({ container }: GenericPageProps) => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const containerRef = React.useRef<HTMLDivElement>(null);
    const { game } = useStore((state) => state.serverSideProps);
    const changePage = useStore((state) => state.actions.setPage);
    const windowSize = useWindowSize();

    useDrawer(game, canvasRef, containerRef);

    const parentSize = useMemo(
        () =>
            container?.current
                ? container.current.getBoundingClientRect()
                : { width: 0, height: 0 },
        [container]
    );

    const topOffset = useMemo(() => {
        let output = 25;
        if (windowSize.width >= 1016) {
            output -= (windowSize.width - 1016) * 0.6;
        }
        return output;
    }, [windowSize]);

    useEffect(() => {
        console.log(topOffset);
    }, [topOffset]);

    return (
        <FlexBox
            direction="column"
            background='url("images/stage.jpg")'
            style={{
                borderRadius: "30px",
                overflow: "hidden",
                width: "80%",
                height: parentSize.height,
                margin: "auto",
                backgroundAttachment: "fixed",
                backgroundPosition: `center ${topOffset}px`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        >
            <FlexBox padding="4em" height="20%" justifyContent="center">
                <Text>WHAT A MASTERPIECE</Text>
            </FlexBox>
            <BackButton onClick={() => changePage(1)} />

            <FlexBox
                position="relative"
                justifyContent="center"
                ref={containerRef}
                css={{ flex: "1 1" }}
            >
                <SketchCanvas ref={canvasRef} height="100%" width="100%" />
            </FlexBox>
        </FlexBox>
    );
};

export default GameViewer;
