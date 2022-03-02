import React from "react";
import { Card, CardTitle, CardText, 
    Breadcrumb, BreadcrumbItem 
} from "reactstrap";
import { Link } from "react-router-dom";

const deptName = (id) => {
    switch(id) {
        case 'Dept04':
            return ' Phòng CNTT ';
            break;
        case 'Dept02':
            return ' Phòng nhân sự ';
            break;
        case 'Dept05':
            return ' Phòng tài chính';
            break;
        case 'Dept01':
            return ' Phòng kinh doanh ';
            break;
        case 'Dept03':
            return ' Phòng Marketing';
            break;
        default:
    };
};

function Department({departments}) {
    const departNum = departments.map((department) => {
        return(
            <div className="col-lg-4 col-md-6 col-sm-12 my-3 animate__animated animate__jackInTheBox">
                <Link to={`/department/${department.id}`}
                    className='text-decoration-none'>
                    <Card className='p-3 m-3 border border-success text-success py-5'>
                        <CardTitle tag='h2' className='fw-bold'>
                            {deptName(department.id)}
                        </CardTitle>
                        <CardText tag='h5'>
                            Số lượng nhân viên: {' '}
                            <span className="text-danger fw-bold fs-4">
                                {department.numberOfStaff}
                            </span>
                        </CardText>
                    </Card>
                </Link>
            </div>
        );
    });
    
    return(
        <div className="container p-2 my-5">
            <Breadcrumb>
                <BreadcrumbItem>
                    <Link to='/staff'>Home</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>Phòng ban</BreadcrumbItem>
            </Breadcrumb>
            <hr />
            <div className="row">
                {departNum}
            </div>
        </div>
    );
};

export default Department;