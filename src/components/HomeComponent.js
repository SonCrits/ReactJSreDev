import React, {useState} from 'react';
import { Card, CardBody, CardText, CardTitle, Input, Col, Button, Label } from 'reactstrap';
import {STAFFS} from '../shared/staffs';
import dateFormat from 'dateformat'; 

function Home(){
    const [staffs, setStaffs] = useState(STAFFS);
    const [selectStaff, setSelectStaff] = useState(null);
    const [numOfCol,setNumOfCol] = useState('3');

    const onSelectStaff = (staff) => {
        setSelectStaff(staff)
    }

    const ColChange = (value) => {
        setNumOfCol(value)
    }

    

  
    const RenderStaff = (staff) => {
        if(staff != null) {
            return(
                <div className='col-12 col-lg-3 col-sm-6 border border-success m-3 p-3 my-3'>
                    <Card>
                        <CardTitle className='p-3'><h5>Họ và tên : {staff.name}</h5></CardTitle>
                        <hr />
                        <CardBody>
                            <CardText>Ngày sinh : {dateFormat(staff.doB, "dd/mm/yyyy")}</CardText>
                            <CardText>Ngày vào công ty : {dateFormat(staff.startDate, "dd/mm/yyyy")}</CardText>
                            <CardText>Phòng Ban : {staff.department.name}</CardText>
                            <CardText>Số ngày nghỉ còn lại : {staff.annualLeave}</CardText>
                            <CardText>Số ngày đã làm thêm : {staff.overTime}</CardText>
                        </CardBody>
                    </Card>
                </div> 
            )
        } else return <div></div>
    }

    const StaffList = staffs.map(staff => {
        return(
            <div className={`col-sm-6 col-12 border border-success m-3 p-3 my-3
            col-lg-${numOfCol}`}>
                <Card key={staff.id}
                    onClick={() => onSelectStaff(staff)}>
                    <CardTitle>{staff.name}</CardTitle>
                </Card>
            </div>
        )
    })

    return(
        <div className='container'>
            <div className='row my-3 p-1'>
                <Label md={2}>Chọn số cột hiển thị</Label>
                <Col md={2} >
                <Input type='select' id='selectCol' name='selectCol'
                    defaultValue={3}
                    value={numOfCol}
                    onSelect={ColChange}
                    onChange={e => ColChange(e.target.value)}>
                    <option value={5}>2</option>
                    <option value={3}>3</option>
                    <option value={2}>5</option>
                </Input>
                </Col>
            </div>
            <div className='row'>
                {StaffList}
            </div>
            <div className='row'>
                {RenderStaff(selectStaff)}
            </div>
        </div>
    )
}

export default Home;