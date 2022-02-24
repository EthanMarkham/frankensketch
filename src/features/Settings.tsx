import { API, Auth, graphqlOperation } from "aws-amplify"
import SectionText from "components/general/SectionText"
import { getUser } from "graphql/queries"
import { User } from "models"
import { useEffect, useState } from "react"
import { Button, FlexBox, InputField, Text } from "styles"
import { Icons } from "styles/svg/ui-icons/icons"
import { COLORS } from "utils/DEFS"
import Modal from "./Modal"

function Settings() {
	//TODO - use this value to change user preferences, button is disabled right now
	const [isNSFW, setIsNSFW] = useState(true)

	const [userInfo, setUserInfo] = useState<User>()

	//Control is modal should be shown
	const [isShown, setIsShown] = useState(false)

	//Get user information to be display in settings
	useEffect(() => {
		getUserInfo()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	const getUserInfo = () => {
		try {
			Auth.currentAuthenticatedUser().then(async (data) => {
				const response = (await API.graphql(
					graphqlOperation(getUser, { id: data.username })
				)) as unknown as any
				const userData = response.data.getUser as User
				setUserInfo(userData)
			})
		} catch (error) { }
	}

	return (
		<FlexBox direction="column">
			<FlexBox direction="column" margin="0 1.5rem">
				<FlexBox
					direction="column"
					height="125px"
					justifyContent="space-between"
				>
					<SectionText text="Profile Info" />
					<Text fontWeight="300" fontSize="1.15em">
						Username: {userInfo?.userName}
					</Text>
					<Text fontWeight="300" fontSize="1.15em">
						Email: {userInfo?.id}
					</Text>
					<Text fontWeight="300" fontSize="1.15em">
						Joined: {userInfo?.createdAt?.substring(0, 10)}
					</Text>
				</FlexBox>
				<FlexBox direction="column" margin="1rem 0 0 0" height="140px" justifyContent="space-between">
					<SectionText text="Settings" />
					<FlexBox alignContent="center" justifyContent="space-between">
						<Text fontSize="1.15em">NSFW</Text>
						<InputField height="1.15rem" width="3rem"
							type="checkbox"
							required={true}
							borderColor={COLORS.blue}
							checked={isNSFW}
							onChange={() => setIsNSFW(!isNSFW)}
							disabled
						></InputField>
					</FlexBox>
					<FlexBox alignContent="center" justifyContent="space-between">
						<Text fontSize="1.15em">Security</Text>
						<Button
							padding="0.5rem"
							color={COLORS.white}
							backgroundColor={COLORS.warning}
							width="10rem"
							onClick={() => setIsShown(true)}
							fontSize='1em'
						>
							Change Password
						</Button>
					</FlexBox>
				</FlexBox>
				<FlexBox direction="column" margin="1rem 0 0 0">
					<SectionText text="Other" />
					<Button
						backgroundColor={COLORS.danger}
						padding="0.5rem"
						onClick={() => Auth.signOut()}
					>
						<FlexBox
							direction="row"
							justifyContent="center"
							alignContent="center"
						>
							<img
								src={Icons.Logout}
								width="30"
								height="30"
								alt="logout icon"
							/>
							<Text color={COLORS.white} fontSize="1.5em" margin="0 0 0 0.5rem">
								Logout
							</Text>
						</FlexBox>
					</Button>
				</FlexBox>
			</FlexBox>

			{isShown && <Modal setIsShown={setIsShown} type="changePassword" />}
		</FlexBox>
	)
}

export default Settings
