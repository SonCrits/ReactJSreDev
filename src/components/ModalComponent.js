import React, {useState} from "react";
import { Button, Label,
     Modal, ModalBody, ModalHeader, Col, Row } from "reactstrap";
import {LocalForm , Errors, Control} from 'react-redux-form';

const required = (val) => val && val.length;
const minLength = (len) => (val) => !(val) || (val.length <= len);
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const isNumber = (val) => !isNaN(Number(val));
const isDate = (val) => /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/i.test(val);

function ButtonModal (props) {
    const [openModal , setOpenModal] = useState(false);
    const [staffs, setStaffs] = useState(props.staffs)
    


    const toggleModal = () => {
        setOpenModal(!openModal);
    }

    

    function handleSubmit(values) { 
        
        const newStaff = {...values};
        newStaff.id = staffs.length
        
        const department = props.departs.find(
            depart => depart.id === newStaff.department
        );

        newStaff.department = department;
        newStaff.image = '/assets/images/hlm.png';
        props.setStaffs(() => [...props.staffs, newStaff]);
        console.log(newStaff);
        // newStaff.department = department;
        
        // setNewStaff(newStaff);
        // newStaff.id = props.staffs.length;              
                
    }


    return(
        <div>
            <Button color='primary' value='submit' onClick={toggleModal}>
                <span className='fa fa-plus'></span>
            </Button>
            <Modal isOpen={openModal} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Thêm Nhân Viên</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => handleSubmit(values)}>
                        <Row className="form-group">
                            <Label md={5}>Tên</Label>
                            <Col md={7}>
                                <Control.text model=".name" name="name"
                                    className="form-control"
                                    validators={{
                                        required,
                                        minLength : minLength(3),
                                        maxLength : maxLength(10)
                                    }}
                                />
                                <Errors className="text-danger" model='.name'
                                    messages={{
                                        required : "Required",
                                        minLength : "tối thiểu 3 ký tự",
                                        maxLength : "tối đa 10 ký tự"
                                    }} />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label md={5}>Ngày sinh</Label>
                            <Col md={7}>
                                <Control.input model=".doB" name="doB"
                                    className="form-control"
                                    validators={{
                                        required,
                                        isDate
                                    }}
                                />
                                <Errors className="text-danger" model='.doB'
                                    messages={{
                                        required : 'Required',
                                        isDate : 'không phải định dạng ngày tháng'
                                    }} />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label md={5}>Ngày vào công ty</Label>
                            <Col md={7}>
                                <Control.input model=".startDate" name="startDate"
                                   className="form-control"
                                   validators={{
                                       required,
                                       isDate
                                   }}
                                />
                                <Errors className="text-danger" model='.startDate'
                                    messages={{
                                        required : 'Required',
                                        isDate : 'không phải định dạng ngày tháng'
                                    }} />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label md={5}>Phòng ban</Label>
                            <Col md={7}>
                                <Control.select model=".department" name='department'
                                    className="form-control"
                                >
                                    <option selected disabled value={''}>
                                        chọn phòng ban
                                    </option>
                                    <option value={'Dept01'}>Sale</option>
                                    <option value={'Dept02'}>HR</option>
                                    <option value={'Dept03'}>Marketing</option>
                                    <option value={'Dept04'}>IT</option>
                                    <option value={'Dept05'}>Finance</option>
                                </Control.select>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label md={5}>Hệ số lương</Label>
                            <Col md={7}>
                                <Control.text model=".salaryScale" name="salaryScale"
                                   className="form-control"
                                   validators={{
                                       required,
                                       isNumber
                                   }}
                                />
                                <Errors className="text-danger" model='.salaryScale'
                                    messages={{
                                        required : 'Required',
                                        isNumber : 'Dữ liệu phải là số'
                                    }} />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label md={5}>Số ngày nghỉ còn lại</Label>
                            <Col md={7}>
                                <Control.text model=".annualLeave" name="annualLeave"
                                   className="form-control"
                                   validators={{
                                       required,
                                       isNumber
                                   }}
                                />
                                <Errors className="text-danger" model='.annualLeave'
                                    messages={{
                                        required : 'Required',
                                        isNumber : 'Dữ liệu phải là số'
                                    }} />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label md={5}>Số giờ làm thêm</Label>
                            <Col md={7}>
                                <Control.text model=".overTime" name="overTime"
                                    className="form-control"
                                    validators={{
                                        required,
                                        isNumber
                                    }}
                                />
                                <Errors className="text-danger" model='.overTime'
                                    messages={{
                                        required : 'Required',
                                        isNumber : 'Dữ liệu phải là số'
                                    }} />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col className='py-2 my-3 text-center'>
                                <Button color="primary" type="submit">
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default ButtonModal;