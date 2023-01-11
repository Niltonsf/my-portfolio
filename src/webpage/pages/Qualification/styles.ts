import styled from "styled-components";

interface MediaQuery {
  largeDevices?: boolean;
  mediumDevices?: boolean;
  smallMediumDevices?: boolean;
  smallDevices?: boolean;
  toggleMenu?: boolean;
}

export const QualificationContainer = styled.div.attrs({
  className: "container",
})<MediaQuery>`
  ${(props) => {
    let finalStyles = `
      max-width: 768px;
    `;
    if (props.mediumDevices) {
      finalStyles += `
      margin-left: var(--mb-1-5);
      margin-right: var(--mb-1-5);
  `;
    } else if (props.largeDevices) {
      finalStyles += `
        margin-left: auto;
        margin-right: auto;
    `;
    }
    return finalStyles;
  }}
`;

export const QualificationSections = styled.div<MediaQuery>`
  ${(props) => {
    let finalStyles = `
    display: grid;
    grid-template-columns: 0.5fr;
    justify-content: center;
  `;
    if (props.smallMediumDevices) {
      finalStyles += `
      grid-template-columns: initial;
`;
    }
    return finalStyles;
  }}
`;

export const QualificationDataContainer = styled.div<MediaQuery>`
  ${(props) => {
    let finalStyles = `
    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    column-gap: 1.5rem;
`;
    if (props.smallDevices) {
      finalStyles += `
    gap: 0.5rem;
`;
    }
    return finalStyles;
  }}
`;
