import React from "react"
import Main from "../../../components/Main";
import OperationalSummary from "../../../components/Content/ReportContent/OperationalSummary";
import Navbar from "../../../components/Navbar"
import ReportsNavbar from "../../../components/Navbars/ReportsNavbar"


const dailyReport = () => {
    return (
        <>
            <Navbar>
                <ReportsNavbar />
            </Navbar>
            <Main>
                <OperationalSummary />
            </Main>
        </>
    )
}

export default dailyReport
