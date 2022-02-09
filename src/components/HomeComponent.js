import React, {useState} from 'react';
import { Card, CardBody, CardText, CardTitle, Input, Col, Button, Label, CardImg } from 'reactstrap';
import {STAFFS} from '../shared/staffs';
import dateFormat from 'dateformat'; 
import {Link} from 'react-router-dom';

function Home(props){
    
    let search = '';
    const [numOfCol,setNumOfCol] = useState('3');
    const [searchName, setSearchName] = useState('');

    // hàm setState cho colum , sử dụng cho onChange của Input select
    const ChangeCol = (value) => {
        setNumOfCol(value);
    }

    const ChangeSearch = (event) => {
        setSearchName(search.value);
        event.preventDefault();
    }



    const RenderStaffItem = ({staff,onClick}) => {
        return(
            <Card>
                <Link to={`/staff/${staff.id}`} className='text-decoration-none'>
                    <CardImg src={staff.image} alt={staff.name} />
                    <CardBody>
                        <CardTitle>{staff.name}</CardTitle>
                    </CardBody>
                </Link>
            </Card>
        )
    }

    const filterStaff = props.staffs.filter(staff => {
        return staff.name.toLowerCase().indexOf(searchName.toLowerCase()) !== -1;
    })



    // map toàn bộ STAFFS ra 1 mảng mới để render ra trang,
    // bên trong key từng nv, hàm onClick lấy tham số là staff của từng nv đã dk render ra
    const StaffList = filterStaff.map((staff) => {
        return(
            <div className={`col-12 col-lg-${numOfCol} col-sm-6 m-2  border border-success`} key={staff.id}>
                <RenderStaffItem staff={staff} onClick={props.onClick} />
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
                <Col md={{size:2,offset:3}}>
                    <Input type='text' name='search' id='search'
                    //   onChange={e => ChangeSearch(e.target.value)}
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
                {StaffList}
            </div>
        </div>
    )
}

export default Home;