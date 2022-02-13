import { useState } from "react";
import { DropdownField, InputGroup, InputLabel } from "styles";

const AdminReports = () => {
    const [filter, setFilter] = useState("none")
    return (
        <>
            <InputGroup width="100%">
                <InputLabel>Filter</InputLabel>
                <DropdownField  onChange={(event) => setFilter(event.target.value)}>
                    <option value={"none"}>None</option>
                    <option value={"pending"}>Pending</option>
                    <option value={"canceled"}>Canceled</option>
                    <option value={"revised"}>Revised</option>
                </DropdownField>
            </InputGroup>
        </>
    );
};

export default AdminReports;