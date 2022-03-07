import { ListGamesQueryVariables } from "API";
import { API } from "aws-amplify";
import { useCallback, useEffect, useState } from "react";
import { listGamesWithLikes } from "queries/queries";
import { Game } from "API";

const getGames = (nextToken?: string | null | undefined) => {
    const variables: ListGamesQueryVariables = {
        filter: {
            gameHeadId: { attributeExists: true },
            gameLegsId: { attributeExists: true },
            gameTorsoId: { attributeExists: true },
        },
        limit: 10,
    };
    if (nextToken) variables.nextToken = nextToken;

    return new Promise<{
        games: Array<Game>;
        nextToken: string | null | undefined;
    }>(async (resolve, reject) => {
        const response = (await API.graphql({
            query: listGamesWithLikes,
            variables,
        })) as any;
        console.log(response);
        resolve({
            games: response.data.listGames.items as Array<Game>,
            nextToken: response.data.listGames.nextToken as string | null,
        });
    });
};

export default function useCommunityContent() {
    //State
    const [gameList, setGameList] = useState<Array<Game>>(new Array<Game>());
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [nextToken, setNextToken] = useState<string | null>();

    const loadGames = useCallback(async () => {
        setLoading(true);
        setError(false);
        getGames(nextToken)
            .then((res) => {
                console.log(res);
                //Update GameList
                setGameList([...gameList, ...res.games]);
                setNextToken(res.nextToken);
                setLoading(false);
            })
            .catch((err) => {
                setError(true);
            });
    }, [gameList, nextToken]);

    useEffect(() => {
        setLoading(true);
        setError(false);
        getGames()
            .then((res) => {
                //Update GameList
                setGameList(res.games);
                setNextToken(res.nextToken);
                setLoading(false);
            })
            .catch((err) => {
                setError(true);
            });
    }, []);

    return [gameList, loading, error, nextToken, loadGames] as const;
}
