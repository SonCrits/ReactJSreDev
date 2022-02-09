import React,{useState} from "react";
import { Card, CardImg , CardText, CardTitle, CardBody,
    Breadcrumb, BreadcrumbItemProps, BreadcrumbItem  } from "reactstrap";
import dateFormat from 'dateformat';
import {Link} from 'react-router-dom';

function StaffInfo(props) {

    const RenderImage = ({staff}) =>{
        if(staff != null) {
            return(
                <div className="col-12 col-lg-3 col-sm-4">
                    <Card>
                        <CardImg src={staff.image} alt={staff.name} />
                    </Card>
                </div>
            )
        } else return <div></div>
    }

    const RenderInfo = ({staff}) => {
        if(staff != null) {
            return(
                <div className="col-12 col-lg-3 col-sm-4">
                    <Card>
                        <CardTitle><h5>Họ và tên : {staff.name}</h5></CardTitle>
                        <hr />
                        <CardBody>
                            <CardText>Ngày sinh : {dateFormat(staff.doB,"dd/mm/yyyy")}</CardText>
                            <CardText>Ngày vào công ty : {dateFormat(staff.startDate,"dd/mm/yyyy")}</CardText>
                            <CardText>Phòng ban : {staff.department.name}</CardText>
                            <CardText>Số ngày nghỉ còn lại : {staff.annualLeave}</CardText>
                            <CardText>Số ngày đã làm thêm : {staff.overTime}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        } else return <div></div>
    }

    if(props.staff != null) {
        return(
            <div className="container">
                <div className="row m-3">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/staff'>Nhân Viên</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="row m-3">
                    <RenderImage staff={props.staff} />
                    <RenderInfo staff={props.staff} />
                </div>
            </div>
        )
    } else return <div></div>
}

export default StaffInfo;