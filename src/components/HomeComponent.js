import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle, CardSubtitle } from 'reactstrap';
import { Loading } from './LoadingComponent';


// layOut Item gồm Image - Title - designation
// nếu là isloading thì trả về Load..
// nếu là errMess thì trả về errMess
// nếu dish k rỗng thì trả về layout gồm dish image và dish comment
function RenderItem({item, isLoading, errMess}){
    if(isLoading) {
        return (
            <Loading />
        )
    }
    else if(errMess) {
        return (
            <h4>{errMess}</h4>
        )
    }
    return(
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    )
}

// HomePage trả về 3 Mục : dish - promotion - leader
function Home(props) {
    return(
        <div className='container'>
            <div className='row align-items-start'>
                <div className='col-12 col-md m-1'>
                    <RenderItem 
                        item={props.dish} 
                        isLoading={props.dishesLoading}
                        errMess={props.dishesErrMess}
                    />
                </div>
                <div className='col-12 col-md m-1'>
                    <RenderItem item={props.promotion} />
                </div>
                <div className='col-12 col-md m-1'>
                    <RenderItem item={props.leader} />
                </div>
            </div>
        </div>
    )
}

export default Home;