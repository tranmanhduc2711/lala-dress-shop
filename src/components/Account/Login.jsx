import React from 'react'
import {Form,Button} from 'react-bootstrap';
import {Link} from'react-router-dom';
import './form.scss';
export default function Login() {
  return (
    <>
      <div className="mx-auto form p-5">
        <Form>
          <Form.Label
            className="d-flex justify-content-center"
            style={{ fontWeight: "700", fontSize: "25px" }}
          >
            LOGIN
          </Form.Label>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button type="submit">LOGIN</Button>
          <Form.Group className="d-flex flex-column">
            <Form.Text className="text-muted">
              Not a member? <Link to="/register">Register</Link>
            </Form.Text>
            <Form.Text className="text-muted">
              <Link to="/forgotPassword">Forgot password? </Link>
            </Form.Text>
          </Form.Group>
        </Form>
      </div>
    </>
  );
}
