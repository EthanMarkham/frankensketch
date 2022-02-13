import Header from "components/header/header";
import AdminNavBar from "components/admin/AdminNavBar";
import { useState } from "react";
import { useStore } from "store";
import { Button, FlexBox, Stiches } from "styles";
import { Icons } from "styles/svg/ui-icons/icons";
import AdminReports from "../components/admin/AdminReports";
import AdminUsers from "../components/admin/AdminUsers";

const Admin = () => {

    const changePage = useStore((state) => state.actions.setPage);
    const OnClickProfile = () => {
        changePage(5);
    };


    const [page, setPage] = useState(0)

    return (
        <FlexBox direction="column">
            <Header />

            <FlexBox justifyContent="flex-end" margin="0 1.5rem">
                <Button
                    background="none"
                    borderRadius="0"
                    onClick={OnClickProfile}
                >
                    <img src={Icons.User} alt="User profile icon" />
                </Button>
            </FlexBox>
            <Stiches margin=" 0.5rem 0 0 0" width="100%" />
            <FlexBox margin="0 1.5rem" direction="column">
            {page === 0 && <AdminReports/>}
            {page === 1 && <AdminUsers/>}
            </FlexBox>
            <AdminNavBar setPage={setPage} />
        </FlexBox>
    );
};

export default Admin;