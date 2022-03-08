import React from "react";
import { Text } from "styles";
import { GenericStyleProps } from "types";
function SectionText({
    text,
    style,
}: {
    text: string;
    style?: GenericStyleProps;
}) {
    return (
        <Text fontSize="1.5em" padding="0.5rem 0" {...style}>
            {text}
        </Text>
    );
}

export default SectionText;
