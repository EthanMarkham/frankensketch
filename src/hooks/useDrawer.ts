import { useEffect, useState } from "react";
import Paper from "paper";
import { Drawing, Game } from "models";
import { calculateScale } from "utils";

function drawSectionAsync(
    { type, lines }: Drawing,
    verticleShift: number,
    line_delay: number,
    projectId: number
): Promise<paper.Rectangle> {
    if (!lines) throw new Error("missing line data");

    const group = new Paper.Group();

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
                Paper.projects[projectId].activate();
                drawLine(lines[i]);
                if (i + 1 === lines.length) resolve(group.bounds);
            }, line_delay * i);
        }
        group.selected = false;
    });
}

function useDrawer(
    game: Game,
    canvas: React.RefObject<HTMLCanvasElement>,
    container: React.RefObject<HTMLDivElement>,
    line_delay: number = 5
) {
    const [isInit, setInit] = useState(false);
    const [isFinished, setFinished] = useState(false);

    useEffect(() => {
        const element = canvas.current;
        const parent = container.current;

        if (element !== null && parent !== null && !isInit && game) {
            console.log("initializing paper");
            Paper.setup(element);
            const parentSize = parent.getBoundingClientRect();
            const projectId = Paper.project.index;

            console.log(parent.getBoundingClientRect(), Paper.view.bounds);
            let newScale = calculateScale(Paper.view.bounds, parentSize) * 0.2;
            console.log("scaling to " + newScale);
            if (Paper.view) {
                Paper.view.zoom = newScale;
            }
            drawSectionAsync(
                game.head!!,
                Paper.view.bounds.top,
                line_delay,
                projectId
            )
                .then(({ bottom }) => {
                    return drawSectionAsync(
                        game.torso!!,
                        bottom,
                        line_delay,
                        projectId
                    );
                })
                .then(({ bottom }) => {
                    return drawSectionAsync(
                        game.legs!!,
                        bottom,
                        line_delay,
                        projectId
                    );
                })
                .then(() => {
                    setFinished(true);
                });
            setInit(true);
        }
    }, [canvas, isInit, game, container, line_delay]);

    return isFinished;
}

export default useDrawer;
