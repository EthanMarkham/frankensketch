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
        { divider: 1e18, suffix: 'E' },
        { divider: 1e15, suffix: 'P' },
        { divider: 1e12, suffix: 'T' },
        { divider: 1e9, suffix: 'G' },
        { divider: 1e6, suffix: 'M' },
        { divider: 1e3, suffix: 'k' }
    ];

    for (let i = 0; i < ranges.length; i++) {
        if (number >= ranges[i].divider) {
            return (number / ranges[i].divider).toFixed(1).toString() + ranges[i].suffix;
        }
    }
    return number.toString();
}