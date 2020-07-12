import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;500;700&display=swap');
  
  :root {
    --black: #11151c;
    --dark-blue: #0b2027;
    --light-blue: #40798c;
    --light-green: #70a9a1;
    --font: 'Oswald', sans-serif;
    --radius: 8px;
  }

  body {
    font-family: var(--font);
    width: 100%;
    height: 100%;
    background-color: var(--light-blue);
  }
  a, abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, canvas, caption, cite, code, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, html, i, iframe, img, ins, kbd, label, legend, li, mark, menu, nav, object, ol, output, p, pre, q, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-weight: inherit;
    vertical-align: baseline;
}
a {
    text-decoration: none;
    color: #000;
    cursor: pointer;
}
button, input, select, textarea {
    outline: 0;
    margin: 0;
    padding: 0;
    border: 1px solid #f2f2f2;
    background-color: #fff;
}
`;