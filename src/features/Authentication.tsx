import React, { useState, useCallback, useMemo } from "react";
import { Auth } from "aws-amplify";
import {
    Stiches,
    FrankenSketchHeader,
    FlexBox,
    InputGroup,
    InputField,
    InputLabel,
    InputTextHelper,
    Button,
    Text,
} from "styles";
import { COLORS } from "utils/DEFS";
import { LoginDetails, SignUpDetails } from "types";
import { getDateTimeFormat } from "utils";
import useError from "hooks/useError";
import { useStore } from "store";

enum MODE {
    SIGN_IN,
    SIGN_UP,
}

function Authentication() {
    //Step: Get initial state
    const [mode, setMode] = useState<MODE>(MODE.SIGN_IN);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVerify, setPasswordVerify] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState("");

    const currentDate = getDateTimeFormat();

    const [Error, errorActions] = useError();
    const loginDetails = useMemo<LoginDetails | SignUpDetails>(() => {
        return mode === MODE.SIGN_UP
            ? {
                  username: email,
                  password: password,
                  attributes: {
                      preferred_username: username,
                      birthdate: dob,
                      email: email,
                  },
              }
            : {
                  username: email,
                  password: password,
              };
    }, [dob, email, mode, password, username]);

    const loginAction = useCallback(() => {
        const handleError = (data: any) => {
            errorActions.show(data.log, data.name);
        };

        switch (mode) {
            case MODE.SIGN_IN:
                Auth.signIn(loginDetails as LoginDetails).catch((err) =>
                    handleError(err)
                );
                break;
            case MODE.SIGN_UP:
                if (passwordVerify !== loginDetails.password) {
                    handleError("Passwords don't match!");
                }
                Auth.signUp(loginDetails as SignUpDetails).catch((err) =>
                    handleError(err)
                );
                break;
        }
    }, [mode, loginDetails, errorActions, passwordVerify]);

    const switchMode = () =>
        setMode((mode) =>
            mode === MODE.SIGN_UP ? MODE.SIGN_IN : MODE.SIGN_UP
        );

    return (
        <FlexBox direction="column" verticalAlignment="center">
            {Error && Error}
            <FrankenSketchHeader fontSize="4em" margin="1rem">
                FrankenSketch
            </FrankenSketchHeader>
            <Stiches margin="0 0 5rem 0" width="100%" />

            <InputGroup>
                <InputLabel>Email</InputLabel>
                <InputField
                    onChange={(event) => setEmail(event.target.value)}
                    type="email"
                    required={true}
                    borderColor={COLORS.blue}
                ></InputField>
                <InputTextHelper></InputTextHelper>
            </InputGroup>

            <InputGroup>
                <InputLabel>Password</InputLabel>
                <InputField
                    onChange={(event) => setPassword(event.target.value)}
                    type="password"
                    required={true}
                    borderColor={COLORS.blue}
                ></InputField>
                <InputTextHelper></InputTextHelper>
            </InputGroup>

            {mode === MODE.SIGN_UP && (
                <InputGroup>
                    <InputLabel>Verify Password</InputLabel>
                    <InputField
                        onChange={(event) =>
                            setPasswordVerify(event.target.value)
                        }
                        type="password"
                        required={true}
                        borderColor={COLORS.blue}
                    ></InputField>
                    <InputTextHelper></InputTextHelper>
                </InputGroup>
            )}

            {mode === MODE.SIGN_UP && (
                <InputGroup>
                    <InputLabel>Username</InputLabel>
                    <InputField
                        onChange={(event) => setUsername(event.target.value)}
                        type="text"
                        required={true}
                        borderColor={COLORS.blue}
                    ></InputField>
                    <InputTextHelper></InputTextHelper>
                </InputGroup>
            )}

            {mode === MODE.SIGN_UP && (
                <InputGroup>
                    <InputLabel>Birth Date</InputLabel>
                    <InputField
                        onChange={(event) => setDob(event.target.value)}
                        type="date"
                        required={true}
                        borderColor={COLORS.blue}
                        max={currentDate}
                    ></InputField>
                    <InputTextHelper></InputTextHelper>
                </InputGroup>
            )}

            <Button
                onClick={loginAction}
                color={COLORS.white}
                backgroundColor={COLORS.green}
                width="200px"
                height="3rem"
                fontSize="1.2em"
                margin="2rem 0"
            >
                {mode === MODE.SIGN_UP ? "Sign Up" : "Sign In"}
            </Button>

            <Text fontSize="1.25em" margin="0 0 2rem 0">
                or
            </Text>

            <Button
                background="none"
                fontSize="1.25em"
                color={COLORS.blue}
                onClick={switchMode}
            >
                {mode === MODE.SIGN_UP ? "Sign In" : "Sign Up"}
            </Button>
        </FlexBox>
    );
}

export default Authentication;
