import React, { useState } from "react";
import { GenericStyleProps } from "types";

const Dialog = React.lazy(() => import("features/Dialog"));

export default function useDialog(props?: {
    headerProps?: GenericStyleProps;
    bodyProps?: GenericStyleProps;
}) {
    const [dialog, setDialog] = useState<JSX.Element | null>(null);

    const close = () => {
        console.log("clicked");
        setDialog(null);
    };

    const open = (title: string, child: JSX.Element) => {
        setDialog(
            <Dialog title={title} {...props} close={close}>
                {child}
            </Dialog>
        );
    };

    const set = (newChild: JSX.Element, title: string) => {
        setDialog(
            <Dialog title={title} {...props} close={close}>
                {newChild}
            </Dialog>
        );
    };

    return [dialog, { close, open, set }] as const;
}
