import React, {useState} from 'react';
import { Card, CardBody, CardText, CardTitle, Input, Col, Button, Label } from 'reactstrap';
import {STAFFS} from '../shared/staffs';
import dateFormat from 'dateformat'; 

function Home(){

    //state cho sự kiện map mảng staff , chọn staff và chỉnh cột theo ý muốn
    const [staffs,setStaffs] = useState(STAFFS);
    const [selectStaff, setSelectStaff] = useState(null);
    const [numOfCol,setNumOfCol] = useState('3');


    // hàm set state cho staff là staff dk click
    const onSelect = (staff) => {
        setSelectStaff(staff)
    }

    // hàm setState cho colum , sử dụng cho onChange của Input select
    const ChangeCol = (value) => {
        setNumOfCol(value);
    }

    // xây dựng khung khi render 1 nhân viên được chọn với tham số staff
    const RenderStaff = (staff) => {
        if(staff != null) {
            return(
                <div className='col-12 col-lg-3 col-sm-6 m-3 p-3 my-3 border border-success'>
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

    // map toàn bộ STAFFS ra 1 mảng mới để render ra trang,
    // bên trong key từng nv, hàm onClick lấy tham số là staff của từng nv đã dk render ra
    const StaffList = staffs.map(staff => {
        return(
            <div className={`col-12 col-lg-${numOfCol} col-sm-6 m-3 p-3 my-3 border border-success`}>
                <Card key={staff.id} onClick={() => onSelect(staff)}>
                    <CardTitle>{staff.name}</CardTitle>
                </Card>
            </div>
        )
    })


    // hàm trả về của Home function
    return(
        <div className='container'>
            <div className='row m-4'>
                <Label md={2}><h5>Chọn số cột hiển thị</h5></Label>
                <Col md={2}>
                    <Input type='select'
                        onChange={e => ChangeCol(e.target.value)}
                        value={numOfCol}>
                        <option selected disabled value={''}>Select</option>
                        <option value={5}>2 cột</option>
                        <option value={3}>3 cột</option>
                        <option value={2}>5 cột</option>
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