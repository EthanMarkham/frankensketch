import { Game } from "types/API";

export interface ErrorData {
    autoDismiss?: number; //how long until auto dismiss.
    uuid?: number;
    message: string;
}

export interface Store {
    userData: { email: string; username: string; groups?:string[] } | null;
    serverSideProps: any | null; //Generic JSON props to grab before loading a feature.
    pageIndex: number;
    subscriptions: Map<string, () => void>;
    //Error Information
    error: ErrorData | null;
    actions: {
        setPage: (index: number) => void;
        setUser: (data: { username: string; email: string; groups?:string[]} | null) => void;
        subscribe: (key: string, callback: any) => void;
        unsubscribe: (key: string) => void;
        viewGame: (game: Game) => void;
        joinGame: (isPublic?: boolean) => void;
        postGame: (lineData: any, drawingType: string) => Promise<void>;
        setError: (data: ErrorData) => void;
    };
}
