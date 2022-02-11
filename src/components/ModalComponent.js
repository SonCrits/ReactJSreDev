import React, {useState} from "react";
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Col, FormFeedback } from "reactstrap";


function ButtonModal (props) {
    const [openModal , setOpenModal] = useState(false);
    const [newStaff,setNewStaff] = useState({ });
    const [isDisabled, setIsDisabled] = useState(true);

    let [nameError, setNameError] = useState("Required");
    let [doBError, setDoBError] = useState("Required");
    let [startDateError, setStartDateError] = useState("Required");
    let [salaryScaleError, setSalaryScaleError] = useState("");
    let [annualLeaveError, setAnnualLeaveError] = useState("");
    let [overTimeError, setOverTimeError] = useState("");


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
        let isInvalid = false;

        // Check name valid
        if (!newStaff.name || newStaff.name.length < 4) {
        setNameError("Yêu cầu nhập nhiều hơn 3 ký tự");
        isInvalid = true;
        } else {
        setNameError("");
        }

         // Check date of birth valid
    if (!newStaff.doB) {
        setDoBError("Yêu cầu bắt buộc");
        isInvalid = true;
      } else {
        setDoBError("");
      }
  
      // Check start date valid
      if (!newStaff.startDate) {
        setStartDateError("Yêu cầu bắt buộc");
        isInvalid = true;
      } else {
        setStartDateError("");
      }
  
      if (
        Number(newStaff.salaryScale) &&
        newStaff.salaryScale >= 1 &&
        newStaff.salaryScale <= 3
      ) {
        setSalaryScaleError("");
      } else {
        setSalaryScaleError("Yêu cầu nhập số từ 1-3");
        isInvalid = true;
      }
  
      if (Number(newStaff.annualLeave) || newStaff.annualLeave === "0") {
        setAnnualLeaveError("");
      } else {
        setAnnualLeaveError("Yêu cầu nhập số");
        isInvalid = true;
      }
  
      if (Number(newStaff.overTime) || newStaff.overTime === "0") {
        setOverTimeError("");
      } else {
        setOverTimeError("Yêu cầu nhập số");
        isInvalid = true;
      }

        setIsDisabled(isInvalid);
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
                                    onChange={(e) => {
                                        hanleInputChange(e);
                                        checkValid();
                                    }}
                                    valid={nameError === ''}
                                    invalid={nameError !== ''}
                                />
                                <FormFeedback>{nameError}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label md={5}>Ngày sinh</Label>
                            <Col md={7}>
                                <Input type="date" name="doB"
                                    onChange={(e) => {
                                        hanleInputChange(e);
                                        checkValid();
                                    }}
                                    valid={nameError === ''}
                                    invalid={nameError !== ''}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label md={5}>Ngày vào công ty</Label>
                            <Col md={7}>
                                <Input type="date" name="startDate"
                                   onChange={(e) => {
                                    hanleInputChange(e);
                                    checkValid();
                                }}
                                valid={nameError === ''}
                                invalid={nameError !== ''}
                            />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label md={5}>Phòng ban</Label>
                            <Col md={7}>
                                <Input type="select" name='department'
                                    onChange={(e) => {
                                        hanleInputChange(e);
                                        checkValid();
                                    }}
                                    valid={nameError === ''}
                                    invalid={nameError !== ''}
                                >
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
                                    onChange={(e) => {
                                        hanleInputChange(e);
                                        checkValid();
                                    }}
                                    valid={nameError === ''}
                                    invalid={nameError !== ''}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label md={5}>Số ngày nghỉ còn lại</Label>
                            <Col md={7}>
                                <Input type="number" name="annualLeave"
                                    onChange={(e) => {
                                        hanleInputChange(e);
                                        checkValid();
                                    }}
                                    valid={nameError === ''}
                                    invalid={nameError !== ''}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label md={5}>Số giờ làm thêm</Label>
                            <Col md={7}>
                                <Input type="number" name="overTime"
                                    onChange={(e) => {
                                        hanleInputChange(e);
                                        checkValid();
                                    }}
                                    valid={nameError === ''}
                                    invalid={nameError !== ''}
                                />
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