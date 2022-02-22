import ChangePasswordModal from "components/modal/changePasswordModal"
import FriendModal from "components/modal/friendModal"
import GameInfoModal from "components/modal/gameInfoModal"
import ReportModal from "components/modal/reportModal"
import StartGameModal from "components/modal/startGameModal"
import { Button, FlexBox, Stiches, Text } from "styles"
import { Icons } from "styles/svg/ui-icons/icons"
import { COLORS } from "utils/DEFS"

//ModalTypes: addFriend, startGame, createReport, gameInfo, changePassword
//Add optional game info
const Modal = ({
	setIsShown,
	type,
	isNewGame,
}: {
	setIsShown: any
	type: string
	isNewGame?: boolean
}) => {
	return (
		<>
			<div className="darkBG" />
			<div className="centered">
				<div className="modal">
					<div className="modalHeader">
						<Button
							margin="0.5rem"
							background="none"
							onClick={() => setIsShown(false)}
						>
							{type === "changePassword" ? (
								<Text fontSize="1.5em" color={COLORS.white}>Cancel</Text>
							) : (
								<img src={Icons.GoBack} alt="go back icon" />
							)}
						</Button>
						<Stiches margin="-0.25rem 0 .5rem 0" width="100%" />
					</div>
					<FlexBox direction="column" padding="0 1rem">
						{type === "addFriend" && <FriendModal />}
						{type === "createReport" && <ReportModal />}
						{type === "gameInfo" && <GameInfoModal />}
						{type === "startGame" && <StartGameModal isNewGame={isNewGame} />}
						{type === "changePassword" && <ChangePasswordModal />}
					</FlexBox>
				</div>
			</div>
		</>
	)
}

export default Modal
