import React,{useState , Component} from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import { STAFFS } from "../shared/staffs";


class StaffList extends Component{
    constructor(props){
        super(props);

        this.state = {
            selectStaff : null,
            staffs : STAFFS
        };

        this.onSelectStaff = this.onSelectStaff.bind(this);
    }

    onSelectStaff(staff) {
        this.setState({
            selectStaff : staff
        })
    }

    render() {

        const staffDetail = (staff) => {
            if(staff != null){
                return(
                    <Card className='col-12 col-sm-6 col-lg-3 m-3'>
                        <CardTitle>{staff.name}</CardTitle>
                        <CardBody>
                            <CardText>{staff.department.name}</CardText>
                        </CardBody>
                    </Card>
                )
            } else return <div></div>
        }

        const staffList = this.state.staffs.map((staff) => {
            return(
                <Card key={staff.id} 
                    onClick={() => this.onSelectStaff(staff)} 
                    className='col-12 col-sm-6 col-lg-3 m-3'>
                    <CardTitle>{staff.name}</CardTitle>
                </Card>
            )
        })

        return(
            <div className="container">
                <div className="row">
                    {staffList}
                </div>
                <div className="row">
                    {staffDetail(this.state.selectStaff)}
                </div>
            </div>
        )
    }
}

export default StaffList;