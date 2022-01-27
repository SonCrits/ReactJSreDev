import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
} from "reactstrap";

function RenderMenuItem({dish,onClick}) {
  return(
    <Card onClick={() => onClick(dish.id)}>
      <CardImg src={dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
      </CardBody>
    </Card>
  );
}

const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return(
      <div className="col-12 col-sm-5 m-1">
        <RenderMenuItem dish={dish} onClick={props.onClick} />
      </div>
    )
  })

  return(
    <div className="container">
      <div className="row">
        {menu}
      </div>
    </div>
  )
}

export default Menu;