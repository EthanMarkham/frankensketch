import { useEffect, useState } from "react";
import Paper from "paper";
import { Drawing, Game } from "models";
import { calculateScale } from "utils";

const LINE_DELAY = 5;

function drawSection(
    { type, lines }: Drawing,
    verticleShift: number
): Promise<paper.Rectangle> {
    if (!lines) throw new Error("missing line data");

    const group = new Paper.Group();

    console.log(lines);
    const drawLine = function (lineData: any) {
        let lines;
        try {
            lines = JSON.parse(lineData)[1];
        } catch (e) {
            console.log("Not a line", lineData);
        }
        if (!lines) return;
        let path = new Paper.Path(lines);
        path.position.y += verticleShift;
        path.selected = false;
        group.addChild(path);
    };

    return new Promise<paper.Rectangle>((resolve) => {
        for (let i = 0; i < lines.length; i++) {
            setTimeout(() => {
                drawLine(lines[i]);
                if (i + 1 === lines.length) resolve(group.bounds);
            }, LINE_DELAY * i);
        }
        group.selected = false;
    });
}

function useDrawer(
    game: Game,
    canvas: React.RefObject<HTMLCanvasElement>,
    container: React.RefObject<HTMLDivElement>
) {
    const [isInit, setInit] = useState(false);

    useEffect(() => {
        const element = canvas.current;
        const parent = container.current;
        if (element !== null && parent !== null && !isInit && game) {
            console.log("initializing paper");
            Paper.setup(element);
            Paper.activate();
            const parentSize = parent.getBoundingClientRect();

            console.log(parent.getBoundingClientRect(), Paper.view.bounds);
            let newScale = calculateScale(Paper.view.bounds, parentSize) * 0.2;
            console.log("scaling to " + newScale);
            if (Paper.view) {
                Paper.view.zoom = newScale;
            }
            drawSection(game.head!!, Paper.view.bounds.top)
                .then(({ bottom }) => {
                    console.log("drawing torso at ", bottom);
                    return drawSection(game.torso!!, bottom);
                })
                .then(({ bottom }) => {
                    console.log("drawing legs at ", bottom);
                    return drawSection(game.legs!!, bottom);
                });
            setInit(true);
        }
    }, [canvas, isInit, game, container]);

    return null;
}

export default useDrawer;
