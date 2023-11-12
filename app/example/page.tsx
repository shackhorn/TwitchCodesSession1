
import { NextPage } from 'next';
import React from 'react';
import Attrib from '../../components/Attrib';


const Page: NextPage = () => {
    return <>
    <h1 className="text-2xl">Hello World!</h1>
    <p>This is an example page.</p>
    </>;
};

export default function PageMain() {
    return (<>

    <Attrib/>
    <div className="silly-app-container">
        <Page/>
    </div>
    </>)
};
