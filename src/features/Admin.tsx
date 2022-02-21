import Header from "components/header/header";
import AdminNavBar from "components/admin/AdminNavBar";
import { useState } from "react";
import { Button, FlexBox, Stiches, Text } from "styles";
import { Icons } from "styles/svg/ui-icons/icons";
import AdminReports from "../components/admin/AdminReports";
import AdminUsers from "../components/admin/AdminUsers";
import { Auth } from "aws-amplify";
import { COLORS } from "utils/DEFS";

const Admin = () => {
    const [page, setPage] = useState(0)

    return (
        <FlexBox direction="column">
            <Header />
            <AdminNavBar setPage={setPage} page={page} />
            <FlexBox justifyContent="space-between" margin="0 1.5rem">
                {page === 0 ? <Text fontSize="1.5em">Reports</Text> : <Text fontSize="1.5em">Users</Text>}
                <FlexBox justifyContent="flex-end">
                    <FlexBox alignContent="center" >
                        <Text color={COLORS.white} fontSize="1em" fontWeight="300">Logout</Text>
                    </FlexBox>
                    <Button margin="0 0 0 0.5rem" background="none" onClick={() => Auth.signOut()}>
                        <img src={Icons.Logout} alt="" height='30' width='30'/>
                    </Button>
                    
                </FlexBox>
            </FlexBox>
            <Stiches margin=" 0.5rem 0 0.5rem 0" width="100%" />
            <FlexBox margin="0 1.5rem" direction="column">
            {page === 0 && <AdminReports/>}
            {page === 1 && <AdminUsers/>}
            </FlexBox>
            
        </FlexBox>
    );
};

export default Admin;