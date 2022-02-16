import React from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle,
  Breadcrumb , BreadcrumbItem
} from 'reactstrap';
import {Link} from 'react-router-dom';
import CommentForm from './CommentFormComponent';
import { Loading } from './LoadingComponent';

// layout DishImage
function RenderDish ({dish}) {
  if(dish != null) {
    return(
      <div className='col-12 col-sm-5 m-1'>
        <Card>
          <CardImg src={dish.image} alt={dish.name}/>
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    )
  } else return <div></div>
}

// layout comment
function RenderComment({comments, dishId, addComment}) {
  if(comments != null) {
    return(
      <div className='col-12 col-sm-5 m-1'>
        <h4>COMMENTS</h4>
        <ul className='list-unstyled'>
          {comments.map((comment) => {
            return(
              <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>
                  --{comment.author},
                  {new Intl.DateTimeFormat('en-US',{
                    year : 'numeric',
                    month : 'short',
                    day : '2-digit',
                  }).format(new Date(Date.parse(comment.date)))}
                </p>
              </li>
            )
          })}
        </ul>
        <CommentForm dishId={dishId} addComment={addComment}/>
      </div>
    )
  } else return <div></div>
}

// lay out DishDetail Page. 
// nếu là isloading thì trả về Load..
// nếu là errMess thì trả về errMess
// nếu dish k rỗng thì trả về layout gồm dish image và dish comment
// nếu k có gì thì trả về div rỗng
const DishDetail = (props) => {
  if(props.isLoading) {
    return(
      <div className='container'>
        <div className='row'>
          <Loading />
        </div>
      </div>
    )
  }
  else if(props.errMess) {
    return(
      <div className='container'>
        <div className='row'>
          <h4>{props.errMess}</h4>
        </div>
      </div>
    )
  }
  else if(props.dish != null) {
    return(
      <div className='container'>
        <div className='row'>
          <Breadcrumb>
            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className='col-12'>
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className='row'>
          <RenderDish dish={props.dish} />
          <RenderComment 
            comments={props.comments}
            dishId={props.dish.id}
            addComment={props.addComment} 
          />
        </div>
      </div>
    )
  } else return <div></div>
}
    
export default DishDetail;