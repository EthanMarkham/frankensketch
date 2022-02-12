import React, { useCallback, useState } from "react";
import { FlexBox } from "styles";
import { GenericStyleProps } from "types";
import { COLORS, USER_MESSAGES } from "utils/DEFS";
import useDialog from "./useDialog";

export default function useError(props?: {
    headerProps?: GenericStyleProps;
    bodyProps?: GenericStyleProps;
}) {
    const [closeHandler, setCloseHandler] = useState<() => void | null>(
        () => {}
    );

    const [dialog, dialogActions] = useDialog({
        headerProps: { backgroundColor: COLORS.danger },
    });

    //Info: dialogActions.open will rerender when child is changed so need this in here.
    const show = (text: string, title?: string, onClose?: () => void) => {
        const Error = (
            <FlexBox backgroundColor="white" color="black">
                {text}
            </FlexBox>
        );

        dialogActions.set(Error, title ? title : USER_MESSAGES.ERROR_TITLE);
        if (onClose) setCloseHandler(onClose);
    };

    const close = useCallback(() => {
        if (closeHandler) closeHandler();
        dialogActions.close();
    }, [closeHandler, dialogActions]);
    return [dialog, { show, close }] as const;
}
