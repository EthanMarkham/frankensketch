import React from "react";
import { Text } from "styles";

function SectionText({ text }: { text: string }) {
    return (
        <Text fontSize="1.5em" padding="0.5rem 0">
            {text}
        </Text>
    );
}

export default SectionText;
