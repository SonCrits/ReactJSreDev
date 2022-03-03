import React from "react";
import {
    Card, CardTitle, CardBody, CardImg,
    Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from "react-router-dom";
import deptName from "../Staff/DepartmentName";
import StaffList from "../Staff/staffList";

function DepartmentStaff ({staffs, departs}) {
    const deptArr = departs.filter(depart => depart.id === staffs[0].departmentId);
    const deptReName = deptArr[0].id;
    return(
        <div className="container my-5">
            <Breadcrumb>
                <BreadcrumbItem>
                    <Link className="text-decoration-none" to='/staff'>Home</Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <Link className="text-decoration-none" to='/depart'>Phòng Ban</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>{deptName(deptName)}</BreadcrumbItem>
            </Breadcrumb>
            <hr />
            <div className="row p-3">
                <h4 className="mb-3 text-success fw-bold">
                    {deptName(deptReName)}
                    <br /> <br />
                    Số lượng: {staffs.length}
                </h4>
                <StaffList departFilter={staffs} />
            </div>
        </div>
    )
};

export default DepartmentStaff;