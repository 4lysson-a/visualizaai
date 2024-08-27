import React from "react";

export const Template = ({ ...rest }) => {
    return <div>{rest.children}</div>;
};

export const Video = ({ src }) => (
    <video controls={false} autoPlay loop muted className="rounded-lg shadow-lg border-4 border-card">
        <source className="rounded-xl" src={src} type="video/mp4" />
    </video>
);

export const Link = ({ href, children }) => (
    <a href={href} className="text-primary underline hover:underline" target="_blank" rel="noopener noreferrer">
        {children}
    </a>
);

export const Separator = () => <hr className="border-gray-300 py-10" />;