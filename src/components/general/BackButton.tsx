import React from "react";
import { Button } from "styles";
import { Icons } from "styles/svg/ui-icons/icons";

function BackButton({
    disabled,
    onClick,
}: {
    disabled?: boolean;
    onClick: () => void;
}) {
    console.log(disabled);
    return (
        <Button
            disabled={disabled}
            background="none"
            borderRadius="0"
            onClick={onClick}
        >
            <img src={Icons.GoBack} alt="Go back icon" />
        </Button>
    );
}

export default BackButton;
