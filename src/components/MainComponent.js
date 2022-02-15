import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Redirect, Route, Switch,withRouter } from 'react-router-dom';
import Contact from './ContactComponent';
import About from './AboutComponent';
import {connect} from 'react-redux';
import { addComment, fetchDishes } from '../redux/ActionCreator';


// hàm map state từ redux sang react
const mapStateToProps = state => {
  return {
    dishes : state.dishes,
    promotions : state.promotions,
    leaders : state.leaders,
    comments : state.comments
  }
}

// hàm map dispatch từ redux sang
const mapDispatchToProps = dispatch => ({
  addComment: (dishId, rating, author, comment) =>
    dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => {dispatch(fetchDishes())}
})

class Main extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchDishes();
  }

  render() {

    // Home và những props
    const HomePage = () => {
      return(
        <Home
          dish = {this.props.dishes.dishes.filter(dish => dish.featured)[0]}
          dishesLoading = {this.props.dishes.isLoading}
          dishesErrMess = {this.props.dishes.errMess}
          promotion = {this.props.promotions.filter(promotion => promotion.featured)[0]}
          leader = {this.props.leaders.filter(leader => leader.featured)[0]} />
      )
    }

    // DishDetail và những props
    const DishWithId = ({match}) => {
      return(
        <DishDetail
          dish = {this.props.dishes.dishes.filter(
            (dish) => dish.id === parseInt(match.params.dishId,10))[0]}
          dishesLoading = {this.props.dishes.isLoading}
          dishesErrMess = {this.props.dishes.errMess}
          comments = {this.props.comments.filter(
            (comment) => comment.dishId  === parseInt(match.params.dishId,10))} 
          addComment = {this.props.addComment}
        />
      )
    }

    // Route Page
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

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));