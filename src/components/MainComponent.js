import React,{useState} from "react";
import {STAFFS, DEPARTMENTS} from '../shared/staffs';
import Header from "./HeaderComponent";
import {Route, Routes,Navigate, useParams} from 'react-router-dom'
import Home from "./HomeComponent";
import Footer from "./FooterComponent";
import StaffInfo from "./StaffInfoComponent";
import Department from "./DepartComponent";
import Salary from "./SalaryComponent";

function Main() {
    const [staffs, setStaffs] = useState(STAFFS);
    const [departs, setDeparts] = useState(DEPARTMENTS);

    const HomePage = () => {
        return(
            <Home staffs={staffs} departs={departs} 
                setStaffs={setStaffs}
                />
        )
    }
    
    const StaffWithId = () => {

        let params = useParams();


        return(
            <StaffInfo staff = {staffs.filter((staff) => staff.id === parseInt(params.staffId,10))[0]} />
        )
    }

    return(
        <div>
            <Header staffs={staffs} />
            <Routes>
                <Route exact path="/staff" element={<HomePage />} />
                <Route exact path="/staff/:staffId" element={<StaffWithId/>} />
                <Route exact path="*" element = {<Navigate to='/staff' />} />
                <Route exact path="/depart" element={<Department departs = {departs} />} />
                <Route exact path="/salary" element={<Salary staffs={staffs} />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default Main;