import React, {Component} from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

class DishDetail extends Component{

    renderDish(dish) {
        if(dish != null) {
            return(
                <Card className="col-12 col-sm-5 m-1">
                    <CardImg src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        } else return <div></div> 
    }

    renderComment(dish) {
        if(dish != null) {
            var commentDish = dish.comments.map((cmt) => {
                return (
                  <div>
                    <h6>{cmt.comment}</h6>
                    -- {cmt.author},
                    {new Intl.DateTimeFormat("en-US",{
                      year : "numeric",
                      month : "short",
                      day : "2-digit"
                    }).format(new Date(Date.parse(cmt.date)))}                 
                  </div>
                );
            })
            return (
                <div className='col-12 col-sm-5 text-lg-left'>
                  <h3>Comments</h3>
                  {commentDish}
                </div>
            )
        } else return <div></div>
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    {this.renderDish(this.props.dish)}
                    {this.renderComment(this.props.dish)}
                </div>
            </div>
        )
    }
}

export default DishDetail;