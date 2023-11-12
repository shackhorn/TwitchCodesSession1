
import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import Attrib from '../../components/Attrib';
import Cat from '../../components/Cat';


export interface Cat {
    id: string;
    url: string;
    width: number;
    height: number;
}


async function getData(): Promise<Cat[] | null> {
    const res = await fetch('https://api.thecatapi.com/v1/images/search?limit=9', {cache: "reload"})
    if (!res.ok) {
        // Coding sin redeemed by Jack_The_Insomniac_
        try {
            2 + 2
        } catch (error) {
            throw error;
        }
        // The above is a joke. Please don't do this because it's useless and makes your code harder to read.
        return null
    }
    return res.json()
}


async function Page() {
    let cats = await getData();
    if (cats) {
        cats = cats.splice(1)
    }

    return (
        <>
            <span style={{ textAlign: "center", paddingBottom: "20px"}}>
                <h1 className="text-3xl">Silly Cat Game</h1>
                <p>Click on random spots within the square and be amazed!!!!
                    <br/>
                    ⚠️ Warning: This will be very loud. ⚠️
                    <br/>
                </p>
                <br/>
            </span>

            <div style={{ display: "flex", justifyContent: "center", }}>

                <div className="grid grid-cols-3" style={{ justifyContent: "center", border: "5px solid rgba(100, 153, 0, 0.516)", borderRadius: "10px" }}>
                    {cats ? (
                        cats.map((cat) => (
                            <Cat cat={cat} />
                        ))
                    ) : <><p>Sorry. I couldn't get the cats.</p></>}
                </div>
            </div>
        </>

    )
    // return (
    //     <>
    //     {cats ? (
    //         cats.map((cat) => (<><span>
    //             <img src={cat.url} alt="cat" />
    //         </span><br/></>))
    //         ) : <><p>Sorry. I couldn't get the cats.</p></>}
    //     </>
    // );
}

export default function PageMain() {
    return (<>

        <Attrib />
        <div className="silly-app-container" >
            <Page />
        </div>
    </>)
};
