import styled from 'styled-components';

export const MarkDownDefaultStyle = styled.div`
    padding: 1.5rem;
    line-height: 2;
    max-width: 800px;
    margin: 0 auto;
    padding-bottom: 10rem;

    h1 {
        font-size: 2em;
        font-weight: bold;
        margin: 0.67em 0;
    }

    h2 {
        font-size: 1.5em;
        font-weight: bold;
        margin: 0.75em 0;
    }

    p {
        font-size: 1em;
        margin: 1em 0;
    }

    img {
        max-width: 100%;
    }

    ul {
        list-style-type: disc;
        margin: 1em 0;
        padding-left: 40px;
    }

    li {
        margin: 0.5em 0;
    }
`;