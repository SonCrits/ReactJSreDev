import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import { PROMOTIONS } from '../shared/promotions';
import {LEADERS} from '../shared/leaders';
import { COMMENTS } from '../shared/comments';
import { Redirect, Route, Switch } from 'react-router-dom';
import Contact from './ContactComponent';
import About from './AboutComponent';


class Main extends Component{
  constructor(props){
    super(props);
    this.state = {
      dishes : DISHES,
      promotions : PROMOTIONS,
      leaders : LEADERS,
      comments : COMMENTS,
    }
  }

  render() {

    const HomePage = () => {
      return(
        <Home
          dish = {this.state.dishes.filter(dish => dish.featured)[0]}
          promotion = {this.state.promotions.filter(promotion => promotion.featured)[0]}
          leader = {this.state.leaders.filter(leader => leader.featured)[0]} />
      )
    }

    const DishWithId = ({match}) => {
      return(
        <DishDetail
          dish = {this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
          comments = {this.state.comments.filter((comment) => comment.id === parseInt(match.params.dishId,10))} />
      )
    }

    return(
      <div>
        <Header />
        <Switch>
          <Route exact path='/home' component={HomePage} />
          <Route exact path='/menu' component={() => <Menu dishes = {this.state.dishes} />} />
          <Route exact path='/contactus' component={Contact} />
          <Route exact path='/menu/:dishId' component={DishWithId} />
          <Route exact path='/aboutus' component={() => <About leaders = {this.state.leaders} />} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default Main;