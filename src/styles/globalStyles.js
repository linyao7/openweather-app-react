import { createGlobalStyle } from 'styled-components';

import bgLight from '../assets/images/bg-light.png';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700&display=swap');
    :root {
        --text-primary: #000000;
        --text-secondary:#666666;

        --font-accent: 700;
    }
    
    * {
        font-family: 'Noto Sans', sans-serif;
        box-sizing: border-box;
    }

    body {
        background-image: url(${bgLight});
        color: var(--text-primary);
        margin: 0;
        padding: 0;

        @media (max-width: 480px) {
            font-size: 12px;
        }
    }
`;

export default GlobalStyle;
