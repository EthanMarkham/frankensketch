import { useState } from "react";
import { Button, FlexBox, Text } from "styles";
import { COLORS } from "utils/DEFS";

//TODO - add form fields and get user data
const UserAccordion = () => {
    const [isActive, setIsActive] = useState(false)

    
    const saveChanges = () => {
        //TODO - add funcionality
        alert("Save Changes()")
    }

    const cancelChanges = () => {
       //TODO - add funcionality 
       alert("Cancel Changes()")
    }

    return (
        <>
            <FlexBox direction="column" backgroundColor={COLORS.black} padding="0.75rem" borderRadius="10px">
                <FlexBox direction="row" justifyContent="space-between" onClick={() => setIsActive(!isActive)}>
                    <Text>username</Text>
                    {isActive ? <Text>&#9651;</Text> : <Text>&#9661;</Text>}
                </FlexBox>
                {isActive && (
                    <FlexBox direction="column" margin="0.5rem 0 0 0" >
                         <Text fontWeight="300">Replace with actual user info and input fields</Text>
                         <FlexBox direction="row" justifyContent="flex-end" margin="0.75rem 0 0 0">
                            <Button margin="0 1rem" backgroundColor={COLORS.danger} padding=".25rem" width="4rem" onClick={cancelChanges}>
                                <Text color={COLORS.white}>cancel</Text>
                            </Button>
                            <Button backgroundColor={COLORS.blue} padding=".25rem" width="4rem" onClick={saveChanges}>
                                <Text color={COLORS.white}>save</Text>
                            </Button>
                         </FlexBox>
                    </FlexBox>
                )}
            </FlexBox>

        </>
    );
};

export default UserAccordion;      