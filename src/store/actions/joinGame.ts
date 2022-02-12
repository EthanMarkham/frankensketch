import { API } from "aws-amplify";
import { Store } from "types";
import { SetState } from "zustand";

export function joinGame(set: SetState<Store>) {
    function joinGame(isPublic?: boolean | undefined): void {
        if (isPublic === undefined) isPublic = true;
        //SETUP LOADING SCREEN
        set((store) => ({ ...store, pageIndex: -1 }));

        //console.log(API.endpoint("api"));

        //FETCH PRE GAME DATA
        API.get("rest", "/rest/start", {
            response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
        })
            .then((response) => {
                set((store) => ({
                    ...store,
                    pageIndex: 2,
                    serverSideProps: response.data,
                }));
            })
            .catch((err) => {
                alert(err);
                //console.log(err.response.data);
                //console.log(err.response.data);
            });
    }

    return joinGame;
}
