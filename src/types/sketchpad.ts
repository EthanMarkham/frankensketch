import { Drawing } from "models";

export enum TOOL {
    PENCIL = "Pencil",
    ERASER = "Eraser",
    SHAPE = "Shape",
}

export const CANVAS_BACKGROUND_COLOR = "#f7fff3";

export interface LineSettingsIn {
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

export interface DrawSettingsIn {
    drawing: Drawing;
    verticleShift: number;
    line_delay: number;
    projectId: number;
    gameId: string;
    scale: number;
}
