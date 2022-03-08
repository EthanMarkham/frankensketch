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
        if (!game) {
            alert("something went wrong. /store/actions/postGame");
        }
        if (game.isComplete) {
            set((store) => ({ ...store, pageIndex: -1 }));

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
