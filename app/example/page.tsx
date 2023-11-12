
import { NextPage } from 'next';
import React from 'react';
import Attrib from '../../components/Attrib';

const Page: NextPage = () => {
    return <div>Hello World!</div>;
};

export default function PageMain() {
    return (<>

    <Attrib/>
    <Page/>
    </>)
};
