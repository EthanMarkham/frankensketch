import { useCallback, useEffect, useReducer, useState } from "react";
import Paper from "paper";
import { Callback } from "../types";
import { Color, Path, Point, Rectangle } from "paper/dist/paper-core";

const getGuideLines = (drawingType: any) => {
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
};

const draw = (drawingType: string, savePath: Callback) => {
    let lines = getGuideLines(drawingType);
    lines?.forEach((line) => {
        let guideLine: any = new Paper.Path();
        guideLine.strokeColor = "black";
        guideLine.strokeWidth = 3;

        line.forEach((p) => {
            guideLine.add(p);
        });
        guideLine.selected = false;
        savePath(guideLine);
    });

    let myPath: any = null;

    Paper.view.onMouseDown = () => {
        if (myPath) myPath.selected = false;
        myPath = new Paper.Path();
        myPath.strokeColor = "black";
        myPath.strokeWidth = 3;
    };

    Paper.view.onMouseDrag = (event: { point: any }) => {
        myPath.add(event.point);
    };

    Paper.view.onMouseUp = () => {
        myPath.simplify(10);
        myPath.selected = false;
        savePath(myPath);
    };
};

function usePaper(canvas: React.RefObject<HTMLCanvasElement>) {
    const [isInit, setInit] = useState(false);
    const [shouldInit, init] = useState(false);
    const [lineData, setLineData] = useState<any[]>([]);
    const [drawingType, setType] = useState<string | null>();

    const addGuideLines = (type: string) => {
        let path = new Path.Line(new Point(100, 70), new Point(0, 70));
        path.strokeColor = new Color("black");
        path.strokeWidth = 3;
        setLineData((data) => [...data, path]);
    };

    useEffect(() => {
        const element = canvas.current;
        if (element !== null && !isInit && shouldInit && drawingType) {
            console.log("initializing paper");
            Paper.setup(element);

            draw(drawingType, (path) => {
                setLineData((data) => [...data, path]);
            });
            setInit(true);
        }
    }, [canvas, isInit, shouldInit, drawingType]);

    const setUp = (drawingType: string) => {
        init(true);
        setType(drawingType);
    };
    return [lineData, setUp] as const;
}

export default usePaper;
