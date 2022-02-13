import { useState } from "react";
import { Button, FlexBox, InputField, InputGroup, InputLabel } from "styles";
import { Icons } from "styles/svg/ui-icons/icons";
import UserAccordion from "./UserAccordion";

const AdminUsers = () => {
    //TODO - Add search functionality
    const [searchField, setSearchField] = useState("")

    return (
        <>
            <InputGroup width="100%">
                <InputLabel>Search</InputLabel>
                <FlexBox direction="row" justifyContent="flex-start" margin="0.5rem 0">
                    <InputField
                        onChange={(event) => setSearchField(event.target.value)}
                        type="search"
                        placeholder="Username"
                    ></InputField>
                    <Button margin="0 0 0 1rem" onClick={() => {alert("Search username()")}} background="none"><img src={Icons.Search} width="30" alt=""/></Button>
                </FlexBox>
            </InputGroup>
            {/* Map Users */}
            <UserAccordion/>
        </>
    );
};

export default AdminUsers;