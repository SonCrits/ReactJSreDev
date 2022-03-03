import React, {useState} from 'react';
import { Card, CardBody, CardText, CardTitle, Input, Col, Button, Label, CardImg } from 'reactstrap';
import {Link} from 'react-router-dom';
import ButtonModal from './ModalComponent';
import StaffList from './staffList';

function Home(props){
    // console.log(props.staffs)
    
    let search = '';
    const [numOfCol,setNumOfCol] = useState('3');
    const [staffOfDepart, setStaffOfDepart] = useState('1');
    const [searchName, setSearchName] = useState('');
    // hàm setState cho colum , sử dụng cho onChange của Input select
    const ChangeCol = (value) => {
        setNumOfCol(value);
    }

    const ChangeDe = (value) => {
        setStaffOfDepart(value);
    }

    const ChangeSearch = (event) => {
        setSearchName(search.value);
        event.preventDefault();
    }

    var departFilter = [];
    
    if(staffOfDepart === '1') {
        departFilter = props.staffs;
        
    } 
    
    // else {
    //     departFilter = props.staffs.filter((staff) => {
    //         staff.departmentId === staffOfDepart
    //         // console.log(staffOfDepart)
    //         // console.log(staff.departmentId)
    //     })
    // }

    // if(searchName !== '' && staffOfDepart === '1') {
    //     departFilter = props.staffs.filter(staff => {
    //         staff.name.toLowerCase().includes(searchName.toLowerCase())
    //     })
    // } else if(searchName !== '') {
    //     departFilter = props.staffs.filter(staff => {
    //         staff.department === staffOfDepart &&
    //         staff.name.toLowerCase().includes(searchName.toLowerCase())
    //     })
    // }

    var departmentFilterLength = departFilter.length;
    
    return(
        <div className='container'>
            <div className='row my-3'>
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
                <Col md={2}>
                    <Input type='select'
                        onChange={e => ChangeDe(e.target.value)}
                        value={staffOfDepart}>
                        <option value='' selected disabled>
                            Phòng ban
                        </option>

                        <option value='1'>Tất cả</option>
                        <option value='Dept04'>Phòng CNTT</option>
                        <option value='Dept02'>Phòng Nhân sự</option>
                        <option value='Dept05'>Phòng Tài chính</option>
                        <option value='Dept01'>Phòng kinh doanh</option>
                        <option value='Dept03'>Phòng Marketing</option>
                    </Input>
                </Col>
                <Label md={2}><h5>Thêm Nhân Viên</h5></Label>
                <Col md={1}>
                    <ButtonModal staffs={props.staffs} departs={props.departs}
                        setStaffs={props.setStaffs}/>
                </Col>
                <Col md={{size:2}}>
                    <Input type='text' name='search' id='search'
                        innerRef={(input) => (search = input)} 
                      />
                </Col>
                <Col md={1}>
                    <Button color='primary' value='submit' onClick={ChangeSearch}>
                        <span className='fa fa-search'></span>
                    </Button>
                </Col>
            </div>
            <div className='row'>
                <StaffList 
                    departFilter = {departFilter}
                />
            </div>
        </div>
    )
}

export default Home;