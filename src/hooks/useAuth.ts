import { User } from "API";
import { Auth, Hub, API } from "aws-amplify";
import { getUser } from "graphql/queries";
import { useEffect } from "react";
import { useStore } from "store";

export default function useAuth() {
    //Note: page index is handled by setUser function in store.
    const setUser = useStore((store) => store.actions.setUser);

    useEffect(() => {
        function getUsername(email: string) {
            return new Promise<User>(async (resolve, reject) => {
                const { data } = (await API.graphql({
                    query: getUser,
                    variables: {
                        id: email,
                    },
                })) as any;
                if (data.getUser) resolve(data.getUser);
                else reject(data.error);
            });
        }

        function updateUser() {
            Auth.currentAuthenticatedUser()
                .then((authData) => {
                    const groups =
                        authData.signInUserSession.accessToken.payload[
                            "cognito:groups"
                        ];
                    getUsername(authData.username).then((data) => {
                        console.log(data);
                        setUser({
                            username: data.userName,
                            email: authData.username,
                            groups: groups ? groups : null,
                        });
                    });
                })
                .catch(() => {
                    setUser(null);
                });
        }

        updateUser();

        Hub.listen("auth", (data) => {
            switch (data.payload.event) {
                case "signIn":
                case "signUp": //Note: fallthrough by design
                    updateUser();
                    break;
                default:
                case "signOut":
                    setUser(null);
                    break;
            }
        });
    }, [setUser]);

    return null;
}
