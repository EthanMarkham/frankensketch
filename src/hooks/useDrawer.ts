import { useEffect, useState } from "react";
import Paper from "paper";
import { Drawing, Game } from "models";

function drawSection({ type, lines }: Drawing): Promise<void> {
    const drawLine = function (lineData: any, verticleShift: number) {
        let path = new Paper.Path(lineData);
        path.position.y += verticleShift;
        path.selected = false;
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
        setTimeout(() => resolve(), increment);
    });
}

function useDrawer(canvas: React.RefObject<HTMLCanvasElement>, game: Game) {
    const [isInit, setInit] = useState(false);

    useEffect(() => {
        const element = canvas.current;
        if (element !== null && !isInit && game) {
            console.log("initializing paper");
            Paper.setup(element);
            drawSection(game.head!!)
                .then((_) => drawSection(game.torso!!))
                .then((_) => drawSection(game.legs!!));
            setInit(true);
        }
    }, [canvas, isInit, game]);

    return null;
}

export default useDrawer;
