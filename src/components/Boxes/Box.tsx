import React, { ReactElement, useRef, useState } from "react";

export type TButton = {
    text: string,
    icon: JSX.Element,
    url?: string,
    border: string,
    content?: ReactElement
}

const openInNewTab = (url?: string): void => {
    if (!url)
        return;
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}

const BoxContent: React.FC = ({ children }) => (<div className='border-t border-zinc-500 p-3'>{children}</div>)

const Box: React.FC<TButton> = ({ text, icon, border, content, url }) => {

    const [open, setOpen] = useState(false);
    const boxRef = useRef<HTMLInputElement>(null)

    return (
        <div
            ref={boxRef}
            className={`card bg-zinc-800 shadow-xl cursor-pointer border border-zinc-800 ${border} rounded transition-all duration-200`}
        >
            <div className={`card-body flex-row gap-4 justify-center items-center`} onClick={() => { content ? setOpen(!open) : openInNewTab(url) }}>
                <div className={`border border-zinc-700 rounded p-4`}>{icon}</div>
                <span style={{ width: '85%', textAlign: 'left' }}>{text}</span>
            </div>
            <div className="transition-all duration-200" style={{ maxHeight: `${open ? (boxRef.current?.scrollHeight ?? 0) + 5 : 0}px`, opacity: +open }}>
                {content ? <BoxContent>{content}</BoxContent> : ''}
            </div>
        </div>
    );
}

export { Box, BoxContent };