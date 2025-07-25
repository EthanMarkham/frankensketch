import { LoginDetails, SignUpDetails } from "./auth";
import { ErrorData, Store } from "./store";
import { GenericStyleProps, FlexBoxProps } from "./style";
import { HomeScreenProps } from "./home";
import { RefObject } from "react";

export type Callback = (data: any) => void;

export interface Size {
    height: number;
    width: number;
}

export interface GenericPageProps {
    height?: number;
    width?: number;
    container?: RefObject<HTMLDivElement>;
}

export class Action {
    type: string;
    payload?: any;
    callback?: Callback;
    constructor(
        type: string,
        payload: any = null,
        callback: Callback | undefined = undefined
    ) {
        this.type = type;
        if (payload) this.payload = payload;
        if (callback) this.callback = callback;
    }
}

export type {
    //store
    ErrorData,
    Store,
    GenericStyleProps,
    FlexBoxProps,
    LoginDetails,
    SignUpDetails,
    HomeScreenProps,
};
