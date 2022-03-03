import React, {useState} from 'react';
import { Card, CardBody, CardText, CardTitle, Input, Col, Button, Label, CardImg } from 'reactstrap';
import {Link} from 'react-router-dom';
import ModalStaffInfo from './Staff_Detail';

function StaffList ({
    departFilter
}) {
    const RenderStaffItem = ({staff,onClick}) => {
        return(
            <Card>
                <CardImg src={'/assets/images/hlm.png'} alt={staff.name} />
                <CardBody>
                    <CardTitle>{staff.name}</CardTitle>
                    <div className='d-flex justify-content-around'>
                        <ModalStaffInfo staff={staff} id={staff.id} />
                    </div>
                </CardBody>               
            </Card>
        )
    }

    const staffList = departFilter.map((staff) => {
        return(
            <div className="col-12 col-lg-2 col-sm-4 p-3 m-3 border border-success">
                <RenderStaffItem staff={staff} />
            </div>
        )
    })

    return staffList;
};

export default StaffList;