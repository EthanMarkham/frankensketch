import { Game, Drawing } from "API";

export interface ErrorData {
    autoDismiss?: number; //how long until auto dismiss.
    uuid?: number;
    message: string;
}

export interface Store {
    userData: { email: string; username: string; groups?: string[] } | null;
    serverSideProps: any | null; //Generic JSON props to grab before loading a feature.
    pageIndex: number;
    subscriptions: Map<string, () => void>;
    games: Array<Game>;
    drawings: Array<Drawing>;
    //Error Information
    error: ErrorData | null;
    actions: {
        setPage: (index: number) => void;
        setServerSideProps: (data: any | null) => void;
        setUser: (
            data: { username: string; email: string; groups?: string[] } | null
        ) => void;
        setGames: (data: Array<Game>) => void;
        addGame: (data: Game) => void;
        setDrawings: (data: Array<Drawing>) => void;
        addDrawing: (data: Drawing) => void;
        subscribe: (key: string, callback: any) => void;
        unsubscribe: (key: string) => void;
        viewGame: (gameId: string) => void;
        joinGame: (isPublic?: boolean) => void;
        postGame: (lineData: any, drawingType: string) => Promise<void>;
        setError: (data: ErrorData) => void;
    };
}
