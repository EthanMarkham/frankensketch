import { Drawing } from "API";
import { API, Auth } from "aws-amplify";
import { getGameById } from "queries/queries";
import { Store } from "types";
import { SetState } from "zustand";

export function postGame(set: SetState<Store>) {
    async function postGame(lineData: any, drawingType: string): Promise<void> {
        set((store) => ({ ...store, pageIndex: -1 }));

        const user = await Auth.currentUserInfo();
        const { game } = await API.post("rest", "/rest/game", {
            //response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
            body: {
                lineData: lineData,
                drawingType: drawingType.toLowerCase(),
                username: user.username,
            },
        });
        console.log(game);
        if (!game) {
            alert("something went wrong. /store/actions/postGame");
        }
        let key;
        switch (drawingType) {
            default:
            case "head":
                key = "drawingHeadId";
                break;
            case "torso":
                key = "drawingTorsoId";
                break;
            case "legs":
                key = "drawingLegsId";
                break;
        }
        //Note: better to just grab from backend here
        const newDrawing: Drawing = {
            id: game[key]!!,
            type: drawingType,
            artist: user.username,
            isComplete: true,
            createdAt: "",
            isRemoved: false,
            __typename: "Drawing",
            updatedAt: "",
            _version: 0,
            _lastChangedAt: 0,
        };

        if (game.isComplete) {
            set((store) => ({
                ...store,
                pageIndex: -1,
                drawings: [...store.drawings, newDrawing],
            }));

            getGameById({ id: game.id }).then((data) => {
                set((store) => ({
                    ...store,
                    serverSideProps: { ...store.serverSideProps, game: data },
                    pageIndex: 9,
                }));
            });
        } else {
            set((store) => ({
                ...store,
                pageIndex: 1,
            }));
        }
    }

    return postGame;
}
