import { Global, css } from "@emotion/react";

// Regroup and export global styles
export default function GlobalStyle({ children }) {
  return (
    <>
      <Global
        styles={css`
          html,
          body {
            overflow-x: hidden;
            max-width: 100vw;
            margin: 0;
            padding: 0;
          }
          .project_card {
            transition: transform 0.3s ease-out;
            display: inline-block;
          }
          .project_card:hover {
            transform: translate(0, -5px);
          }

          ${scrollbar}
          ${heading}
          ${squircle}
          ${navbar_links}
        `}
      />
      {children}
    </>
  );
}

// Styles
const scrollbar = `
::-webkit-scrollbar {
  width: 1rem;
  background: #1c1c1c;
}
::-webkit-scrollbar-thumb {
  background: #424242;
}
`;

const heading = `
.gradient_heading {
  width: fit-content;
  color: #fff;
  background: linear-gradient(
    271deg,
    #a0e9ff 5%,
    #a162e8 50%,
    #f093b0 70%,
    #edca85 94%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.gradient_text1 {
  width: fit-content;
  color: #fff;
  background: linear-gradient(
    271deg,
    #f093b0 0%,
    #edca85 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.gradient_text2 {
  width: fit-content;
  color: #fff;
  background: linear-gradient(
    271deg,
  #a0e9ff 0%,
  #a162e8 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
`;

const squircle = `
.defs {
  position: absolute;
  width: 0;
  height: 0;
}
.squircle {
  width: 90vmin;
  height: 90vmin;
  clip-path: url(#squircle);
}`;

const navbar_links = `
.link {
  font-size: 20px;
  position: relative;
  text-decoration: none;
}
.link:before,
.link:after {
  content: "";
  position: absolute;
  width: 75%;
  margin: auto;
  left: 0;
  right: 0;
  bottom: 0px;
  height: 3px;
  background-color: red;
}
.link:before {
  opacity: 0;
  transform: translateY(10px);
  transition: transform 0s cubic-bezier(0.175, 0.885, 0.32, 1.275),
    opacity 0s;
}
.link:after {
  opacity: 0;
  transform: translateY(10px);
  transition: transform 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275),
    opacity 200ms;
}
.link:hover:before,
.link:focus:before,
.link:hover:after,
.link:focus:after {
  opacity: 1;
  transform: translateY(0) rotate(2deg) scale(1.1);
}
.link:hover:before,
.link:focus:before {
  transition: transform 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275),
    opacity 200ms;
}
.link:hover:after,
.link:focus:after {
  transition: transform 0s 200ms
      cubic-bezier(0.175, 0.885, 0.32, 1.275),
    opacity 0s 200ms;
}
.link--about:before,
.link--about:after {
  background-color: #edca85;
}
.link--about:hover:before,
.link--about:focus:before,
.link--about:hover:after,
.link--about:focus:after {
  opacity: 1;
  transform: translateY(0) rotate(1.5deg) scale(1.1);
}
.link--featured:before,
.link--featured:after {
  background-color: #f093b0;
}
.link--featured:hover:before,
.link--featured:focus:before,
.link--featured:hover:after,
.link--featured:focus:after {
  opacity: 1;
  transform: translateY(0) rotate(-1.5deg) scale(1.1);
}
.link--projects:before,
.link--projects:after {
  background-color: #a162e8;
}
.link--projects:hover:before,
.link--projects:focus:before,
.link--projects:hover:after,
.link--projects:focus:after {
  opacity: 1;
  transform: translateY(0) rotate(1.5deg) scale(1.1);
}
.link--contact:before,
.link--contact:after {
  background-color: #a0e9ff;
}
.link--contact:hover:before,
.link--contact:focus:before,
.link--contact:hover:after,
.link--contact:focus:after {
  opacity: 1;
  transform: translateY(0) rotate(-1.5deg) scale(1.1);
}`;
