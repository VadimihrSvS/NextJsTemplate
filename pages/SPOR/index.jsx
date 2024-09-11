import React from "react"
import Navbar from "../../components/Navbar"
import SPORNavbar from "../../components/Navbars/SPORNavbar"
import CurrentWorks from "../../components/Content/SPORContent/CurrentWorks"
import Main from "../../components/Main";



const SPOR = () => {
    return (
        <>
            <Navbar>
                <SPORNavbar />
            </Navbar>
            <Main>
                <CurrentWorks />
            </Main>
        </>
    )
}

export default SPOR
