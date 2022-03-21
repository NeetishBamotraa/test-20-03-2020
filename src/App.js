import React, { useState, useEffect } from 'react';
import './style.css';

import NavBar from './NavBar';

export default function App() {
  const [ridesData, setRidesData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState();

  useEffect(() => {
    fetch('https://assessment.api.vweb.app/rides')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setRidesData([...ridesData, data]);
      })
      .catch((error) => {
        console.log('Error while fetching data: ', error);
        setErrors((preverror) => errors + error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch('https://assessment.api.vweb.app/user')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setUserData([...ridesData, data]);
      })
      .catch((error) => {
        console.log('Error while fetching data: ', error);
        setErrors((preverror) => errors + error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {errors && <p>{errors}</p>}
      {!loading && userData && <NavBar userData={userData} />}
    </div>
  );
}
