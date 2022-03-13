import { Game } from "API";

/**Get random item from an array*/
export function getRandomItem(arr: any[]) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}

export function formatNumberWithMetricPrefix(number: number) {
    let ranges = [
        { divider: 1e18, suffix: "E" },
        { divider: 1e15, suffix: "P" },
        { divider: 1e12, suffix: "T" },
        { divider: 1e9, suffix: "G" },
        { divider: 1e6, suffix: "M" },
        { divider: 1e3, suffix: "k" },
    ];

    for (let i = 0; i < ranges.length; i++) {
        if (number >= ranges[i].divider) {
            return (
                (number / ranges[i].divider).toFixed(1).toString() +
                ranges[i].suffix
            );
        }
    }
    return number.toString();
}
export const sortGames = (games: Array<Game>) => {
    let test = games
        .filter(({ head, torso, legs }: any) => head && torso && legs)
        .map((game: any) => {
            const createdDate = [
                game.head.createdAt,
                game.torso.createdAt,
                game.legs.createdAt,
            ].reduce((a, b) => {
                return a > b ? a : b;
            });
            return { ...game, createdAt: createdDate };
        })
        .sort((a: any, b: any) => {
            return b.createdAt < a.createdAt ? -1 : 1;
        });
    return test;
};
