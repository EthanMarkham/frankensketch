import { Auth, Hub } from "aws-amplify";
import { useEffect } from "react";
import { useStore } from "store";

export default function useAuth() {
    const setUser = useStore((store) => store.actions.setUser);

    useEffect(() => {
        Auth.currentAuthenticatedUser()
            .then((data) => {
                console.log(data);
                setUser({
                    username: data.attributes.preffered_username,
                    email: data.attributes.email,
                    groups: data.signInUserSession.accessToken.payload['cognito:groups']
                });
            })
            .catch(() => {
                setUser(null);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        Hub.listen("auth", (data) => {
            switch (data.payload.event) {
                case "signIn":
                    setUser({
                        username: data.payload.data.preffered_username,
                        email: data.payload.data.email,
                    });
                    break;
                default:
                case "signOut":
                    setUser(null);
                    break;
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return null;
}
