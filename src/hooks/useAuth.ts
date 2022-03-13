import { Auth, Hub } from "aws-amplify";
import { getUsername } from "queries/queries";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useStore } from "store";

export default function useAuth() {
    //Note: page index is handled by setUser function in store.
    const setUser = useStore((store) => store.actions.setUser);

    useEffect(() => {
        Auth.currentAuthenticatedUser()
            .then((authData) => {
                const groups =
                    authData.signInUserSession.accessToken.payload[
                        "cognito:groups"
                    ];
                getUsername(authData.username).then((data) => {
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
    }, [setUser]);

    useEffect(() => {
        function callback(data: any) {
            switch (data.payload.event) {
                case "signOut":
                    setUser(null);
                    break;
                case "signIn":
                    Auth.currentAuthenticatedUser()
                        .then((authData) => {
                            const groups =
                                authData.signInUserSession.accessToken.payload[
                                    "cognito:groups"
                                ];
                            getUsername(authData.username).then((data) => {
                                const user = {
                                    username: data.userName,
                                    email: authData.username,
                                    groups: groups ? groups : null,
                                };
                                setUser(user);
                            });
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                    break;
                case "signUp":
                    //Handled by Auth component
                    break;
                case "signIn_failure":
                    toast.error(data.payload.data.message);
                    break;
                case "signUp_failure":
                    let msg = data.payload.data.message.replace(
                        "PreSignUp failed with error",
                        ""
                    );
                    toast.error(msg);
                    break;
                default:
                    break;
            }
        }

        Hub.listen("auth", callback);

        return () => {
            Hub.remove("auth", callback);
        };
    }, [setUser]);

    return null;
}
