import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    /* https://styled-components.com/docs/faqs#note-regarding-css-import-and-createglobalstyle */

    :root {
        --primary: rgba(1, 113, 175, 1);
        --primary-outlined: rgba(1, 113, 175, 0.5);
        --secondary: rgba(186, 143, 149, 1);
        --secondary-outlined: rgba(186, 143, 149, 0.5);
        --dark-gray: rgba(114, 115, 117, 1);
        --gray: rgba(215, 219, 221, 1);
        --light-gray: rgba(234, 234, 234, 1);
        --white: rgba(255, 255, 255, 1);
        --font-regular: 400;
        --font-medium: 500;
        --font-bold: 700;
        --spacing-1: 2px;
        --spacing-2: 4px;
        --spacing-3: 8px;
        --spacing-4: 16px;
        --spacing-5: 24px;
        --spacing-6: 32px;
        --spacing-7: 40px;
        --spacing-8: 48px;
        --spacing-9: 56px;
        --spacing-10: 64px;
        --border-radius-1: 10px;
        --border-radius-2: 40px;
        --border-radius-3: 50px;
    }

    html, body, div, header, main, footer, ul, ol, li, h1, h2, h3, h4, h5, h6, p, span {
        margin: 0;
        border: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    body {
        min-height: 100vh;
        font-family: sans-serif;
        background-color: var(--gray);
        font-family: 'Inter', sans-serif;
    }

    #root {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
`

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.Fragment>
        <GlobalStyle />
        <App />
    </React.Fragment>
)
