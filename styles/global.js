import { Global, css } from "@emotion/react";

export default function GlobalStyle({ children }) {
  return (
    <>
      <Global
        styles={css`
          ::selection {
            background-color: #5395c9;
            color: #fefefe;
          }
          ::-webkit-scrollbar {
            width: 1rem;
            background: #1c1c1c;
          }
          ::-webkit-scrollbar-thumb {
            background: #424242;
          }
          h1 {
            width: 55rem;
            font-size: 64px;
            letter-spacing: -1px;
            color: #fff;
            background: linear-gradient(
              271deg,
              #a0e9ff 30%,
              #a162e8 50%,
              #f093b0 70%,
              #edca85 94%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          * {
            box-sizing: border-box;
          }
          .defs {
            position: absolute;
            width: 0;
            height: 0;
          }

          .squircle {
            width: 90vmin;
            height: 90vmin;
            clip-path: url(#squircle);
          }
        `}
      />
      {children}
    </>
  );
}
