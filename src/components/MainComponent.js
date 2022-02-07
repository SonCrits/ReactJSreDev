import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import Contact from './ContactComponent';
import About from './AboutComponent';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    dishes : state.dishes,
    leaders : state.leaders,
    promotions : state.promotions,
    comments : state.comments
  }
}


class Main extends Component{
  constructor(props){
    super(props);
  }

  render() {

    const HomePage = () => {
      return(
        <Home
          dish = {this.props.dishes.filter(dish => dish.featured)[0]}
          promotion = {this.props.promotions.filter(promotion => promotion.featured)[0]}
          leader = {this.props.leaders.filter(leader => leader.featured)[0]} />
      )
    }

    const DishWithId = ({match}) => {
      return(
        <DishDetail
          dish = {this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
          comments = {this.props.comments.filter((comment) => comment.id === parseInt(match.params.dishId,10))} />
      )
    }

    return(
      <div>
        <Header />
        <Switch>
          <Route exact path='/home' component={HomePage} />
          <Route exact path='/menu' component={() => <Menu dishes = {this.props.dishes} />} />
          <Route exact path='/contactus' component={Contact} />
          <Route exact path='/menu/:dishId' component={DishWithId} />
          <Route exact path='/aboutus' component={() => <About leaders = {this.props.leaders} />} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps)(Main));