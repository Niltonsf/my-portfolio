import styled from "styled-components";

interface MediaQuery {
  largeDevices?: boolean;
  mediumDevices?: boolean;
  smallMediumDevices?: boolean;
  smallDevices?: boolean;
  toggleMenu?: boolean;
}

export const ContactContainer = styled.div.attrs({
  className: "container",
})<MediaQuery>`
  ${(props) => {
    let finalStyles = `
    flex: 1;            
    padding-bottom: 3rem;
  `;
    if (props.mediumDevices) {
      finalStyles += `
        grid-template-columns: 1fr;
        row-gap: 3rem;
      `;
    } else if (props.largeDevices) {
      finalStyles += `
        column-gap: 3rem;
      `;
    }
    return finalStyles;
  }}
`;

export const ContactInfo = styled.div<MediaQuery>`
  ${(props) => {
    let finalStyles = `
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;      
    `;
    if (props.smallMediumDevices) {
      finalStyles += `
      flex-direction: column;
      `;
    } else if (props.mediumDevices) {
      finalStyles += `
        flex-direction: column;
      `;
    }
    return finalStyles;
  }}
`;

export const ContactForm = styled.form<MediaQuery>`
  ${(props) => {
    let finalStyles = `
      width: 360px;
    `;
    if (props.smallMediumDevices) {
      finalStyles += `
      width: 100%;
  `;
    } else if (props.mediumDevices) {
      finalStyles += `
      margin: 0 auto;
  `;
    }
    return finalStyles;
  }}
`;
