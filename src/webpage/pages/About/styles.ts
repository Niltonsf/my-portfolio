import styled from "styled-components";

interface MediaQuery {
  largeDevices?: boolean;
  mediumDevices?: boolean;
  smallMediumDevices?: boolean;
  smallDevices?: boolean;
  toggleMenu?: boolean;
}

export const AboutContainer = styled.div.attrs({
  className: "container grid",
})<MediaQuery>`
  ${(props) => {
    let finalStyles = `
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    column-gap: 4rem;
  `;
    if (props.largeDevices) {
      finalStyles += `        
        grid-template-columns: 1fr;
        row-gap: 2.5rem;

      `;
    }
    return finalStyles;
  }}
`;

export const AboutImage = styled.img<MediaQuery>`
  ${(props) => {
    let finalStyles = `
      width: 350px;
      border-radius: 1.5rem;
      justify-self: center;
    `;
    if (props.largeDevices) {
      finalStyles += `    
        width: 220px;        
      `;
    }
    return finalStyles;
  }}
`;

export const AboutData = styled.div<MediaQuery>`
  ${(props) => {
    let finalStyles = `    
    `;
    if (props.largeDevices) {
      finalStyles += `    
        text-align: center;
      `;
    }
    return finalStyles;
  }}
`;

export const AboutBox = styled.div<MediaQuery>`
  ${(props) => {
    let finalStyles = `   
      background-color: var(--container-color);
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 0.75rem;
      text-align: center;
      padding: 1rem 1.25rem; 
    `;
    if (props.largeDevices) {
      finalStyles += `    
       padding: 0.75rem 0.5rem;
    `;
    }
    return finalStyles;
  }}
`;

export const AboutInfo = styled.div.attrs({
  className: "grid",
})<MediaQuery>`
  ${(props) => {
    let finalStyles = `   
      grid-template-columns: repeat(3, 140px);
      gap: 0.5rem;
      margin-bottom: var(--mb-2);
    `;
    if (props.smallDevices) {
      finalStyles += `    
      grid-template-columns: repeat(2, 1fr);
     `;
    } else if (props.smallMediumDevices) {
      finalStyles += `    
       grid-template-columns: repeat(3, 1fr);
      `;
    } else if (props.largeDevices) {
      finalStyles += `    
        justify-content: center;
    `;
    }
    return finalStyles;
  }}
`;

export const AboutDescription = styled.p<MediaQuery>`
  ${(props) => {
    let finalStyles = `   
    padding: 0 4rem 0 0;
    margin-bottom: var(--mb-2-5);
  `;
    if (props.smallMediumDevices) {
      finalStyles += `    
        padding: 0;       
    `;
    } else if (props.largeDevices) {
      finalStyles += `    
      padding: 0 5rem;
      margin-bottom: 2rem;
  `;
    }
    return finalStyles;
  }}
`;
