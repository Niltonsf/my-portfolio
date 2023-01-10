import styled from "styled-components";

interface MediaQuery {
  largeDevices?: boolean;
  mediumDevices?: boolean;
  smallMediumDevices?: boolean;
  smallDevices?: boolean;
  toggleMenu?: boolean;
}

export const ContactContainer = styled.div.attrs({
  className: "container grid",
})<MediaQuery>`
  ${(props) => {
    let finalStyles = `
    grid-template-columns: repeat(1, max-content);
    justify-content: center;
    column-gap: 6rem;
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
    grid-template-columns: 1fr 1fr; 
`;
    if (props.smallMediumDevices) {
      finalStyles += `
      grid-template-columns: 1fr;
    `;
    } else if (props.mediumDevices) {
      finalStyles += `
      justify-content: center;
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
