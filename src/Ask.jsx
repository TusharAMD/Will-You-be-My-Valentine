import React, { useState, useRef } from 'react';

function Ask(name) {

    const [stage, setStage] = useState(0);
    const noButtonRef = useRef(null);
    const yesButtonRef = useRef(null);

    const handleHover = () => {
        if (stage === 0) {
            alert("Won't let you click that 😜");
            setStage(1);
        }
        if (stage === 1) {
            alert("Still won't let you click that 😜");
            setStage(2);
        }
        if (stage === 3) {
            
        }
    };
  return (
    <div className='Ask'>
        <h1 className="text-3xl font-bold text-center text-pink-600 my-4">
            Will you be my Valentine, {name.name}?
        </h1>
        <div ref={yesButtonRef} className="flex justify-center gap-4 mt-6">
          <div className="px-6 py-2 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition">
            Yes 💖
          </div>
          <div ref={noButtonRef} onClick={handleHover} onMouseEnter={handleHover} className="px-6 py-2 bg-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-400 transition">
            No 💔
          </div>
        </div>
    </div>
    )
}
export default Ask