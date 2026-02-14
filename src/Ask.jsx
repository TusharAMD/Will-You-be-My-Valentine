import React, { useState, useRef } from 'react';
import loading from './assets/loading.gif';

function Ask({name, onYes}) {

    const [stage, setStage] = useState(0);
    const noButtonRef = useRef(null);
    const yesButtonRef = useRef(null);
    const brickImageRef = useRef(null);
    const loadingImg = useRef(null);

    const [numberOfHovers, setNumberOfHovers] = useState(0);
    const [trollMsg, setTrollMsg] = useState("");

    const handleHover = () => {
        if (stage === 0) {
            alert("Won't let you click that 😜");
            setStage(1);
        }
        if (stage === 1) {
            alert("Still won't let you click that 😜");
            setStage(2);
        }
        if (stage === 2) {

            console.log("Stage 3: Moving the No button");
            const btn = noButtonRef.current;
            if (btn) {
                btn.style.position = "relative";
                btn.style.left = `${Math.floor(Math.random() * 200)}px`;
                btn.style.top = `${Math.floor(Math.random() * 200)}px`;
            }
            setNumberOfHovers(numberOfHovers + 1);
            if (numberOfHovers >= 3) {
                setStage(3);
                setNumberOfHovers(0);
            }
        }
        if (stage === 3) {
            const btn = noButtonRef.current;
            const brick = brickImageRef.current;
            if (btn && brick) {

                const rect = btn.getBoundingClientRect();
                const parentRect = btn.parentElement.getBoundingClientRect();

                const left = rect.left - parentRect.left;
                const top = rect.top - parentRect.top;

                brick.style.left = `${left}px`;
                brick.style.top = `${top}px`;

                brick.style.display = "block";
            }

            btn.style.display = "none"; 

            setTimeout(() => {
                brick.style.display = "none";
                btn.style.display = "block";
                setStage(4);
            }, 3000);
            
        }
        if (stage === 4) {
            const btn = noButtonRef.current;
            if (btn) {
  
                const originalText = "No 💔";
                const originalBg = "#d1d5db"; 
                const originalColor = "#374151";

                btn.textContent = "Yes 💖";
                btn.style.backgroundColor = "#ec4899"; 
                btn.style.color = "white";
                btn.style.display = "inline-flex";

                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.backgroundColor = originalBg;
                    btn.style.color = originalColor;
                }, 3000);
            }
            setStage(5);
        }

        if(stage === 5) {
            
            let x = Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000;
            setTrollMsg(`${x} clicks to go!`);
            setNumberOfHovers(numberOfHovers + 1);
            if(numberOfHovers > 10) {
                setStage(6);
                setTrollMsg("")
            }
        }

        if (stage === 6) {
            const overlay = document.createElement("div");
            overlay.style.position = "fixed";
            overlay.style.top = "0";
            overlay.style.left = "0";
            overlay.style.width = "100%";
            overlay.style.height = "100%";
            overlay.style.backgroundImage = "url('https://i.dell.com/sites/csimages/App-Merchandizing_esupport_flatcontent_global_Images/all/bluescreen.png')";
            overlay.style.backgroundSize = "cover";
            overlay.style.backgroundPosition = "center";
            overlay.style.zIndex = "9999";
            overlay.style.display = "flex";
            overlay.style.alignItems = "center";
            overlay.style.justifyContent = "center";

            document.body.appendChild(overlay);

            // Remove it after 5 seconds
            setTimeout(() => {
                document.body.removeChild(overlay);
                setStage(7); 
            }, 5000);
        }

        if (stage === 7) {
            loadingImg.current.style.display = "block";
            setTimeout(() => {
                loadingImg.current.style.display = "None";
                setStage(8); 
            }, 5000);
        }

        if (stage === 8) {
            noButtonRef.current.style.display = "none";
        }



    };
  return (
    <div className='Ask' style={{display:'flex', justifyContent:'center',flexDirection:'column', alignItems:'center'}}>
        <h1 className="text-3xl font-bold text-center text-pink-600 my-4">
            Will you be my Valentine, {name}?
        </h1>
        <div ref={yesButtonRef} className="flex justify-center gap-4 mt-6">
          <div onClick={(e)=>{onYes(e)}} className="px-6 py-2 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition text-center items-center justify-center flex">
            Yes 💖
          </div>
          <div ref={noButtonRef} onClick={handleHover} onMouseEnter={handleHover} className="px-6 py-2 bg-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-400 transition">
            No 💔
          </div>
          <div><img ref={brickImageRef} style={{display:"none", width:"10em", height:"10em"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Background_brick_wall.jpg/960px-Background_brick_wall.jpg" alt="Heart GIF" className="w-16 h-16 ml-4" />
          </div>
          
        </div>
        <div style={{display:"None"}} ref={loadingImg}><br/><img src={loading}/></div>
        <p className="text-center text-red-500 mt-4 font-medium">{trollMsg}</p>
    </div>
    )
}
export default Ask