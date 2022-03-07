import AdminNavBar from "components/admin/AdminNavBar";
import { useState } from "react";
import { FlexBox, Stiches } from "styles";
import AdminReports from "../components/admin/AdminReports";
import AdminUsers from "../components/admin/AdminUsers";

const Admin = () => {
    const [page, setPage] = useState(0)

    return (
        <FlexBox direction="column">
            <AdminNavBar setPage={setPage} page={page} />
            <Stiches margin=" 0.5rem 0 0.5rem 0" width="100%" />
            <FlexBox margin="0 1.5rem" direction="column">
                {page === 0 && <AdminReports />}
                {page === 1 && <AdminUsers />}
            </FlexBox>
        </FlexBox>
    );
};

export default Admin;