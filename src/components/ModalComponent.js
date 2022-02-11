import React, {useState} from "react";
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Col, FormFeedback } from "reactstrap";


function ButtonModal (props) {
    const [openModal , setOpenModal] = useState(false);
    const [newStaff,setNewStaff] = useState({ });
    const [nameError, setNameError] = useState('');
    // const values = '';


    const toggleModal = () => {
        setOpenModal(!openModal);
    }

    const hanleInputChange = (event) => {
        let staffKey = event.target.name;
        let value = event.target.value; 
        newStaff[staffKey] = value;       
    }

    function handleSubmit(event) {      
        event.preventDefault();
        const department = props.departs.find(
            depart => depart.id === newStaff.department
        );
        newStaff.department = department;
        newStaff.image = '/assets/images/hlm.png';
        setNewStaff(newStaff);
        newStaff.id = props.staffs.length;              
        props.setStaffs(() => [...props.staffs, newStaff]);        
    }

    function checkValid() {
        const isInvalid = false;
        if(!newStaff.name || newStaff.name.length < 4){
            setNameError('Yêu cầu nhập nhiều hơn 3 ký tự');
            isInvalid = true;
        } else {
            setNameError("");
        }
    }

    return(
        <div>
            <Button color='primary' value='submit' onClick={toggleModal}>
                <span className='fa fa-plus'></span>
            </Button>
            <Modal isOpen={openModal} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Thêm Nhân Viên</ModalHeader>
                <ModalBody>
                    <Form onSubmit={ handleSubmit}>
                        <FormGroup row>
                            <Label md={5}>Tên</Label>
                            <Col md={7}>
                                <Input type="text" name="name"
                                    onChange={hanleInputChange}
                                    valid={nameError === ''}
                                    invalid={nameError !== ''}/>
                                <FormFeedback>{nameError}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label md={5}>Ngày sinh</Label>
                            <Col md={7}>
                                <Input type="date" name="doB"
                                    onChange={hanleInputChange}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label md={5}>Ngày vào công ty</Label>
                            <Col md={7}>
                                <Input type="date" name="startDate"
                                    onChange={hanleInputChange}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label md={5}>Phòng ban</Label>
                            <Col md={7}>
                                <Input type="select" name='department'
                                    onChange={hanleInputChange}>
                                    <option selected disabled value={''}>
                                        chọn phòng ban
                                    </option>
                                    <option value={'Dept01'}>Sale</option>
                                    <option value={'Dept02'}>HR</option>
                                    <option value={'Dept03'}>Marketing</option>
                                    <option value={'Dept04'}>IT</option>
                                    <option value={'Dept05'}>Finance</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label md={5}>Hệ số lương</Label>
                            <Col md={7}>
                                <Input type="number" name="salaryScale"
                                    onChange={hanleInputChange}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label md={5}>Số ngày nghỉ còn lại</Label>
                            <Col md={7}>
                                <Input type="number" name="annualLeave"
                                    onChange={hanleInputChange}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label md={5}>Số giờ làm thêm</Label>
                            <Col md={7}>
                                <Input type="number" name="overTime"
                                    onChange={hanleInputChange}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col className='py-2 my-3 text-center'>
                                <Button color="primary" type="submit">
                                    Submit
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default ButtonModal;