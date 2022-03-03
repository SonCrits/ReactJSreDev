import React, {useState} from 'react';
import { Card, CardBody, CardText, CardTitle, Input, Col, Button, Label, CardImg } from 'reactstrap';
import {Link} from 'react-router-dom';
import ModalStaffInfo from './Staff_Detail';
import PropOverStaffDel from './Staff_delete_confirm';
import UpdateForm from './UpdateModal';
import { FadeTransform } from 'react-animation-components';

function StaffList ({
    departFilter,
    fetchDelStaffs,
    updateStaff,
    numOfCol
}) {
    const RenderStaffItem = ({staff,onClick}) => {
        return(
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}
            >
                <Card>
                    <CardImg src={'/assets/images/hlm.png'} alt={staff.name} />
                    <CardBody>
                        <CardTitle>{staff.name}</CardTitle>
                        <div className='d-flex justify-content-around'>
                            <ModalStaffInfo staff={staff} id={staff.id} />
                            <UpdateForm updateStaff={updateStaff} id={staff.id}/>
                            <PropOverStaffDel staff={staff} id={staff.id} fetchDelStaffs={fetchDelStaffs} />                     
                        </div>
                    </CardBody>               
                </Card>
            </FadeTransform>
        )
    }

    const staffList = departFilter.map((staff) => {
        return(
            <div className={`col-12 col-lg-${numOfCol} col-sm-4 p-3 m-3 border border-success`}>
                <RenderStaffItem staff={staff} />
            </div>
        )
    })

    return staffList;
};

export default StaffList;