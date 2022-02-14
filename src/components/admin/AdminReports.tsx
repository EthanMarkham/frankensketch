import { useState } from "react";
import { DropdownField, InputGroup, InputLabel } from "styles";
import ReportAccordion from "./ReportAccordion";

const AdminReports = () => {
    const [filter, setFilter] = useState("none")
    return (
        <>
            <InputGroup width="100%">
                <InputLabel>Filter</InputLabel>
                <DropdownField  onChange={(event) => setFilter(event.target.value)}>
                    <option value={"none"}>None</option>
                    <option value={"pending"}>Pending</option>
                    <option value={"cancelled"}>Cancelled</option>
                    <option value={"reviewed"}>Reviewed</option>
                </DropdownField>
            </InputGroup>

            {/* Map reports */}
            <ReportAccordion/>
        </>
    );
};

export default AdminReports;