import React, { useState, useEffect } from "react";
import { useStore } from "store";
import { FlexBox } from "styles";
import { ErrorData } from "types";

/*OLD FILE GET RID OF*/
function Error(props: { title: string; text: string }) {
    const errorData = useStore((state) => state.error);

    //const [showing, setShowing] = useState(false);

    const [errorMap, setError] = useState(new Map<number, ErrorData>());

    const [handledErrors, setHandledErrors] = useState(
        new Map<number, boolean>()
    );

    //Grab Error from state as being pushed up
    useEffect(() => {
        if (errorData)
            setError((errors) => errors.set(errorData.uuid!!, errorData));
    }, [errorData]);

    //Grab Error from state as being pushed up
    useEffect(() => {
        errorMap.forEach((val, k) => {
            if (!handledErrors.has(k)) {
                if (
                    errorMap.get(k)?.autoDismiss &&
                    errorMap.get(k)!!.autoDismiss!! > 0
                ) {
                    setTimeout(() => {
                        setError((cur) => {
                            cur.delete(k);
                            return cur;
                        });
                        setHandledErrors((cur) => {
                            cur.delete(k);
                            return cur;
                        });
                    }, errorMap.get(k)!!.autoDismiss);
                }
                setHandledErrors((cur) => cur.set(k, true));
            }
        });
    }, [errorMap, handledErrors]);

    return (
        <FlexBox position="fixed" width="50%" height="fit-content">
            {props.text}
        </FlexBox>
    );
}

export default Error;
