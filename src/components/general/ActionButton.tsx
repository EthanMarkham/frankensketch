import React from "react";
import { Button } from "styles";
import { COLORS } from "utils/DEFS";

function ActionButton({
    text,
    disabled,
    onClick,
    color,
}: {
    text: string;
    disabled?: boolean;
    onClick: () => void;
    color: string;
}) {
    console.log(disabled);
    return (
        <Button
            disabled={disabled !== undefined ? disabled : false}
            width="210px"
            height="50px"
            fontSize="1.25em"
            margin="1.5rem 0"
            backgroundColor={color}
            color={COLORS.black}
            onClick={onClick}
        >
            {text}
        </Button>
    );
}

export default ActionButton;
