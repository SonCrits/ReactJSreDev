import React,{useState} from "react";
import { Card, CardBody, CardFooter, CardText, CardTitle } from "reactstrap";

function Department(props) {
    const depart = props.departs.map(depart => {
        return(
            <Card className="col-12 col-lg-3 col-sm-6 my-5 border border-success p-3 m-5 ">
                <CardTitle><h4>{depart.name}</h4></CardTitle>
                <CardBody>
                    <CardFooter>Số lượng nhân viên : {depart.numberOfStaff}</CardFooter>
                </CardBody>
            </Card>
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