import styled from "styled-components";

interface MediaQuery {
  largeDevices?: boolean;
  mediumDevices?: boolean;
  smallMediumDevices?: boolean;
  smallDevices?: boolean;
  toggleMenu?: boolean;
}

export const SkillsContainer = styled.div.attrs({
  className: "container grid",
})<MediaQuery>`
  ${(props) => {
    let finalStyles = `
    grid-template-columns: repeat(2, 350px);
    column-gap: 3rem;
    justify-content: center;
  `;
    if (props.smallMediumDevices) {
      finalStyles += `        
      grid-template-columns: max-content;
      row-gap: 2rem;
    `;
    } else if (props.largeDevices) {
      finalStyles += `
      grid-template-columns: 1fr;      
    `;
    }
    return finalStyles;
  }}
`;

export const SkillsContent = styled.div<MediaQuery>`
  ${(props) => {
    let finalStyles = `
      background-color: var(--container-color);
      border: 1px solid rgba(0, 0, 0, 0.1);
      padding: 2rem 4rem;
      border-radius: 1.25rem;
    `;
    if (props.smallMediumDevices) {
      finalStyles += `        
        padding: 1.5rem;
      `;
    }
    return finalStyles;
  }}
`;

export const SkillsBox = styled.div<MediaQuery>`
  ${(props) => {
    let finalStyles = `
      display: flex;
      justify-content: center;
      column-gap: 2.5rem;
    `;
    if (props.smallDevices) {
      finalStyles += `        
      column-gap: 1.25rem;
    `;
    }
    return finalStyles;
  }}
`;

export const SkillsName = styled.h3<MediaQuery>`
  ${(props) => {
    let finalStyles = `
      font-size: var(--normal-font-size);
      font-family: "SFMedium";
      margin-top: -1px;
      margin-bottom: -1px;
      line-height: 18px;
    `;
    if (props.smallDevices) {
      finalStyles += `        
        font-size: var(--small-font-size);
      `;
    }
    return finalStyles;
  }}
`;
