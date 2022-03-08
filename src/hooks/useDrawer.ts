import { useEffect, useState } from "react";
import Paper from "paper";
import { Drawing, Game } from "models";
import { calculateScale } from "utils";

function drawSectionAsync(
    { type, lines, id }: Drawing,
    verticleShift: number,
    line_delay: number,
    projectId: number,
    gameId: string
): Promise<paper.Rectangle> {
    if (!lines) {
        console.log("missing line data");
        return new Promise<paper.Rectangle>((resolve) => {
            resolve(
                new paper.Rectangle(
                    new paper.Point(0, verticleShift),
                    new paper.Size(0, 0)
                )
            );
        });
    }

    const group = new Paper.Group();

    const drawLine = function (lineData: any) {
        let lines;
        try {
            lines = JSON.parse(lineData)[1];
            let path = new Paper.Path(lines);
            path.position.y += verticleShift;
            path.selected = false;
            group.addChild(path);
        } catch (e) {
            console.log(`error drawing game ${gameId}, ${type} drawing ${id}`);
        }
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
            Paper.setup(element);
            const parentSize = parent.getBoundingClientRect();
            const projectId = Paper.project.index;

            let newScale = calculateScale(Paper.view.bounds, parentSize) * 0.2;
            if (Paper.view) {
                Paper.view.zoom = newScale;
            }
            drawSectionAsync(
                game.head!!,
                Paper.view.bounds.top,
                line_delay,
                projectId,
                game.id
            )
                .then(({ bottom }) => {
                    return drawSectionAsync(
                        game.torso!!,
                        bottom,
                        line_delay,
                        projectId,
                        game.id
                    );
                })
                .then(({ bottom }) => {
                    return drawSectionAsync(
                        game.legs!!,
                        bottom,
                        line_delay,
                        projectId,
                        game.id
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
