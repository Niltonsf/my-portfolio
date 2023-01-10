import styled from "styled-components";

interface MediaQuery {
  matches: boolean;
}

export const HeaderCP = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-fixed);
  background-color: var(--body-color);
`;

export const Nav = styled.nav`
  height: calc(var(--header-height) + 1.5rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 1rem;
  max-width: 968px;
  margin-left: auto;
  margin-right: auto;
`;

export const NavMenu = styled.div<MediaQuery>`
  ${(props) => {
    if (props.matches) {
      return `
        position: fixed;
        bottom: 0;
        left: 0;
        width: 70vw;
        background-color: var(--body-color);
        padding-top: 2rem;
        padding: 2rem 1.5rem 4rem;
        box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
        border-radius: 1.5rem 1.5rem 0 0;
        transition: 0.3s;        
      `;
    }
    return ``;
  }}
`;

export const Ul = styled.ul<MediaQuery>`
  ${(props) => {
    if (props.matches) {
      return `
       display: grid;
       grid-template-columns: repeat(3, 1fr);   
       gap: 2rem;
    `;
    }
    return ``;
  }}
`;

export const CloseIcon = styled.i.attrs({
  className: "uil uil-times nav_close",
})<MediaQuery>`
  ${(props) => {
    if (props.matches) {
      return `
        display: block;
        position: absolute;
        right: 1.3rem;
        bottom: 0.5rem;
        font-size: 1.5rem;
        cursor: pointer;
      `;
    }
    return ``;
  }}
`;
