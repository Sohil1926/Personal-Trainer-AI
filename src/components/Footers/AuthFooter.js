/*eslint-disable*/
import React from 'react';

// reactstrap components
import { NavItem, NavLink, Nav, Container, Row, Col } from 'reactstrap';

const Login = () => {
  return (
    <>
      <footer className='py-5'>
        <Container>
          <Row className='align-items-center justify-content-xl-between'>
            <Col xl='6'>
              <div className='copyright text-center text-xl-left text-dark'>
                © {new Date().getFullYear()}{' '}
                <a className='font-weight-bold ml-1 text-dark' href='#' target='_blank'>
                  PT {'<'} AI
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Login;
