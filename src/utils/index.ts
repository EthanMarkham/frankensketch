import { USER_MESSAGES } from "utils/DEFS";
import { ErrorData } from "types";

export function getGenericError(data?: Error): ErrorData {
    return {
        message: USER_MESSAGES.ERROR_MESSAGE,
    };
}

export function getDateTimeFormat(date?: Date): string {
    let today = date ? date : new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
}

export function calculateScale(
    { height, width }: DOMRect,
    oldHeight = 640,
    oldWidth = 360
): number {
    const targetWidth = width;
    const targetHeight = height;

    const ratioW = targetWidth / oldWidth;
    const ratioH = targetHeight / oldHeight;
    return ratioW < ratioH ? ratioW : ratioH;
}
