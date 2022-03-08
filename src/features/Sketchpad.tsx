import React, { useCallback, useEffect } from "react";
import { FlexBox, SketchCanvas, Text, Div } from "styles";
import usePaper from "hooks/usePaper";
import { useStore } from "store";
import { GenericPageProps } from "types";
import ActionButton from "components/general/ActionButton";
import { COLORS } from "utils/DEFS";
import BackButton from "components/general/BackButton";
import { Leva } from "leva";
import Pallet from "components/svg/Pallet";
import { Point } from "paper/dist/paper-core";

/*--------------------------------------------------------------------//
                      J S X      E X P O R T
//--------------------------------------------------------------------*/
const Sketchpad = ({ container }: GenericPageProps) => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const containerRef = React.useRef<HTMLDivElement>(null);
    const serverProps = useStore((state) => state.serverSideProps);
    const changePage = useStore((state) => state.actions.setPage);

    //const [scale, setScale] = useState<number | null>(null);
    const [project, init] = usePaper(
        canvasRef,
        container?.current?.getBoundingClientRect()
    );
    const postGame = useStore((state) => state.actions.postGame);

    const saveGame = useCallback(() => {
        if (!project) return;
        try {
            const p = project as any;
            console.log(p);
            p.view.scale = 1;
            p.view.center = new Point(0, 0);

            const lineData = JSON.parse(p.exportJSON())[1][1].children;
            console.log(lineData);
            if (!lineData || lineData.length === 0) {
                changePage(1);
            } else postGame(lineData, serverProps.drawing);
        } catch (e) {
            console.log(e);
            return;
        } finally {
            project.clear();
        }
    }, [changePage, postGame, project, serverProps.drawing]);

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
            <Leva
                //theme={myTheme} // you can pass a custom theme (see the styling section)
                //fill // default = false,  true makes the pane fill the parent dom node it's rendered in
                //flat // default = false,  true removes border radius and shadow
                //oneLineLabels={true} // default = false, alternative layout for labels, with labels and fields on separate rows
                //hieTitleBar={true} // default = false, hides the GUI header
                titleBar={{
                    title: <Pallet />,
                    filter: false,
                }}
                collapsed={true} // default = false, when true the GUI is collpased
            />

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
            <FlexBox
                style={{
                    position: "absolute",
                    height: "80%",
                    width: "100%",
                    justifyContent: "center",
                    overflow: "hidden",
                }}
            >
                <SketchCanvas
                    ref={canvasRef}
                    //scale={scale}
                    style={{}}
                />
            </FlexBox>

            <ActionButton
                onClick={saveGame}
                style={{
                    position: "fixed",
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
