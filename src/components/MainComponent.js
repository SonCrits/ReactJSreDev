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
import {
   postComment, fetchDishes, fetchComments, fetchProms
  } from '../redux/ActionCreator';
import { actions } from 'react-redux-form';


// hàm map state từ redux sang react
const mapStateToProps = state => {
  return {
    dishes : state.dishes,
    promotions : state.promotions,
    leaders : state.leaders,
    comments : state.comments
  }
};

// hàm map dispatch từ redux sang
const mapDispatchToProps = dispatch => ({
  postComment: (dishId, rating, author, comment) =>
    dispatch(postComment(dishId, rating, author, comment)),
  fetchDishes: () => {dispatch(fetchDishes())},
  resetFeedbackForm: () => {dispatch(actions.reset('feedback'))},
  fetchComments: () => {dispatch(fetchComments())},
  fetchProms: () => {dispatch(fetchProms())}
});

class Main extends Component{
  constructor(props){
    super(props);
  };

  // khởi động page băng fetchDishes 1 lần duy nhất
  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchProms();
  };

  render() {

    // Home và những props
    const HomePage = () => {
      return(
        <Home
          dish = {this.props.dishes.dishes.filter(dish => dish.featured)[0]}
          dishesLoading = {this.props.dishes.isLoading}
          dishesErrMess = {this.props.dishes.errMess}
          promotion = {this.props.promotions.promotions.filter(
            promotion => promotion.featured)[0]
          }
          promoLoading = {this.props.promotions.isLoading}
          promoErrMess = {this.props.promotions.errMess}
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
          comments = {this.props.comments.comments.filter(
            (comment) => comment.dishId  === parseInt(match.params.dishId,10))}
          commentsErrMess = {this.props.comments.errMess} 
          postComment = {this.props.postComment}
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
          <Route exact path='/contactus' 
            component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} 
          />
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