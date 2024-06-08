// src/components/AboutUs.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AboutUs = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/about'); // Change URL accordingly
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>About Us Page</h1>
      {data && <p>{data.content}</p>}
    </div>
  );
}

export default AboutUs;