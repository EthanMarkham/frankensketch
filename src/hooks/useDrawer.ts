import { useEffect, useState } from "react";
import Paper from "paper";
import { Drawing, Game } from "models";
import { calculateScale } from "utils";

function drawSection({ type, lines }: Drawing): Promise<void> {
    const group = new Paper.Group();

    const drawLine = function (lineData: any, verticleShift: number) {
        let path = new Paper.Path(lineData);
        path.position.y += verticleShift;
        path.selected = false;
        group.addChild(path);
    };
    return new Promise((resolve, reject) => {
        let increment = 0;
        const verticleShift =
            type === "head" ? 0 : type === "torso" ? 620 : 1280;
        lines?.forEach((line, i) => {
            let lineData = JSON.parse(line)[1];
            setTimeout(() => drawLine(lineData, verticleShift), increment);
            increment += i < lines.length - 1 ? 10 : 0;
        });
        setTimeout(() => {
            console.log("group bounds", group.bounds);
            group.selected = false;
            resolve();
        }, increment);
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
            drawSection(game.head!!)
                .then((_) => drawSection(game.torso!!))
                .then((_) => drawSection(game.legs!!));
            setInit(true);
        }
    }, [canvas, isInit, game, container]);

    return null;
}

export default useDrawer;
