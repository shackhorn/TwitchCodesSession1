"use client"

import { Cat } from "../app/cat-boom/page";

function catClicked(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const target = e.target as HTMLDivElement;
    target.style.opacity = "1";
    if(target.innerHTML !== "") return;
    target.innerHTML = `<audio
    autoPlay
    src="/vine-boom.mp3">
        Your browser does not support the
        <code>audio</code> element.
</audio>`
}
export default function Cat({ cat }: { cat: Cat}) {
    return (<div id={cat.id} key={cat.id} onClick={(e) => catClicked(e)} style={{
        background: `url("${cat.url}")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        opacity: 0,
        width: "200px",
        borderRadius:"10px",
        margin: "20px",
        height: "200px",
        backgroundRepeat: "no-repeat",
    }}></div>)
}