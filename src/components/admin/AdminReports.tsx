import { UserReport } from "models";
import { API, graphqlOperation } from "aws-amplify";
import { listUserReports } from "graphql/queries";
import { useEffect, useState } from "react";
import { DropdownField, FlexBox, InputGroup, InputLabel, Text } from "styles";
import { COLORS } from "utils/DEFS";
import ReportAccordion from "./ReportAccordion";

const AdminReports = () => {
    const [filter, setFilter] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [reportsList, setReportsList] = useState<Array<UserReport>>(new Array<UserReport>());

    //Get Reports
    useEffect(() => {
        getReports()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filter])
    const getReports = async () => {
        try {
            let response
            let data: UserReport[]
            switch (filter) {
                case "pending":
                    response = await (API.graphql(graphqlOperation(listUserReports, {
                        filter: {
                            isReviewed: {
                                eq: false
                            }
                        }
                    }))) as unknown as any
                    data = response.data.listUserReports.items
                    setReportsList(data)
                    break;
                case "reviewed":
                    response = await (API.graphql(graphqlOperation(listUserReports, {
                        filter: {
                            isReviewed: {
                                eq: true
                            }
                        }
                    }))) as unknown as any
                    data = response.data.listUserReports.items
                    setReportsList(data)
                    break;
                default:
                    response = await (API.graphql(graphqlOperation(listUserReports))) as unknown as any
                    data = response.data.listUserReports.items
                    setReportsList(data)
                    break;
            } 
        } catch (error) {
        }
    }

    //Update error messages
    useEffect(() => {
        switch (reportsList.length) {
            case 0:
                setErrorMessage("0 Results Found.")
                break;
            default:
                setErrorMessage("")
                break;
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reportsList])

    return (
        <>
            <InputGroup width="100%">
                <InputLabel>Filter</InputLabel>
                <DropdownField  onChange={(event) => setFilter(event.target.value)} value={filter}>
                    <option value={""}>None</option>
                    <option value={"pending"}>Pending</option>
                    <option value={"reviewed"}>Reviewed</option>
                </DropdownField>
            </InputGroup>
            {errorMessage && (
                <FlexBox justifyContent="center">
                    <Text color={COLORS.danger} fontSize='2em'>{errorMessage}</Text>
                </FlexBox>
            )}

            {reportsList.map((value, i) => {
                return (
                    <ReportAccordion key={i} {...value}/>
                )
            })}
        </>
    );
};

export default AdminReports;