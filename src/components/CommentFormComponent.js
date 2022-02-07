import React,{Component} from "react";
import { Modal,ModalHeader, ModalBody,
    Label, Button , Row, Col, Input, Form, FormGroup,FormFeedback
} from "reactstrap";


class CommentForm extends Component{
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen : false,
            rating: '3',
            author: '',
            comment : '',
            touched : {
                author : false,
                comment : false
            }
        }
        

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    toggleModal(){
        this.setState({
            isModalOpen : !this.state.isModalOpen
        });
    }

    handleSubmit(event){
        console.log('Current State is : ' +JSON.stringify(this.state))
        event.preventDefault();
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name] :value
        })
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched : {...this.state.touched,[field] : true}
        });
    }

    validate ( author , comment) {
        const errors = {
            author : '',
            comment : ''
        }

        if(this.state.touched.author && author.length < 3) {
            errors.author = 'author should be >=3 character';
        } else if(this.state.touched.author && author.length > 15) {
            errors.author = 'author should be <=15 character';
        }

        if(this.state.touched.comment && comment.length < 1) {
            errors.comment = 'comment should be >=1 character';
        }

        return errors;
    }

    render(){

        const errors = this.validate(
            this.state.author,
            this.state.comment
        )
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
                        <Form onSubmit ={this.handleSubmit}>
                            <FormGroup row>
                                <Label md={2} htmlFor='rating'>Rating</Label>
                                <Col md={10}>
                                    <Input type='select' name='rating' id='rating'
                                        value={this.state.rating}
                                        onChange={this.handleInputChange}>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={2}>Your Name</Label>
                                <Col md={10}>
                                    <Input type='text' name='author' id='author'
                                    value={this.state.author}
                                    onChange={this.handleInputChange}
                                    valid={errors.author === ''}
                                    invalid={errors.author !== ''}
                                    onBlur={this.handleBlur('author')} />
                                    <FormFeedback>{errors.author}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={2} htmlFor='comment'>Comment</Label>
                                <Col md={10}>
                                    <Input type='textarea' name='comment' id='comment'
                                        rows='6'
                                        value={this.state.comment}
                                        onChange={this.handleInputChange}
                                        valid={errors.comment === ''}
                                        invalid={errors.comment !== ''}
                                        onBlur={this.handleBlur('comment')} />
                                    <FormFeedback>{errors.comment}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col md={{size:4,offset:2}}>
                                    <Button type='submit' color='primary'>Submit</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default CommentForm;