import React, {useState} from 'react';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';
import {STAFFS} from '../shared/staffs';

function Home(){
    const [staffs, setStaffs] = useState(STAFFS);
    const [selectStaff , setSelectStaff] = useState(null);

    const RenderStaff = (staff) => {
        if(staff != null) {
            return(
                <div className='col-12 col-sm-6 col-lg-3 m-3 my-3'>
                    <Card>
                        <CardTitle>{staff.name}</CardTitle>
                        <CardBody>
                            <CardText>{staff.department.name}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        } else return <div></div>
    }

    const onSelectStaff = (staff) => {
        setSelectStaff(staff)
    }

    const StaffList = staffs.map(staff => {
        return(
            <div className='col-12 col-sm-6 col-lg-3 m-3 my-3'>
                <Card key={staff.id}
                    onClick={() => onSelectStaff(staff)}>
                    <CardTitle>{staff.name}</CardTitle>
                </Card>
            </div>
        )
    })

    return(
        <div className='container'>
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