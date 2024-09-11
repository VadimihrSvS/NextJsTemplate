import React from 'react';
import Navbar from './Navbar';
import Header from './Header'
import Main from './Main';
import DailyReport from '../components/Content/ReportContent/DailyReport'

const Layout = ({ children }) => {
    return (
        <div className="App">
            <Header />
            <main className='page'>{children}</main>
            <footer className="footer">
                <div className="footer__container">
                </div>
            </footer>
        </div>


    )
}


export default Layout;