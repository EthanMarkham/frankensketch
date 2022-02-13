import { useState } from "react";
import { FlexBox } from "styles";


const UserAccordion = () => {
    const [isActive, setIsActive] = useState(false)
    return (
        <>
            <FlexBox onClick={() => setIsActive(!isActive)}></FlexBox>

        </>
    );
};

export default UserAccordion;      