"use client";

import { usePathname } from "next/navigation";
import { Viewer } from "../app/layout";

export default function Attrib({ viewerData }: { viewerData: Viewer[] }) {
    const pathname = usePathname()
    const viewer = viewerData.find((viewer) => viewer.pageSlug == pathname.replace("/", ""));
    if(pathname == "/") return null;
    return (
        <div className="fixed bottom-0 right-0 z-50 p-4 m-4 text-sm text-gray-500 bg-white rounded-lg shadow-lg dark:bg-neutral-900/50 dark:text-neutral-100" >
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">

                <span>
                    <span>✏️🦊</span><span className="font-extralight">Twitch Codes Session Note</span>
                    <br />This site was created from a viewer suggestion for <a className="font-black" href="https://pnfx.dev">Pencil Fox</a>'s "Twitch Codes" series!{' '}
                    <br /><span className="font-thin">Thanks {viewer ?`${viewer.viewerName} `: ""}for the {viewer?(viewer.ideaURL?
                    <a className="font-bold" href={viewer.ideaURL}>
                        idea
                    </a>
                    :<>idea</>):<></>}!</span>

                </span>
            </div>
        </div>
    </div>
    )
}