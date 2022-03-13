import { useCallback, useEffect, useLayoutEffect, useState } from "react";
//import Paper from "paper";
import { button, useControls } from "leva";
import { calculateScale } from "utils";
import paper from "paper";
import { CANVAS_BACKGROUND_COLOR, TOOL } from "types/sketchpad";

function getGuideLines(drawingType: any, bounds: any) {
    const GUIDLINE_HEIGHT = 20;
    const HEAD_WIDTH = bounds.width / 12;
    const LEG_WIDTH = bounds.width / 6;

    switch (drawingType.toLowerCase()) {
        case "legs":
            return [
                {
                    from: [bounds.centerX - LEG_WIDTH, bounds.top],
                    to: [
                        bounds.centerX - LEG_WIDTH,
                        bounds.top + GUIDLINE_HEIGHT,
                    ],
                },
                {
                    from: [bounds.centerX + LEG_WIDTH, bounds.top],
                    to: [
                        bounds.centerX + LEG_WIDTH,
                        bounds.top + GUIDLINE_HEIGHT,
                    ],
                },
            ];
        case "head":
            return [
                {
                    from: [bounds.centerX - HEAD_WIDTH, bounds.bottom],
                    to: [
                        bounds.centerX - HEAD_WIDTH,
                        bounds.bottom - GUIDLINE_HEIGHT,
                    ],
                },
                {
                    from: [bounds.centerX + HEAD_WIDTH, bounds.bottom],
                    to: [
                        bounds.centerX + HEAD_WIDTH,
                        bounds.bottom - GUIDLINE_HEIGHT,
                    ],
                },
            ];
        default:
        case "torso":
            return [
                {
                    from: [bounds.centerX - HEAD_WIDTH, bounds.top],
                    to: [
                        bounds.centerX - HEAD_WIDTH,
                        bounds.top + GUIDLINE_HEIGHT,
                    ],
                },
                {
                    from: [bounds.centerX + HEAD_WIDTH, bounds.top],
                    to: [
                        bounds.centerX + HEAD_WIDTH,
                        bounds.top + GUIDLINE_HEIGHT,
                    ],
                },
                {
                    from: [bounds.centerX - LEG_WIDTH, bounds.bottom],
                    to: [
                        bounds.centerX - LEG_WIDTH,
                        bounds.bottom - GUIDLINE_HEIGHT,
                    ],
                },
                {
                    from: [bounds.centerX + LEG_WIDTH, bounds.bottom],
                    to: [
                        bounds.centerX + LEG_WIDTH,
                        bounds.bottom - GUIDLINE_HEIGHT,
                    ],
                },
            ];
    }
}

interface InitialPaper {
    bounds: paper.Rectangle;
    center: any;
}
// MOUSE EVENTS

function usePaper(canvas: React.RefObject<HTMLCanvasElement>) {
    const [drawingType, setType] = useState<string | null>();
    const [project, setProject] = useState<paper.Project>();
    const [init, setInit] = useState<InitialPaper | null>();
    const [history, setHistory] = useState<Array<any>>(new Array<any>());
    const [lastChild, setLastChild] = useState<paper.Item[] | null>(null);

    const [{ stroke, color, position, scale, tool }, set] = useControls(
        () => ({
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
            tool: {
                label: "Tool",
                options: Object.values(TOOL),
            },
            scale: {
                label: "Scale",
                value: 1,
                min: 0.3,
                max: 3,
                step: 0.1,
            },
            position: {
                label: "Postion",
                value: {
                    x: 0,
                    y: 0,
                },
                x: {
                    min: -500,
                    max: 500,
                },
                y: {
                    min: -500,
                    max: 500,
                },
            },
            undo: button(
                () => {
                    if (!paper.project) return;
                    try {
                        const deleting = paper.project?.activeLayer?.lastChild;
                        const typeOfLast = JSON.parse(deleting.exportJSON())[0];
                        switch (typeOfLast) {
                            case "Group":
                                paper.project?.activeLayer.removeChildren();
                                paper.project?.activeLayer.addChildren(
                                    lastChild!!
                                );
                                setHistory([]);

                                break;
                            default:
                                setHistory([{ ...deleting }, ...history]);
                                deleting.remove();
                        }
                    } catch (e) {
                        console.log(e);
                    }
                },
                {
                    disabled: lastChild === null,
                }
            ),

            redo: button(
                () => {
                    if (!paper.project) return;
                    let copy = history.slice();
                    if (copy.length === 0) return;

                    try {
                        let path = new paper.Path(copy[0]);
                        path.selected = false;
                        copy.shift();
                        setHistory(copy);
                    } catch (e) {
                        console.log(e);
                    }
                },
                {
                    disabled: history.length === 0,
                }
            ),
        }),
        [history, lastChild]
    );

    const addGuidelines = useCallback(() => {
        if (!canvas.current || !paper.view || !drawingType) return;
        //draw borders
        const rectPath: paper.Path = new paper.Path();
        rectPath.fillColor = new paper.Color(CANVAS_BACKGROUND_COLOR);
        rectPath.strokeColor = new paper.Color("#333");
        rectPath.strokeWidth = 4;

        rectPath.add(new paper.Point(paper.view.bounds.bottomLeft));
        rectPath.add(new paper.Point(paper.view.bounds.bottomRight));
        rectPath.add(new paper.Point(paper.view.bounds.topRight));
        rectPath.add(new paper.Point(paper.view.bounds.topLeft));
        rectPath.add(new paper.Point(paper.view.bounds.bottomLeft));

        rectPath.selected = false;
        const lines = getGuideLines(drawingType, paper.view.bounds);
        let path: paper.Path;
        lines.forEach(({ from, to }) => {
            path = new paper.Path();
            path.strokeColor = new paper.Color("#444");
            path.strokeWidth = 3;
            path.add(new paper.Point(to));
            path.lineTo(new paper.Point(from));
            path.selected = false;
        });
        //Step: create new layer to capture user lines
        const layer: paper.Layer = new paper.Layer();
        layer.activate();
    }, [canvas, drawingType]);

    const draw = useCallback(() => {
        if (!paper.project || !init) return;

        let path: paper.Path | null = null;
        let group: paper.Group | null = null;
        let mask: paper.Group | null = null;

        paper.project.view.onMouseDown = () => {
            setHistory([]);

            path = new paper.Path();
            path.strokeColor = new paper.Color(color);
            path.strokeWidth = stroke * paper.project.view.pixelRatio;
            path.strokeCap = "round";
            path.strokeJoin = "round";

            switch (tool) {
                case TOOL.ERASER:
                    path.strokeColor = new paper.Color(CANVAS_BACKGROUND_COLOR);
                    // move everything on the active layer into a group with 'source-out' blend
                    group = new paper.Group({
                        children: paper.project.activeLayer?.removeChildren(),
                        blendMode: "source-out",
                        insert: false,
                    });

                    mask = new paper.Group({
                        children: [path, group],
                        blendMode: "source-over",
                    });
                    break;
                case TOOL.SHAPE:
                    /*
                    group = new paper.Group({
                        children: paper.project.activeLayer.removeChildren(),
                        blendMode: "source-over",
                        insert: false,
                    });
                    mask = new paper.Group({
                        children: [path, group],
                        blendMode: "source-over",
                    });
                    */
                    break;
                case TOOL.PENCIL:
                default:
                    break;
            }
        };

        paper.project.view.onMouseDrag = (event: paper.MouseEvent) => {
            if (!paper || !init || !path) return null;
            else if (
                event.point.x < init.bounds.left ||
                event.point.x > init.bounds.right ||
                event.point.y < init.bounds.top ||
                event.point.y > init.bounds.bottom
            ) {
                return;
            } else {
                path.add(event.point);
            }
        };

        paper.project.view.onMouseUp = () => {
            if (!path) return;
            switch (tool) {
                case TOOL.SHAPE:
                    try {
                        if (path.firstChild && path.lastChild) {
                            path.unite(path.lastChild as paper.PathItem);
                        }

                        path.closed = true;
                        path.fillColor = new paper.Color(color);
                    } catch (e) {
                        console.log(e);
                    }
                    /*
                    path.remove();
                    group.remove();
                    mask.remove();
                    */
                    path.selected = false;
                    path.simplify(30);
                    setLastChild([path]);

                    break;
                case TOOL.ERASER:
                    path.simplify(10);
                    setLastChild(null);
                    path.selected = false;
                    break;
                case TOOL.PENCIL:
                    path.simplify(10);
                    path.selected = false;
                    setLastChild([path]);
                    break;
            }
            path = null;
        };
        return () => {
            paper.project.view.onMouseDrag = null;
            paper.project.view.onMouseUp = null;
            paper.project.view.onMouseDown = null;
        };
    }, [init, tool, color, stroke]);

    //Init.
    useEffect(() => {
        const element = canvas.current;
        if (element !== null && drawingType && !init) {
            paper.setup(element);
            setProject(paper.project);

            addGuidelines();
            const newScale =
                calculateScale(
                    paper.view.bounds,
                    element.parentElement!!.getBoundingClientRect()
                ) * 0.8;

            set({
                scale: newScale,
            });

            setInit({
                bounds: paper.view.bounds,
                center: paper.view.center,
            });
        }
        return () => {};
    }, [addGuidelines, canvas, drawingType, init, set]);

    //All the drawing ishh
    useEffect(draw, [draw]);

    //PAN AND ZOOM
    useLayoutEffect(() => {
        if (!project) return;
        project.view.zoom = scale;
    }, [scale, project]);

    useLayoutEffect(() => {
        if (!project || !init) return;
        paper.view.center = new paper.Point(
            init.center.x + position.x * scale,
            init.center.y + position.y * scale
        );
    }, [position, project, scale, init]);

    return [
        project,
        setType,
        { stroke, color, tool, position, scale },
    ] as const;
}

export default usePaper;
