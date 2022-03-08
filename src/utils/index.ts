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
    imageSize: { height: number; width: number },
    containerSize: { height: number; width: number }
): number {
    const ratioW = containerSize.width / imageSize.width;
    const ratioH = containerSize.height / imageSize.height;
    return ratioW < ratioH ? ratioW : ratioH;
}

export function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
