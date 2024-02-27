import React, { useState, useEffect } from 'react';
import CreateingComponent from './CreateingComponent';

const App = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = () => {
  //     const storedData = localStorage.getItem('homepageData');
  //     if (storedData) {
  //       setData(JSON.parse(storedData));
  //     }
  //   };

  //   fetchData();
  // }, []);

  // const updateData = (newData) => {
  //   localStorage.setItem('homepageData', JSON.stringify(newData));
  //   setData(newData);
  // };

  return (
    <div>
      <CreateingComponent />
    </div>
  );
};

export default App;
