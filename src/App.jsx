import { useState, useEffect } from 'react'
import './App.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col, Card } from "react-bootstrap";


function App() {
  const [name, setName] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const personName = params.get("name");
    console.log("Person Name from URL:", personName);
    if (personName) setName(personName);
  }, []);


    if (!name) {
      return (
      <div className='App' style={{display:'flex',    flexDirection:'column'}}>
        <h1 className="text-3xl font-bold text-center text-pink-600 my-4">
          Tell us your crush's name!
        </h1>
        <input className="px-4 py-2 border border-yellow-100 rounded-lg outline-5 outline-red-300  focus:ring-5 focus:ring-pink-300 focus:border-pink-500 transition"/>
        <br/>
        <Button variant="primary" className='button'>Submit</Button>
      </div>)
    }

}

export default App
