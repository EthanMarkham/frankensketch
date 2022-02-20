import { useCallback, useEffect, useState } from "react";
import Paper from "paper";
import { useControls } from "leva";

function getGuideLines(drawingType: any) {
    const maxHeight = 640;
    const maxWidth = 360;
    switch (drawingType.toLowerCase()) {
        case "legs":
            return [
                [
                    [0.25 * maxWidth, 0],
                    [0.25 * maxWidth, 0.01 * maxHeight],
                ],
                [
                    [0.75 * maxWidth, 0],
                    [0.75 * maxWidth, 0.01 * maxHeight],
                ],
            ];
        case "head":
            console.log("drawing head");
            return [
                [
                    [0.4 * maxWidth, 0.98 * maxHeight],
                    [0.4 * maxWidth, maxHeight],
                ],
                [
                    [0.6 * maxWidth, 0.98 * maxHeight],
                    [0.6 * maxWidth, maxHeight],
                ],
            ];
        case "torso":
            return [
                [
                    [0.4 * maxWidth, 0],
                    [0.4 * maxWidth, 0.01 * maxHeight],
                ],
                [
                    [0.6 * maxWidth, 0],
                    [0.6 * maxWidth, 0.01 * maxHeight],
                ],
                [
                    [0.25 * maxWidth, maxHeight],
                    [0.25 * maxWidth, 0.99 * maxHeight],
                ],
                [
                    [0.75 * maxWidth, maxHeight],
                    [0.75 * maxWidth, 0.99 * maxHeight],
                ],
            ];
    }
}

function drawGuidelines(drawingType: string) {
    let lines = getGuideLines(drawingType);
    lines?.forEach((line) => {
        let guideLine: any = new Paper.Path();
        guideLine.strokeColor = "black";
        guideLine.strokeWidth = 3;

        line.forEach((p) => {
            guideLine.add(p);
        });
        guideLine.selected = false;
    });
}

function usePaper(canvas: React.RefObject<HTMLCanvasElement>) {
    const [isInit, setInit] = useState(false);
    const [shouldInit, init] = useState(false);
    const [lineData, setLineData] = useState<any[]>([]);
    const [drawingType, setType] = useState<string | null>();

    const { stroke, color, isErase } = useControls({
        stroke: {
            label: "Stroke",
            value: 3,
            min: 1,
            max: 60,
            step: 1,
        },
        color: {
            label: "Color",
            value: "#000",
        },
        isErase: {
            label: "Eraser",
            value: false,
        },
    });

    const draw = useCallback(() => {
        let myPath: any = null;
        Paper.view.onMouseDown = () => {
            if (myPath) myPath.selected = false;
            myPath = new Paper.Path();
            myPath.strokeColor = isErase ? "#f7fff3" : color;
            myPath.strokeWidth = stroke;
            myPath.strokeWidth = stroke;
            myPath.strokeCap = "round";
            myPath.strokeJoin = "round";
        };

        Paper.view.onMouseDrag = (event: { point: any }) => {
            myPath.add(event.point);
        };

        Paper.view.onMouseUp = () => {
            myPath.simplify(isErase ? 1 : 10);
            myPath.selected = false;
            setLineData((data) => [...data, myPath]);
        };
    }, [stroke, color, isErase]);

    useEffect(() => {
        const element = canvas.current;
        if (element !== null && !isInit && shouldInit && drawingType) {
            console.log("initializing paper");
            Paper.setup(element);

            drawGuidelines(drawingType);
            setInit(true);
        }
    }, [canvas, isInit, shouldInit, drawingType]);

    useEffect(() => {
        if (isInit) draw();
    }, [draw, isInit]);

    const setUp = (drawingType: string) => {
        init(true);
        setType(drawingType);
    };
    return [lineData, setUp] as const;
}

export default usePaper;
