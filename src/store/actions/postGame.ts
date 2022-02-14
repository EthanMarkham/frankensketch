import { API, Auth } from "aws-amplify";
import { Store } from "types";
import { SetState } from "zustand";

export function postGame(set: SetState<Store>) {
    async function postGame(lineData: any, drawingType: string): Promise<void> {
        set((store) => ({ ...store, pageIndex: -1 }));

        const user = await Auth.currentUserInfo();
        console.log(user);
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
        console.log(game);
        set((store) => ({
            ...store,
            serverSideProps: { game },
            pageIndex: game.isComplete ? 9 : 1,
        }));
    }

    return postGame;
}
