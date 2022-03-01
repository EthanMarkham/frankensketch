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

function usePaper(
    canvas: React.RefObject<HTMLCanvasElement>,
    parentSize: { width: number; height: number } = { width: 0, height: 0 }
) {
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
                        setHistory([{ ...deleting }, ...history]);

                        const typeOfLast = JSON.parse(deleting.exportJSON())[0];
                        console.log(typeOfLast);
                        console.log(project?.layers);
                        switch (typeOfLast) {
                            case "Group":
                                console.log("doing this", lastChild);
                                paper.project?.activeLayer.removeChildren();
                                paper.project?.activeLayer.addChildren(
                                    lastChild!!
                                );
                                break;
                            default:
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
            /*
        undo: buttonGroup({
            undo: () => console.log("hi"),
            opts: {
                title
            },
        
        }),
         */
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
            console.log("adding line", from, to);
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
                console.log("out of bounds");
                return;
            } else {
                path.add(event.point);
                /*
                switch (tool) {
                    case TOOL.ERASER:
                        const intersectItem = paper.project.activeLayer.getItem(
                            {
                                position: event.point,
                            }
                        );
                        if (intersectItem) {
                            intersectItem.remove();
                            intersectItem.visible = false;

                            console.log(intersectItem);
                        }
                }
                */
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
                        const items = path.getItems({
                            overlapping: path.bounds,
                        });
                        console.log(items, path);
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

                    path.selected = false;
                    //path.remove();
                    /*
                    try {
                        path.simplify(10);
                        const eraseRadius =
                            (stroke * paper.view.pixelRatio) / 2;

                        const outerPath = OffsetUtils.offsetPath(
                            path.clone({ insert: false }),
                            eraseRadius
                        );
                        const innerPath = OffsetUtils.offsetPath(
                            path.clone({ insert: false }),
                            -eraseRadius
                        );
                        path.selected = false;
                        path.remove();

                        innerPath.reverse(); // reverse one path so we can combine them end-to-end

                        // create a new path and connect the two offset paths into one shape
                        const deleteShape = new paper.Path({
                            closed: true,
                            insert: false,
                        });
                        deleteShape.addSegments(outerPath.segments);
                        deleteShape.addSegments(innerPath.segments);

                        // create round endcaps for the shape
                        // as they aren't included in the offset paths
                        console.log(path.segments);
                        const endCaps = new paper.CompoundPath({
                            children: [
                                new paper.Path.Circle({
                                    center: path.firstSegment.point,
                                    radius: eraseRadius,
                                }),
                                new paper.Path.Circle({
                                    center: path.lastSegment.point,
                                    radius: eraseRadius,
                                }),
                            ],
                            insert: false,
                        });

                        // unite the shape with the endcaps
                        // this also removes all overlaps from the stroke
                        const deletePath = deleteShape.unite(endCaps);
                        deletePath.simplify(10);

                        // grab all the items from the tmpGroup in the mask group
                        var items = group?.getItems({
                            overlapping: deleteShape.bounds,
                        });

                        items?.forEach((item) => {
                            deleteShape.removeSegment(item.index); // probably need to detect closed vs open path and tweak these settings
                        });
                        if (group) {
                            paper.project.activeLayer.addChildren(
                                group.removeChildren()
                            );
                            group.selected = false;
                        }
                        if (mask) {
                            mask.selected = false;
                        }
                    } catch (e) {
                        console.log(e);
                    } finally {
                        group = null;
                        mask = null;
                        break;
                    } */
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
        if (element !== null && drawingType) {
            console.log("initializing paper");
            paper.setup(element);
            setProject(paper.project);
        }
    }, [canvas, drawingType]);

    //Post loaded
    useEffect(() => {
        if (!project || init) return;
        addGuidelines();
        setInit({
            bounds: paper.view.bounds,
            center: paper.view.center,
        });
        set({
            scale: calculateScale(paper.view.bounds, parentSize) * 0.7, //My scale off?
        });
    }, [addGuidelines, init, parentSize, project, set]);

    //All the drawing ishh
    useEffect(draw, [draw]);

    //PAN AND ZOOM
    useLayoutEffect(() => {
        if (!project) return;
        project.view.zoom = scale;
    }, [scale, project]);

    useLayoutEffect(() => {
        if (!project || !init) return;
        console.log(paper.view.center);
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
