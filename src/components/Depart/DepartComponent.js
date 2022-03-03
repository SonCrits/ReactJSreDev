import React,{useState} from "react";
import { Card, CardBody, CardFooter, CardText, CardTitle } from "reactstrap";
import deptName from '../Staff/DepartmentName';
import { Link } from "react-router-dom";

function Department({departs}) {
    const depart = departs.map(depart => {
        return(
            <div className="col-12 col-lg-3 col-sm-6 my-5 border border-success p-3 m-5"> 
                <Link 
                to={`${depart.id}`}
                className='text-decoration-none'>
                    <Card>
                        <CardTitle><h4>{deptName(depart.id)}</h4></CardTitle>
                        <CardBody>
                            <CardFooter tag='h6'>
                                Số lượng nhân viên : {' '} 
                                <span className="text-danger">{depart.numberOfStaff}</span>
                            </CardFooter>
                        </CardBody>
                    </Card>
                </Link>
            </div>
        )
    })

    return(
        <div className="container">
            <div className="row">
                {depart}
            </div>
        </div>
    )
}

export default Department;