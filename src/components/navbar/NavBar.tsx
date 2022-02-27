import { useEffect } from "react";
import { useStore } from "store";
import { Button, Div, FlexBox, NavDiv, Stiches, Text } from "styles";
import { Icons } from "styles/svg/ui-icons/icons";
import { COLORS } from "utils/DEFS";

//PROBS MOVE TO FEATURE
function NavBar() {
    //Navigation Flow
    const changePage = useStore((state) => state.actions.setPage);
    const user = useStore((state) => state.userData);
    const OnClickNavButton = (pageNumber: number) => {
        changePage(pageNumber);
    };

    useEffect(() => {
        console.log(user);
    }, [user]);
    return (
        <Div
            height="20%"
            style={{
                maxHeight: "122px",
            }}
            width="100%"
            backgroundColor={COLORS.bgPrimary}
        >
            <Stiches margin=".75rem 0" width="100%" />
            <FlexBox justifyContent="space-between" margin="0 1.5rem">
                <Button
                    background="none"
                    borderRadius="0"
                    onClick={() => OnClickNavButton(3)}
                >
                    <img src={Icons.People} alt="Friends icon" />
                    <Text color={COLORS.white}>Friends</Text>
                </Button>

                <Button
                    background="none"
                    borderRadius="0"
                    onClick={() => OnClickNavButton(5)}
                >
                    <img src={Icons.User} alt="User profile icon" />
                    <Text color={COLORS.white}>Profile</Text>
                </Button>

                <Button
                    background="none"
                    borderRadius="0"
                    onClick={() => OnClickNavButton(1)}
                >
                    <img src={Icons.Home} alt="Home icon" />
                    <Text color={COLORS.white}>Home</Text>
                </Button>

                <Button
                    background="none"
                    borderRadius="0"
                    onClick={() => OnClickNavButton(6)}
                >
                    <img src={Icons.Flipboard} alt="Community icon" />
                    <Text color={COLORS.white}>Community</Text>
                </Button>

                <Button
                    background="none"
                    borderRadius="0"
                    onClick={() => OnClickNavButton(4)}
                >
                    <img src={Icons.Settings} alt="Settings icon" />
                    <Text color={COLORS.white}>Settings</Text>
                </Button>
            </FlexBox>
            <Stiches margin=".75rem 0 0 0" width="100%" />
        </Div>
    );
}

export default NavBar;
