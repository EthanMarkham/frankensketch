import { useEffect, useState } from "react";
import Paper from "paper";
import { Drawing, Game } from "models";
import { calculateScale } from "utils";

interface LineSettingsIn {
    lineData: any;
    delay: number;
    projectId: number;
    gameId: string;
    scale: number;
    verticleShift: number;
    group: paper.Group;
    type: string;
    id: string;
}

interface DrawSettingsIn {
    drawing: Drawing;
    verticleShift: number;
    line_delay: number;
    projectId: number;
    gameId: string;
    scale: number;
}

function drawLine({
    lineData,
    delay,
    projectId,
    verticleShift,
    gameId,
    type,
    id,
    scale,
    group,
}: LineSettingsIn) {
    return new Promise<true>((resolve, reject) => {
        setTimeout(() => {
            Paper.projects[projectId].activate();
            const test = JSON.parse(lineData);
            //Info: Might want to refactor to use catch instead but this is fine for now
            try {
                const [pType, lines] = JSON.parse(lineData);
                switch (pType) {
                    case "Group":
                        const grp = new Paper.Group(lines);
                        grp.position.y += verticleShift;
                        grp.selected = false;
                        group.addChild(grp);
                        break;
                    default:
                        const path = new Paper.Path(lines);
                        path.position.y += verticleShift;
                        path.selected = false;
                        group.addChild(path);
                        break;
                }
            } catch (e) {
                console.log(
                    `error drawing game ${gameId}, ${type} drawing ${id}`,
                    test
                );
            } finally {
                resolve(true);
            }
        }, delay);
    });
}

function drawSection({
    drawing,
    verticleShift,
    line_delay,
    projectId,
    gameId,
    scale,
}: DrawSettingsIn): Promise<paper.Rectangle> {
    const { lines, type, id } = drawing;

    const testLine = new Paper.Path.Line(
        new Paper.Point(-100, verticleShift),
        new Paper.Point(100, verticleShift)
    );
    testLine.strokeWidth = 10;
    testLine.strokeColor = new Paper.Color(255, 255, 255);
    testLine.selected = false;

    //Step: If lines don't exist resolve rect with point passed in
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

    //Step: Create Group to track all the paths/drawing bounds
    const group = new Paper.Group();
    console.log("starting section at " + verticleShift);

    return new Promise<paper.Rectangle>((resolve) => {
        let promises = [];

        for (let i = 0; i < lines.length; i++) {
            promises.push(
                drawLine({
                    lineData: lines[i],
                    delay: line_delay * i,
                    type: type!!,
                    gameId,
                    scale,
                    group,
                    id,
                    verticleShift,
                    projectId,
                })
            );
        }
        Promise.all(promises).then((_) => {
            const rect = new Paper.Path.Rectangle(group.bounds);
            rect.strokeColor = new Paper.Color(255, 255, 255);
            rect.selected = false;
            group.selected = false;
            group.scale(1);
            resolve(group.bounds);
        });
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

            Paper.view!!.zoom = newScale;

            const defaultSettings = {
                line_delay,
                projectId,
                gameId: game.id,
                scale: newScale,
            };
            drawSection({
                drawing: game.head!!,
                verticleShift: Paper.view.bounds.top,
                ...defaultSettings,
            })
                .then(({ bottom }) => {
                    return drawSection({
                        drawing: game.torso!!,
                        verticleShift: bottom,
                        ...defaultSettings,
                    });
                })
                .then(({ bottom }) => {
                    return drawSection({
                        drawing: game.legs!!,
                        verticleShift: bottom,
                        ...defaultSettings,
                    });
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
