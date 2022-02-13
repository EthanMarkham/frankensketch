import { Button, FlexBox, NavDiv, Stiches, Text } from "styles";
import { COLORS } from "utils/DEFS";

function AdminNavBar({setPage, page}:{setPage:any, page:number}) {

    //Admin Navigation Flow
    const OnClickNavButton = (pageNumber: number) => {   
        setPage(pageNumber)
    }

    return (
        <NavDiv width="100%" margin="0 0 .5rem 0" backgroundColor={COLORS.bgPrimary} >
            <Stiches margin=".75rem 0" width="100%" />
            <FlexBox justifyContent="space-around" margin="0 1.5rem">
                <Button backgroundColor={ page === 0 ? COLORS.blue : COLORS.primaryBTN} padding="0.5rem" width="100%" margin="0 2rem 0 0 " onClick={() => OnClickNavButton(0)}>
                    <Text color={COLORS.white}>Reports</Text>
                </Button>

                <Button backgroundColor={ page === 1 ? COLORS.blue : COLORS.primaryBTN} padding="0.5rem" width="100%"  onClick={() => OnClickNavButton(1)}>
                    <Text color={COLORS.white}>Users</Text>
                </Button>
            </FlexBox>
            <Stiches margin=".75rem 0" width="100%" />
        </NavDiv>
    );
}

export default AdminNavBar;
