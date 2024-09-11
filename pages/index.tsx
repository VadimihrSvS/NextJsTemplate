import React from "react"
import { GetStaticProps } from "next"
import prisma from '../lib/prisma';
import Main from "../components/Main";
import Navbar from "../components/Navbar"
import ReportsNavbar from "../components/Navbars/ReportsNavbar"
import DailyReport from "../components/Content/ReportContent/DailyReport";



const Start = () => {
  return (
    <>
      <Navbar>
        <ReportsNavbar />
      </Navbar>
      <Main>
        <DailyReport />
      </Main>
    </>
  )
}

export default Start
