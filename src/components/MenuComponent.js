import React , {Component} from "react";
import { Card, CardImg , CardImgOverlay , CardText, CardBody,
CardTitle } from "reactstrap";
import DishDetail from "./DishDetailComponent";

class Menu extends Component{
    constructor(props) {
        super(props);
        this.state = {
            selectDish : null
        };

        this.onSelectDish = this.onSelectDish.bind(this);
        this.renderDish = this.renderDish.bind(this);
    }

    onSelectDish(dish) {
        this.setState({selectDish : dish})
    }

    renderDish(dish){
        if(dish != null) {
            return(
                <DishDetail dish={this.state.selectDish}/>
            )
        } else return <div></div>
    }


    render() {
       const menu = this.props.dishes.map((dish) => {
           return(
               <div className="col-12 col-md-5 m-1">
                   <Card key={dish.id}
                        onClick = {() => this.onSelectDish(dish)}>
                        <CardImg width='100%' src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardBody>
                    </Card>
               </div>
           )
       })

        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectDish)}
                </div>
            </div>
        )
    }
}

export default Menu;