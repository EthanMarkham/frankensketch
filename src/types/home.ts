import { GenericPageProps } from "types";

export interface HomeScreenProps extends GenericPageProps {
    games?: [any];
}

export interface GameRecord {
    head: {
        artist: string;
    };
    torso: {
        artist: string;
    };
    legs: {
        artist: string;
    };
    createdAt: string;
    id: string;
}
