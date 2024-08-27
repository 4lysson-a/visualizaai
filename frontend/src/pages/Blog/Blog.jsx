import React from "react";
import Post1 from "./posts/v0.3.0.mdx";
import { MarkDownDefaultStyle } from "./Style/MarkdownDefaultStyle";
import { useNavigate } from "react-router-dom";
import { BottomShadow } from "./Style/BottomShadow";

function Options() {
    const router = useNavigate();

    const handleClick = () => {
        // back to previous page
        router(-1);
    };

    return (
        <>
            <button
                onClick={handleClick}
                className="fixed z-10 text-primary animate-fade font-bold transition-all active:scale-90 bottom-0 left-[30%] w-[calc(100%_-_70%)] rounded-full h-12 bg-card m-5"
            >
                Entendi
            </button>
            <BottomShadow />
        </>
    );
}

export default function Blog() {
    return (
        <div className="h-full">
            <MarkDownDefaultStyle>
                <Post1 />
            </MarkDownDefaultStyle>
            <Options />
        </div>
    );
}
