import { Auth } from "aws-amplify"
import React, { useState } from "react"
import {
	Button,
	FlexBox,
	InputField,
	InputGroup,
	InputLabel,
	InputTextHelper,
	Text,
} from "styles"
import { COLORS } from "utils/DEFS"

const ChangePasswordModal = () => {
	const [isSuccess, setIsSuccess] = useState(false)
	const [oldPassword, setOldPassword] = useState("")
	const [newPassword, setNewPassword] = useState("")
	const [errorMessages, setErrorMessages] = useState<{
		e1: string
		e2: string
		e3: string
	}>({ e1: "", e2: "", e3: "" })

	//Change user password
	const changePassword = () => {
		//Verify fields are completed or throw error
		if (oldPassword !== "" && newPassword !== "") {
			Auth.currentAuthenticatedUser()
				.then((user) => {
					//Try to change password for current user
					return Auth.changePassword(user, oldPassword, newPassword)
				})
				.then((data) => {
					//Clear fields and notify user of change
					setErrorMessages({
						e3: "",
						e2: "",
						e1: "Password has been changed!"
					})
					setNewPassword("")
					setOldPassword("")
					setIsSuccess(true)
				})
				.catch((err) => {
					setNewPassword("")
					setOldPassword("")
					setIsSuccess(false)
					setErrorMessages({
						...errorMessages,
						e3: "Re-enter old password",
						e2: "Re-enter new password",
						e1: "Unable to change password, try again."
					})
				})
		}
	}

	return (
		<FlexBox direction="column" padding="0 1rem">
			<Text fontSize="2em" padding="0.5rem 0" margin="0 0 1.5rem 0"> Change Password</Text>

			<form>
				<InputGroup width="100%">
					<InputLabel fontSize="1.5em">Old password</InputLabel>
					<InputField
						onChange={(event) => setOldPassword(event.target.value)}
						type="password"
						required={true}
						value={oldPassword}
					></InputField>
					<InputTextHelper>{errorMessages.e3}</InputTextHelper>
				</InputGroup>

				<InputGroup width="100%">
					<InputLabel fontSize="1.5em">New password</InputLabel>
					<InputField
						onChange={(event) => setNewPassword(event.target.value)}
						type="password"
						required={true}
						value={newPassword}
					></InputField>
					<InputTextHelper>{errorMessages.e2}</InputTextHelper>
				</InputGroup>

				<FlexBox vhCenter={true} margin='2rem 0'>
					<Button
						backgroundColor={COLORS.success}
						width="10rem"
						height="2.5rem"
						fontSize="1.5rem"
						color={COLORS.white}
						onClick={() => changePassword()}
					>
						Confirm
					</Button>
				</FlexBox>
				<FlexBox vhCenter={true}>
					<Text fontWeight="300" backgroundColor={isSuccess ? COLORS.success : COLORS.danger}>{errorMessages.e1}</Text>
				</FlexBox>
			</form>
		</FlexBox>
	)
}

export default ChangePasswordModal
