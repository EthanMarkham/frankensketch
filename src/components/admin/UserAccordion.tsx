import { useState } from "react";
import { FlexBox, Text } from "styles";
import { user } from "types/admin";
import { COLORS } from "utils/DEFS";

const UserAccordion = (userData: user) => {
    const [isActive, setIsActive] = useState(false)

    return (
        <>
            <FlexBox direction="column" backgroundColor={COLORS.black} padding="0.75rem" margin="0.5rem 0" borderRadius="10px">
                <FlexBox direction="row" justifyContent="space-between" onClick={() => setIsActive(!isActive)}>
                    <Text>{userData.userName}</Text>
                    {isActive ? <Text>&#9651;</Text> : <Text>&#9661;</Text>}
                </FlexBox>
                {isActive && (
                    <FlexBox direction="column" margin="0.5rem 0 0 0" >
                        <Text fontWeight="300">ID: {userData.id}</Text>
                        <Text fontWeight="300" margin="0.5rem 0">Created At: {userData.createdAt}</Text>
                        <Text fontWeight="300">Updated At: {userData.updatedAt}</Text>
                    </FlexBox>
                )}
            </FlexBox>

        </>
    );
};

export default UserAccordion;      