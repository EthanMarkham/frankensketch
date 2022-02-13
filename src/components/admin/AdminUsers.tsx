import { useState } from "react";
import { InputField, InputGroup, InputLabel } from "styles";

const AdminUsers = () => {
    const [searchField, setSearchField] = useState("")

    return (
        <>
            <InputGroup width="100%">
                <InputLabel>Search</InputLabel>
                <InputField
                    onChange={(event) => setSearchField(event.target.value)}
                    type="search"
                    placeholder="Username"
                ></InputField>
            </InputGroup>
        </>
    );
};

export default AdminUsers;