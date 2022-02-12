import { USER_MESSAGES } from "utils/DEFS";
import { ErrorData } from "types";

export function getGenericError(data?: Error): ErrorData{
    return {
        message: USER_MESSAGES.ERROR_MESSAGE,
    }
};

export function getDateTimeFormat(date?: Date){
    let today = date ? date : new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
}