import React,{Component, useEffect, useState} from "react";
import Header from "./Layout/HeaderComponent";
import {Route, Routes,Navigate, useParams,} from 'react-router-dom'
import Home from "./Staff/HomeComponent";
import Footer from "./Layout/FooterComponent";
import DepartmentStaff from "./Depart/Depart_staff";
import Department from "./Depart/DepartComponent";
import Salary from "./Salary/SalaryComponent";
import {connect} from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { thunk_fetchStaff, thunk_fetchDepart, thunk_fetchSalary, thunk_postStaff, thunk_delStaff, thunk_patchStaff } from "../redux/ActionCreators";

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
    thunk_fetchSalary: () => {dispatch(thunk_fetchSalary())},
    postStaff: (name, doB, salaryScale, startDate, departmentId, annualLeave, overTime) =>
        dispatch(thunk_postStaff(name, doB, salaryScale, startDate, departmentId, annualLeave, overTime)),
    fetchDelStaffs: (id) => {dispatch(thunk_delStaff(id))},
    updateStaff: (id, name, doB, salaryScale, startDate, departmentId, annualLeave, overTime) =>
        dispatch(thunk_patchStaff(id, name, doB, salaryScale, startDate, departmentId, annualLeave, overTime)),
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
                <Home 
                    staffs={this.props.staffs.staffs} 
                    departs={this.props.departs.departs}
                    postStaff={this.props.postStaff}
                    fetchDelStaffs={this.props.fetchDelStaffs}
                    updateStaff={this.props.updateStaff}
                    />                   
            ) 
        }
        
        const DepartAndStaff = () => {
            const { dept } = useParams();
            
            if(dept !== null) {
                return(
                    <DepartmentStaff
                        staffs={this.props.staffs.staffs.filter(staff => staff.departmentId === dept)}
                        departs={this.props.departs.departs}
                        fetchDelStaffs={this.props.fetchDelStaffs}
                        updateStaff={this.props.updateStaff}
                    />
                )
                
            }
            
            return(
                <Home
                    staffs={this.props.staffs.staffs}
                    departs={this.props.depparts.departs} 
                    fetchDelStaffs={this.props.fetchDelStaffs}  
                    updateStaff={this.props.updateStaff}              
                />
            )
            
        }


        return(
            <div>
                <Header/>
                <TransitionGroup>
                    <CSSTransition  classNames='page' timeout={300}>
                        <Routes >
                            <Route exact path="/staff" element={<HomePage />} />
                            <Route exact path="/depart/:dept" element={<DepartAndStaff />} />
                            <Route exact path="*" element = {<Navigate to='/staff' />} />
                            <Route exact path="/depart" element={<Department departs = {this.props.departs.departs} />} />
                            <Route exact path="/salary" element={<Salary staffs={this.props.salary.salary} />} />
                        </Routes>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main) ;