import { useState } from "react";
import { FlexBox } from "styles";


const Accordion = () => {
    const [isActive, setIsActive] = useState(false)
    return (
        <>
            <FlexBox onClick={() => setIsActive(!isActive)}></FlexBox>

        </>
    );
};

export default Accordion;      