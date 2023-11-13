"use client"
import { NextPage } from 'next';
import React, { MutableRefObject, ReactElement, useEffect } from 'react';
import Attrib from '../../components/Attrib';




const Page = () => {
    const [yippeeX, setYippeeX] = React.useState(0);
    const [yippeeY, setYippeeY] = React.useState(0);
    function yippeeClicked() {
        // Set Yippee to a random position
        setYippeeX(Math.floor(Math.random() * 90));
        setYippeeY(Math.floor(Math.random() * 90));
        // Play yippee sound
        const audio = new Audio("/yippee.mp3");
        audio.play();
        audio.volume = 0.25;
        console.log("Yippee")
   
    }
    function handleKeyPress(ev: KeyboardEvent) {
        if (ev.key === "y") {
            yippeeClicked();
            console.log("Yippee")
        }
    }
    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
    
        return () => {
          window.removeEventListener("keydown", handleKeyPress);
        };
      }, []);



    function YippeeButton() {
        return <a onClick={() => yippeeClicked()}  className="text-9xl justify-content-center" style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">YIPPEE</button></a>;
    }
    return <>
        <span style={{ textAlign: "center", paddingBottom: "20px" }}>
            <h1 className="text-2xl">The yippee button.</h1>
            <p>Press <a className="font-black">[YIPPEE]</a> to yippee.</p>
            <p>Hold <a className="font-black">[Y]</a> on your keyboard to enter Yippee hyperdrive!</p>

        </span>
        {/** If Y is held down, 
         * 1. Play yippee sound
         * 2. Set Yippee to a random position
         * 3. Repeat until Y is released
         */}

        <YippeeButton />
        <img style={{ position: "absolute", left: `${yippeeX}%`, top: `${yippeeY}%`, mixBlendMode: "difference", filter: "invert(1)" }} src="/yippee.png" alt="yippee" width="100" height="100" />


    </>;
};

export default function PageMain() {
    /* pass silly-app-container to Page */
    return (<>
        <div className="silly-app-container">
        <Page />
        </div>



        <Attrib />

    </>)
};
