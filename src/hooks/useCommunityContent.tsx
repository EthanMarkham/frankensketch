import { ListGamesQueryVariables } from 'API';
import { Game } from "models";
import { API } from 'aws-amplify';
import { listGames } from 'graphql/queries';
import { useEffect, useState } from 'react'
import { GraphQLResult } from "@aws-amplify/api-graphql";

export default function useCommunityContent(nextToken: string) {
    //State
    const [gameList, setGameList] = useState<Array<Game>>(new Array<Game>())
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [hasMore, setHasMore] = useState(false)
    const [nextTokenString, setNextTokenString] = useState("")

    useEffect(() => {
        if (nextToken !== "no more data") {
            console.log(`Loading data ...`)
            setLoading(true)
            setError(false)

            //Get games data
            getGames().then(res => {
                //Update GameList 
                setGameList(prevGameList => {
                    return [...prevGameList, ...res.games]
                })

                //Check if we have more games
                if (res.nextToken) {
                    setHasMore(true)
                    setNextTokenString(res.nextToken)
                } else {
                    setHasMore(false)
                }

                setLoading(false)
            }).catch(err => {
                setError(true)
            })
            console.log("Finish loading ...")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [nextToken]);

    const getGames = async () => {
        let variables1: ListGamesQueryVariables = {
            filter: {
                gameHeadId: { attributeExists: true },
                gameLegsId: { attributeExists: true },
                gameTorsoId: { attributeExists: true },
            },
            limit: 10,
        }

        let variables2: ListGamesQueryVariables = {
            filter: {
                gameHeadId: { attributeExists: true },
                gameLegsId: { attributeExists: true },
                gameTorsoId: { attributeExists: true },
            },
            limit: 10,
            nextToken: nextToken
        }

        let variables = !hasMore ? variables1 : variables2

        const { data } = (await API.graphql({
            query: listGames,
            variables,
        })) as GraphQLResult;

        const result = data as any

        return { games: result.listGames.items as Array<Game>, nextToken: result.listGames.nextToken as string | null }
    }

    return { gameList, loading, error, hasMore, nextTokenString }
}
