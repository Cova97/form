import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Form from './form';


const root = ReactDOM.createRoot(document.getElementById('root'));

const Jsx = () => {
  return(
    <>
      <Form/>
    </>
  );
};

root.render(<Jsx/>)