import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import Content from '../components/Content';
import HeroCured from '../components/HeroCured';
import emailjs from 'emailjs-com';

class ContactPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null,
        }
    }

    handleChange = (event) => {
        // console.log(event);

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            disabled: true
        });

        console.log(event.target)

        emailjs.sendForm('default_service', 'normalcontact', event.target, 'user_Igj4Q3wy6ZXivExhrbhvn')
            .then((result) => {
                console.log(result.text);
                this.setState({
                    disabled: false,
                    emailSent: true,
                    name: '',
                    email: '',
                    message: '',
                });
            })
            .catch(err => {
                this.setState({
                    disable: false,
                    emailSent: false
                });
            });

    }

    render() {
        return (
            <Container>
                <div className="div-contact m-3" id={this.props.id}>
                    <HeroCured title={"Let's talk !"} />
                    <Content>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group>
                                <Form.Label className="second-color" htmlFor="full-name">Full Name</Form.Label>
                                <Form.Control className="form-color-background fifth-color" id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                            </Form.Group>


                            <Form.Group>
                                <Form.Label className="second-color" htmlFor="email">Email</Form.Label>
                                <Form.Control className="form-color-background fifth-color" id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
                            </Form.Group>


                            <Form.Group>
                                <Form.Label className="second-color" htmlFor="message">Message</Form.Label>
                                <Form.Control className="form-color-background fifth-color" id="message" name="message" as="textarea" rows="4" value={this.state.message} onChange={this.handleChange} />
                            </Form.Group>

                            <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                                Send
                        </Button>

                            {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                            {this.state.emailSent === false && <p className="d-inline error-msg">Email Not Sent</p>}
                        </Form>
                    </Content>
                </div>
            </Container>
        );
    }
}

export default ContactPage;