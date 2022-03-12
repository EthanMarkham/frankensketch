import { useStore } from "store";
import { Button, Div, FlexBox, Stiches, Text } from "styles";
import { Icons } from "styles/svg/ui-icons/icons";
import { COLORS } from "utils/DEFS";

//PROBS MOVE TO FEATURE
function NavBar() {
    //Navigation Flow
    const changePage = useStore((state) => state.actions.setPage);
    const joinGame = useStore((state) => state.actions.joinGame);

    const user = useStore((state) => state.userData);
    const OnClickNavButton = (pageNumber: number) => {
        changePage(pageNumber);
    };
    return (
        <Div
            height="115px"
            width="100%"
            backgroundColor={COLORS.bgPrimary}
        >
            <Stiches margin=".75rem 0" width="100%" />
            <FlexBox
                justifyContent="space-between"
                alignContent="center"
                margin="0 1.5rem"
            >
                {user?.groups?.includes("Admin") && (
                    <Button
                        background="none"
                        borderRadius="0"
                        onClick={() => OnClickNavButton(7)}
                    >
                        <img src={Icons.Admin} alt="Admin icon" />
                        <Text color={COLORS.white}>Admin</Text>
                    </Button>
                )}

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
                    onClick={() => OnClickNavButton(1)}
                >
                    <img src={Icons.Home} alt="Home icon" />
                    <Text color={COLORS.white}>Home</Text>
                </Button>

                <Button
                    background="none"
                    borderRadius="0"
                    onClick={(_) => joinGame()}
                >
                    <img src={Icons.Pencil} alt="Draw icon" />
                    <Text color={COLORS.white}>Draw</Text>
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
