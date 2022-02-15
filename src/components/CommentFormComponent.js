import React,{Component} from "react";
import { Modal,ModalHeader, ModalBody,
    Label, Button , Row, Col,
} from "reactstrap";
import {LocalForm, Control, Errors} from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component{
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen : false,
        }
        
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal(){
        this.setState({
            isModalOpen : !this.state.isModalOpen
        });
    }

    handleSubmit(values){
        console.log('Current State is : ' +JSON.stringify(values))
        this.props.addComment(
            this.props.dishId, values.rating, values.author, values.comment
        )
    }

   

    render(){

        return(
            <div>
                <Button onClick={this.toggleModal} color='primary'>
                    Send Feedback
                </Button>
                <Modal isOpen = {this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        <h4>Submit Comment</h4>
                    </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit ={(values) => this.handleSubmit(values)}>
                            <Row className='form-group'>
                                <Label md={2} htmlFor='rating'>Rating</Label>
                                <Col md={10}>
                                    <Control.select model='.rating' name='rating' id='rating'>
                                        <option selected disabled>Đánh giá</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label md={2}>Your Name</Label>
                                <Col md={10}>
                                    <Control.text model='.author' name='author' id='author'
                                        validators={{
                                            required,
                                            minLength : minLength(4),
                                            maxLength : maxLength(15),
                                        }}
                                    />
                                    <Errors className="text-danger" model='.author'
                                        messages={{
                                            required : 'Required',
                                            minLength : 'Ít nhất 4 ký tự',
                                            maxLength : 'Nhiều nhất 15 ký tự',
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label md={2} htmlFor='comment'>Comment</Label>
                                <Col md={10}>
                                    <Control.textarea model='.comment' name='comment' id='comment'
                                        rows='6'
                                        validators={{
                                            required,
                                            minLength : minLength(5),
                                        }}
                                    />
                                    <Errors className="text-danger" model='.comment'
                                        messages={{
                                            required : 'Required',
                                            minLength : 'Ít nhất 5 ký tự'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Col md={{size:4,offset:2}}>
                                    <Button type='submit' color='primary'>Submit</Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default CommentForm;