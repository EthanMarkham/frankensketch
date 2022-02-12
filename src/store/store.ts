import { Store } from "types";
import create from "zustand";
import { joinGame } from "./actions/joinGame";
/*
PAGE INDEXS
            case -1:
                return <LoadingScreen />;
            case 0:
                return <Authentication />;
            case 1:
                return <HomeScreen />;
            case 2:
                return <Sketchpad />;
*/

const useStore = create<Store>((set, _get) => ({
    serverSideProps: null,
    userData: null, //maybe we dont need?
    pageIndex: -1,
    error: null, //GET RID OF
    actions: {
        setPage(index) {
            set((store) => ({ ...store, pageIndex: index }));
        },
        setUser(data) {
            set((store) => ({
                ...store,
                userData: data,
                pageIndex: data === null ? 0 : 1,
            }));
        },
        joinGame: joinGame(set),
        setError(data) {
            set((store) => {
                const uuid = store.error?.uuid ? store.error.uuid + 1 : 0;
                return { ...store, error: { ...data, uuid: uuid } };
            });
        },
    },
}));

export default useStore;
