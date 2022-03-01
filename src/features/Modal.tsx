import ChangePasswordModal from "components/modal/changePasswordModal"
import FriendModal from "components/modal/friendModal"
import GameInfoModal from "components/modal/gameInfoModal"
import ReportModal from "components/modal/reportModal"
import StartGameModal from "components/modal/startGameModal"
import { Game } from "models"
import { Button, FlexBox, Stiches, Text } from "styles"
import { Icons } from "styles/svg/ui-icons/icons"
import { COLORS } from "utils/DEFS"

//ModalTypes: addFriend, startGame, createReport, gameInfo, changePassword
//Add optional game info
const Modal = ({
	setIsShown,
	type,
	isNewGame,
	game
}: {
	setIsShown: any
	type: string
	isNewGame?: boolean
	game?: Game
}) => {

	let showCancel = false
	if (type === 'changePassword' || type === 'createReport') {
		showCancel = true
	}

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
							{showCancel ? (
								<Text fontSize="1.75em" color={COLORS.danger}>Cancel</Text>
							) : (
								<img src={Icons.GoBack} alt="go back icon" />
							)}
						</Button>
						<Stiches margin="-0.25rem 0 .5rem 0" width="100%" />
					</div>
					<FlexBox direction="column" padding="0 1rem">
						{type === "addFriend" && <FriendModal />}
						{type === "createReport" && <ReportModal game={game} />}
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
