import { API } from "aws-amplify";

export function queryGamesByUsername(username: string) {
    return new Promise<[any]>(async (resolve, reject) => {
        const data = await API.post("rest", `/rest/listGames`, {
            body: {
                artist: username,
            },
        }).then(({ body, err }) => {
            if (err) {
                console.log(err);
                return [];
            }
            const response = JSON.parse(body);
            return response;
        });
        resolve(data);
    });
}
