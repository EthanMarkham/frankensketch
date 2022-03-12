import { Auth } from "aws-amplify";
import * as React from "react";
import { Button, Text } from "styles";
import { Icons } from "styles/svg/ui-icons/icons";
import { GenericStyleProps } from "types";
import { COLORS } from "utils/DEFS";

function LogoutButton(props: GenericStyleProps) {
    return (
        <Button
            backgroundColor="transparent"
            padding="0.5rem"
            onClick={() => Auth.signOut()}
            {...props}
        >
            <img
                src={Icons.Logout}
                width="20px"
                height="20px"
                alt="logout icon"
            />
            <Text color={COLORS.white} margin="0 0 0 0.5rem">
                Logout
            </Text>
        </Button>
    );
}

export default LogoutButton;
