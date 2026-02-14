import { useState, useEffect } from 'react'
import './App.css'
import Ask from './Ask';
import Celebration from './Celebration';

function App() {
  const [name, setName] = useState(null);
  const [recipientName, setRecipientName] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");

  const [yesTriggered, setYesTriggered] = useState(false);

  const handleOnYes = (e) => {
        setYesTriggered(true);
      }

  const generateLink = () => {
    const currentUrl = window.location.href.split("?")[0];
    const newUrl = `${currentUrl}?name=${encodeURIComponent(recipientName)}`;
    setGeneratedLink(newUrl);

  }

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
        <input onChange={(e)=>{setRecipientName(e.target.value)}} className="px-4 py-2 border border-yellow-100 rounded-lg outline-5 outline-red-300  focus:ring-5 focus:ring-pink-300 focus:border-pink-500 transition text-center font-sans"/>
        <br/>
        <div
          onClick={generateLink}
          className="px-6 py-2 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition"
        >💗 Generate 💗</div>
        {generatedLink && (
          <div className="mt-4 text-center">
            <p className="text-lg font-medium text-pink-700">Share this link with your crush:</p>
            <a href={generatedLink} className="text-blue-500 underline break-all">{generatedLink}</a>
          </div>
        )}
      </div>)
    }
    else {
      return (
        <div className='App' style={{display:'flex', justifyContent:'center',flexDirection:'column'}}>
          
          {!yesTriggered && <Ask name={name} onYes={handleOnYes}/>}
          {yesTriggered && <Celebration name={name} />}
        </div>
      )
    }

}

export default App
