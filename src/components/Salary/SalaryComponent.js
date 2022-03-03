import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Card, CardBody,
     CardFooter, CardText, CardTitle, Input, Label,Col } from 'reactstrap';

function Salary({staffs}) {
    const basicSalary = 3000000;
    const overTimeSalary = 200000;

    const [value,setValue] = useState('');

    const InputChange = (e) => {
        setValue(e.target.value);
    }

    if(value === 'small'){
        staffs.sort((a,b) => {
            return(
                a.salaryScale * basicSalary + a.overTime * overTimeSalary-
                (b.salaryScale * basicSalary + b.overTime * overTimeSalary)
            )
        })
    }

    if(value === 'big'){
        staffs.sort((a,b) => {
            return(
                b.salaryScale * basicSalary + b.overTime * overTimeSalary-
                (a.salaryScale * basicSalary + a.overTime * overTimeSalary)
            )
        })
    }

    

    const staffSalary = staffs.map(staff => {

        const salary = parseInt((staff.salaryScale * basicSalary) + 
            (staff.overTime * overTimeSalary));

        return(
            <Card className='col-12 col-lg-3 col-sm-6 m-3 my-2 p-3 border border-success'>
                <CardTitle>{staff.name}</CardTitle>
                <CardBody>
                    <CardText>Mã nhân viên : {staff.id}</CardText>
                    <CardText>Hệ số lương : {staff.salaryScale}</CardText>
                    <CardText>Số giờ làm thêm : {staff.overTime}</CardText>
                    <CardFooter>Lương : {salary}</CardFooter>
                </CardBody>
            </Card>
        )
    })

    return(
        <div className='container'>
            <div className='row my-5'>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/staff' className='text-decoration-none'>Nhân Viên</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        Salary
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className='row my-3'>
                <Label md={2}>Sắp xếp theo thứ tự</Label>
                <Col md={4}>
                    <Input type='select' name='select'
                        value={value}
                        onChange={InputChange}>
                        <option value={''} selected disabled>Sort</option>
                        <option value={'small'}>Tăng Dần</option>
                        <option value={'big'}>Giảm Dần</option>
                    </Input>
                </Col>
            </div>
            <div className='row'>
                {staffSalary}
            </div>
        </div>
    )
}

export default Salary;