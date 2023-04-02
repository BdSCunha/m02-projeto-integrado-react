import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { createGlobalStyle, ThemeProvider } from 'styled-components'

import theme from '../src/themes/theme'

const GlobalStyle = createGlobalStyle`
    /* https://styled-components.com/docs/faqs#note-regarding-css-import-and-createglobalstyle */

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
        background-color: ${({ theme }) => theme.gray};
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
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <App />
        </ThemeProvider>
    </React.Fragment>
)
