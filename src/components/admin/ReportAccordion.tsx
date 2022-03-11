import { UpdateUserReportInput, UserReport } from "API";
import { API, graphqlOperation } from "aws-amplify";
import { updateUserReport } from "graphql/mutations";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button, FlexBox, Text } from "styles";
import { Icons } from "styles/svg/ui-icons/icons";
import { COLORS } from "utils/DEFS";

const ReportAccordion = (reportData: UserReport) => {
    const [isActive, setIsActive] = useState(false)
    const [status, setStatus] = useState(false)

    useEffect(() => {
        if(reportData.isReviewed !== undefined && reportData.isReviewed !== null)
            setStatus(reportData.isReviewed)
            
    }, [reportData])
    

    const updateReportStatus = async (reportStatus: boolean) => {
        let reportInput: UpdateUserReportInput = {
            id: reportData.id,
            isReviewed: reportStatus,
            _version: reportData._version
        }

        try {
            await API.graphql(graphqlOperation(updateUserReport, { input: reportInput }))
            setStatus(reportStatus)
            toast.success(`The status of this report has changed to ${reportStatus ? 'reviewed.' : 'pending.'}`)
        } catch (error) {
            toast.error(`Failed to update the status of report #${reportData.id}.`)
        }
    }

    return (
        <>
            <FlexBox direction="column" backgroundColor={COLORS.black} padding="0.75rem" margin="0.5rem 0" borderRadius="10px" >
                <FlexBox direction="row" justifyContent="space-between" padding="0.5rem" onClick={() => setIsActive(!isActive)}>
                    <FlexBox direction="row" justifyContent="flex-start" width="100%">
                        <img src={status ? Icons.GreenCheckmark : Icons.PendingReport} alt="Report status icon" />
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
                            <Button margin="0 1rem" background="none" onClick={() => updateReportStatus(false)}>
                                <img src={Icons.PendingReport} alt="" />
                            </Button>
                            <Button margin="0 1rem" background="none" onClick={() => updateReportStatus(true)}>
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