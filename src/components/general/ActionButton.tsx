import React from "react";
import { CSSProperties } from "styled-components";
import { Button } from "styles";
import { COLORS } from "utils/DEFS";

function ActionButton({
    text,
    disabled,
    onClick,
    color,
    style,
}: {
    text: string;
    disabled?: boolean;
    onClick: () => void;
    color: string;
    style?: CSSProperties;
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
            style={style}
        >
            {text}
        </Button>
    );
}

export default ActionButton;
