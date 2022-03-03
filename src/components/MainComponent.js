import React,{Component, useEffect, useState} from "react";
import Header from "./Layout/HeaderComponent";
import {Route, Routes,Navigate, useParams,} from 'react-router-dom'
import Home from "./Staff/HomeComponent";
import Footer from "./Layout/FooterComponent";
// import StaffInfo from "./Staff/StaffInfoComponent";
import Department from "./Depart/DepartComponent";
import Salary from "./Salary/SalaryComponent";
import {connect} from 'react-redux';
import { thunk_fetchStaff, thunk_fetchDepart, thunk_fetchSalary } from "../redux/ActionCreators";

const mapStateToProps = (state) => {
    return {
        staffs : state.staffs,
        departs : state.departs,
        salary: state.salary
    }
}

const mapDispatchToProps = (dispatch) => ({
    thunk_fetchStaff: () => {dispatch(thunk_fetchStaff())},
    thunk_fetchDepart: () => {dispatch(thunk_fetchDepart())},
    thunk_fetchSalary: () => {dispatch(thunk_fetchSalary())}
})

class Main extends Component {
    
    componentDidMount() {
        this.props.thunk_fetchStaff();
        this.props.thunk_fetchDepart();
        this.props.thunk_fetchSalary();
    }
    
    render() {
        const HomePage = () => {
            return(
                <Home staffs={this.props.staffs.staffs} departs={this.props.departs.departs} 
                    />
            )
        }
    
        // const StaffWithId = ({match}) => {


        //     console.log(this.props.staffs.staffs)
            
        //     return(
        //         <StaffInfo staff = {this.props.staffs.staffs.filter((staff) => staff.id === parseInt(match.params.staffId,10))[0]} />
        //     )
        // }

        return(
            <div>
                <Header/>
                <Routes>
                    <Route exact path="/staff" element={<HomePage />} />
                    {/* <Route exact path="/staff/:staffId" element={<StaffWithId/>} /> */}
                    <Route exact path="*" element = {<Navigate to='/staff' />} />
                    <Route exact path="/depart" element={<Department departs = {this.props.departs.departs} />} />
                    <Route exact path="/salary" element={<Salary staffs={this.props.salary.salary} />} />
                </Routes>
                <Footer />
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main) ;