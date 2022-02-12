export interface ErrorData {
    autoDismiss?: number; //how long until auto dismiss.
    uuid?: number;
    message: string;
}

export interface Store {
    userData: { email: string; username: string } | null;
    serverSideProps: any | null; //Generic JSON props to grab before loading a feature.
    pageIndex: number;
    //Error Information
    error: ErrorData | null;
    actions: {
        setPage: (index: number) => void;
        setUser: (data: { username: string; email: string } | null) => void;
        joinGame: (isPublic?: boolean) => void;
        setError: (data: ErrorData) => void;
    };
}
