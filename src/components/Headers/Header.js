import React, { useEffect, useState } from 'react';
import firebase from '../../Firebase';

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from 'reactstrap';

const Header = () => {
  const db = firebase.firestore();

  const [accuracy, setAccuracy] = useState(0);
  const [gender, setGender] = useState('');
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [injury, setInjury] = useState('');
  useEffect(() => {
    var docRef = db.collection('users').doc('twnVnizY2DJk2UtXlZMv');
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          setAccuracy(doc.data().accuracy);
          setGender(doc.data().gender);
          setAge(doc.data().age);
          setHeight(doc.data().height);
          setInjury(doc.data().injury);
        } else {
          // doc.data() will be undefined in this case
          console.log('No such document!');
        }
      })
      .catch((error) => {
        console.log('Error getting document:', error);
      });
  }, []);
  function capitalize(s) {
    return s ? s[0].toUpperCase() + s.slice(1) : '';
  }
  return (
    <>
      <div
        className='header pb-8 pt-5 pt-md-8'
        style={{ backgroundColor: 'black' }}
      >
        <Container fluid>
          <div className='header-body'>{/* Card stats */}</div>
        </Container>
      </div>
    </>
  );
};

export default Header;
