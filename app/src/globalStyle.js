import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
    font-family: "Galmuri9", sans-serif !important;
}

* {
    user-select: none;
}

:root {
    --font-family: "Galmuri11", system-ui, sans-serif !important;
}
`

export default GlobalStyle