import React, { useEffect, useState } from 'react';
import firebase from '../../Firebase';

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from 'reactstrap';

const Header = () => {
  const db = firebase.firestore();

  const [accuracy, setAccuracy] = useState(0);
  useEffect(() => {
    var docRef = db.collection('users').doc('twnVnizY2DJk2UtXlZMv');
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          setAccuracy(doc.data().accuracy);
        } else {
          // doc.data() will be undefined in this case
          console.log('No such document!');
        }
      })
      .catch((error) => {
        console.log('Error getting document:', error);
      });
  }, []);

  return (
    <>
      <div className='header bg-gradient-dark pb-8 pt-5 pt-md-8'>
        <Container fluid>
          <div className='header-body'>
            {/* Card stats */}
            <Row>
              <Col lg='6' xl='3'>
                <Card className='card-stats mb-4 mb-xl-0'>
                  <CardBody>
                    <Row>
                      <div className='col'>
                        <CardTitle
                          tag='h5'
                          className='text-uppercase text-muted mb-0'
                        >
                          Posture
                        </CardTitle>
                        <span className='h2 font-weight-bold mb-0'>
                          350,897
                        </span>
                      </div>
                      <Col className='col-auto'>
                        <div className='icon icon-shape bg-danger text-white rounded-circle shadow'>
                          <i className='fas fa-chart-bar' />
                        </div>
                      </Col>
                    </Row>
                    <p className='mt-3 mb-0 text-muted text-sm'>
                      <span className='text-success mr-2'>
                        <i className='fa fa-arrow-up' /> 3.48%
                      </span>{' '}
                      <span className='text-nowrap'>Since last month</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg='6' xl='3'>
                <Card className='card-stats mb-4 mb-xl-0'>
                  <CardBody>
                    <Row>
                      <div className='col'>
                        <CardTitle
                          tag='h5'
                          className='text-uppercase text-muted mb-0'
                        >
                          Accuracy
                        </CardTitle>
                        <span className='h2 font-weight-bold mb-0'>
                          {accuracy * 100}%
                        </span>
                      </div>
                      <Col className='col-auto'>
                        <div className='icon icon-shape bg-warning text-white rounded-circle shadow'>
                          <i className='fas fa-chart-pie' />
                        </div>
                      </Col>
                    </Row>
                    <p className='mt-3 mb-0 text-muted text-sm'>
                      <span className='text-success mr-2'>
                        <i className='fas fa-arrow-up' />
                      </span>
                      {' 3% '}
                      <span className='text-nowrap'>Since last week</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg='6' xl='3'>
                <Card className='card-stats mb-4 mb-xl-0'>
                  <CardBody>
                    <Row>
                      <div className='col'>
                        <CardTitle
                          tag='h5'
                          className='text-uppercase text-muted mb-0'
                        >
                          Sales
                        </CardTitle>
                        <span className='h2 font-weight-bold mb-0'>924</span>
                      </div>
                      <Col className='col-auto'>
                        <div className='icon icon-shape bg-yellow text-white rounded-circle shadow'>
                          <i className='fas fa-users' />
                        </div>
                      </Col>
                    </Row>
                    <p className='mt-3 mb-0 text-muted text-sm'>
                      <span className='text-warning mr-2'>
                        <i className='fas fa-arrow-down' /> 1.10%
                      </span>{' '}
                      <span className='text-nowrap'>Since yesterday</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg='6' xl='3'>
                <Card className='card-stats mb-4 mb-xl-0'>
                  <CardBody>
                    <Row>
                      <div className='col'>
                        <CardTitle
                          tag='h5'
                          className='text-uppercase text-muted mb-0'
                        >
                          Performance
                        </CardTitle>
                        <span className='h2 font-weight-bold mb-0'>49,65%</span>
                      </div>
                      <Col className='col-auto'>
                        <div className='icon icon-shape bg-info text-white rounded-circle shadow'>
                          <i className='fas fa-percent' />
                        </div>
                      </Col>
                    </Row>
                    <p className='mt-3 mb-0 text-muted text-sm'>
                      <span className='text-success mr-2'>
                        <i className='fas fa-arrow-up' /> 12%
                      </span>{' '}
                      <span className='text-nowrap'>Since last month</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
