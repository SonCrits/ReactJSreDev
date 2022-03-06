import React, {Component} from "react";
import Menu from "./MenuComponent";
import DishDetail from "./DishDetailComponent";
import { DISHES } from "../shared/dishes";
import { Navbar, NavbarBrand } from "reactstrap";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectDish: null
        }
    }

    onSelectDish(dishId) {
        this.setState({
            selectDish: dishId
        })
    }

    render() {
        return(
            <div>
                <Navbar dark color='primary'>
                    <div className="container">
                        <NavbarBrand href='/'>Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes} onClick={(dishId) => this.onSelectDish(dishId)} />
                <DishDetail dishes={this.state.dishes.filter((dish) => dish.id === this.state.selectDish)[0]} />
            </div>
        )
    }
}

export default Main;