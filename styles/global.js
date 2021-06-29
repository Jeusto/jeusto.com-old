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

          html {
            min-width: 356px;
          }
          ::-webkit-scrollbar {
            width: 1rem;
            background: #1c1c1c;
          }

          ::-webkit-scrollbar-thumb {
            background: #424242;
          }
        `}
      />
      {children}
    </>
  );
}
