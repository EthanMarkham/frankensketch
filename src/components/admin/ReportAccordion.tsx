import { UpdateUserReportInput } from "API";
import { API, graphqlOperation } from "aws-amplify";
import { updateUserReport } from "graphql/mutations";
import { UserReport } from "models";
import { useState } from "react";
import { Button, FlexBox, Text } from "styles";
import { Icons } from "styles/svg/ui-icons/icons";
import { COLORS } from "utils/DEFS";

const ReportAccordion = (reportData: UserReport) => {
    const [isActive, setIsActive] = useState(false)
    const [status, setStatus] = useState(reportData.isReviewed)

    const updateReportStatus = async (reportStatus: string) => {
        let reviewed: boolean = false

        switch (reportStatus) {
            case 'pending':
                reviewed = false
                break;
            case 'reviewed':
                reviewed = true
                break;
        }

        let reportInput: UpdateUserReportInput = {
            id: reportData.id,
            isReviewed: reviewed
        }

        try {
            await API.graphql(graphqlOperation(updateUserReport, { input: reportInput }))
            setStatus(reviewed)
        } catch (error) {

        }
    }

    return (
        <>
            <FlexBox direction="column" backgroundColor={COLORS.black} padding="0.75rem" margin="0.5rem 0" borderRadius="10px" >
                <FlexBox direction="row" justifyContent="space-between" padding="0.5rem" onClick={() => setIsActive(!isActive)}>
                    <FlexBox direction="row" justifyContent="flex-start" width="100%">
                        {status ? <img src={Icons.GreenCheckmark} alt="" /> : <img src={Icons.PendingReport} alt="" />}
                        <Text fontWeight="300" margin="0 0 0 0.25rem" >ID: {reportData.id}</Text>
                    </FlexBox>
                    {isActive ? <Text fontWeight="bold">&#9651;</Text> : <Text>&#9661;</Text>}
                </FlexBox>
                {isActive && (
                    <FlexBox direction="column" margin="0.5rem 0 0 1.65rem" >
                        <Text fontWeight="300">Reported by: {reportData.reportedBy}</Text>
                        <Text fontWeight="300" margin="0.5rem 0">GameID: {reportData.gameID}</Text>
                        <Text fontWeight="300" margin="0.5rem 0">Created At: {reportData.createdAt}</Text>
                        <Text fontWeight="300">Update At: {reportData.updatedAt}</Text>
                        <FlexBox direction="row" justifyContent="flex-end" margin="1rem 0 0 0">
                            <Button margin="0 1rem" background="none" onClick={() => updateReportStatus("pending")}>
                                <img src={Icons.PendingReport} alt="" />
                            </Button>
                            <Button margin="0 1rem" background="none" onClick={() => updateReportStatus("reviewed")}>
                                <img src={Icons.GreenCheckmark} alt="" />
                            </Button>
                        </FlexBox>
                    </FlexBox>
                )}
            </FlexBox>

        </>
    );
};

export default ReportAccordion;      