import ChangePasswordModal from "components/modal/changePasswordModal"
import FriendModal from "components/modal/friendModal"
import HelpModal from "components/modal/ helpModal"
import ReportModal from "components/modal/reportModal"
import StartGameModal from "components/modal/startGameModal"
import { Game } from "models"
import { Button, FlexBox, Stiches, Text } from "styles"
import { Icons } from "styles/svg/ui-icons/icons"
import { COLORS } from "utils/DEFS"

//ModalTypes: addFriend, startGame, createReport, help, changePassword
//Add optional game info
const Modal = ({
	setIsShown,
	type,
	isNewGame,
	game,
	friends
}: {
	setIsShown: any
	type: string
	isNewGame?: boolean
	game?: Game
	friends?: string[]
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
								<Text fontSize="1.75em" color={COLORS.white}>Cancel</Text>
							) : (
								<img src={Icons.GoBack} alt="go back icon" />
							)}
						</Button>
						<Stiches margin="-0.25rem 0 .5rem 0" width="100%" />
					</div>
					<FlexBox direction="column" padding="0 1rem" css={{ overflowY: 'scroll' }} height='90%'>
						{type === "addFriend" && <FriendModal friends={friends} setIsShown={setIsShown} />}
						{type === "createReport" && <ReportModal game={game} />}
						{type === "help" && <HelpModal />}
						{type === "startGame" && <StartGameModal isNewGame={isNewGame} />}
						{type === "changePassword" && <ChangePasswordModal />}
					</FlexBox>
				</div>
			</div>
		</>
	)
}

export default Modal
