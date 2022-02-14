import Header from "components/header/header";
import AdminNavBar from "components/admin/AdminNavBar";
import { useState } from "react";
import { useStore } from "store";
import { Button, FlexBox, Stiches, Text } from "styles";
import { Icons } from "styles/svg/ui-icons/icons";
import AdminReports from "../components/admin/AdminReports";
import AdminUsers from "../components/admin/AdminUsers";
import { COLORS } from "utils/DEFS";

const Admin = () => {

    const changePage = useStore((state) => state.actions.setPage);
    const OnClickProfile = () => {
        changePage(5);
    };


    const [page, setPage] = useState(0)

    return (
        <FlexBox direction="column">
            <Header />

            <FlexBox justifyContent="space-between" margin="0 1.5rem">
                {page === 0 ? <Text fontSize="1.5em">Reports</Text> : <Text fontSize="1.5em">Users</Text>}
                <Button
                    background="none"
                    borderRadius="0"
                    onClick={OnClickProfile}
                >
                    <img src={Icons.User} alt="User profile icon" />
                    <Text color={COLORS.white}>Profile</Text>
                </Button>
            </FlexBox>
            <Stiches margin=" 0.5rem 0 0 0" width="100%" />
            <FlexBox margin="0 1.5rem" direction="column">
            {page === 0 && <AdminReports/>}
            {page === 1 && <AdminUsers/>}
            </FlexBox>
            <AdminNavBar setPage={setPage} page={page} />
        </FlexBox>
    );
};

export default Admin;