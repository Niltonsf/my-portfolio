import styled from "styled-components";

interface MediaQuery {
  mediumDevices?: boolean;
  smallDevices?: boolean;
  toggleMenu?: boolean;
}

export const HeaderCP = styled.div<MediaQuery>`
  ${(props) => {
    let finalStyles = ``;
    finalStyles += `
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;        
        z-index: var(--z-fixed);
        background-color: var(--body-color);
    `;
    if (props.mediumDevices) {
      finalStyles += `        
        top: initial;
        bottom: 0;
      `;
    }
    return finalStyles;
  }}
`;

export const Nav = styled.nav.attrs({
  className: "container",
})`
  height: calc(var(--header-height) + 1.5rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 1rem;
`;

export const NavMenu = styled.div<MediaQuery>`
  ${(props) => {
    let finalStyles = ``;
    if (props.mediumDevices) {
      finalStyles += `
        position: fixed;
        bottom: ${props.toggleMenu ? 0 : `-100%`};
        left: 0;
        right: 0;        
        width: 100vw - 50px;
        background-color: var(--body-color);        
        padding: 2rem 1.5rem 4rem;        
        box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
        border-radius: 1.5rem 1.5rem 0 0;
        transition: 0.3s;        
      `;
    }
    if (props.smallDevices) {
      finalStyles += `
        padding: 2rem 0.25rem 4rem;        
      `;
    }
    return finalStyles;
  }}
`;

export const Ul = styled.ul<MediaQuery>`
  ${(props) => {
    let finalStyles = ``;
    finalStyles += `
      display: flex;     
      column-gap: 2rem;      
      padding: 0;
    `;
    if (props.mediumDevices) {
      finalStyles += `
       display: grid;
       grid-template-columns: repeat(3, 1fr);   
       gap: 2rem;
       column-gap: 2rem
    `;
    }
    if (props.smallDevices) {
      finalStyles += `
        column-gap: 0;
      `;
    }
    return finalStyles;
  }}
`;

export const CloseIcon = styled.i.attrs({
  className: "uil uil-times nav_close",
})<MediaQuery>`
  ${(props) => {
    if (props.smallDevices) {
    } else if (props.mediumDevices) {
      return `
        display: block;
        position: absolute;
        right: 1.3rem;
        bottom: 0.5rem;
        font-size: 1.5rem;
        cursor: pointer;
      `;
    }
    return `
      display: none;
    `;
  }}
`;
