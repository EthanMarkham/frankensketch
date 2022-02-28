import { API, graphqlOperation } from "aws-amplify";
import { createUserReport } from "graphql/mutations";
import { Game } from "models";
import React, { useState } from "react";
import { Button, FlexBox, Text } from "styles";
import { COLORS } from "utils/DEFS";
import { CreateUserReportInput } from "API";
import { useStore } from "store";

const ReportModal = ({ game }: { game?: Game }) => {
    const currentUser = useStore((state) => state.userData);
    const [error, setError] = useState(false)
    const [feedback, setFeedback] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)

    //Create a report
    const submitReport = async () => {
        try {
            if (game) {
                let reportInput: CreateUserReportInput = {
                    gameID: game.id,
                    reportedBy: currentUser?.email,
                    isReviewed: false
                }

                await API.graphql(graphqlOperation(createUserReport, { input: reportInput }))
            }
            setError(false)
            setFeedback('Your report has been submitted!, thank you for making FrankenSketch a better place. Our admins and moderators will look into this. Now, click Cancel to close this modal.')
            setIsSubmitted(true)
        } catch (error) {
            setError(true)
            setFeedback(`Failed to process your report at this moment, please try again in another moment. Please, click Cancel to close this modal.`)
            setIsSubmitted(false)
        }

    }

    return (
        <FlexBox direction="column" padding="0 1rem">
            <Text fontSize="2em" margin="0 0 1rem 0">Report</Text>

            <Text fontSize="1.5em" fontWeight="300">You are about to report this drawing. Make sure you want to complete this action and keep in mind that an admin or moderator may email you about this report.</Text>

            <FlexBox vhCenter={true} margin='4rem 0'>
                <Button disabled={isSubmitted} backgroundColor={COLORS.success} width="20rem" height="3rem" fontSize="1.5em" color={COLORS.white} onClick={() => submitReport()}>Submit Report</Button>
            </FlexBox>

            {feedback && <Text width="100%" padding="1rem" fontWeight="300" backgroundColor={error ? COLORS.danger : COLORS.success}>{feedback}</Text>}

        </FlexBox>
    );
};

export default ReportModal;