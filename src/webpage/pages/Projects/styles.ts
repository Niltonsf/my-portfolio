import styled from "styled-components";

interface MediaQuery {
  largeDevices?: boolean;
  mediumDevices?: boolean;
  smallMediumDevices?: boolean;
  smallDevices?: boolean;
  toggleMenu?: boolean;
}

export const WorkContainer = styled.div.attrs({
  className: "container grid",
})<MediaQuery>`
  ${(props) => {
    let finalStyles = `
      grid-template-columns: repeat(2, max-content);
      gap: 3rem;
      justify-content: center;      
    `;
    if (props.smallMediumDevices) {
      finalStyles += `
      grid-template-columns: 0fr;      
    `;
    } else if (props.mediumDevices) {
      finalStyles += `
      grid-template-columns: max-content;
    `;
    } else if (props.largeDevices) {
      finalStyles += `
        gap: 1.25rem;
    `;
    }
    return finalStyles;
  }}
`;

export const WorkCard = styled.div<MediaQuery>`
  ${(props) => {
    let finalStyles = `
      width: 300px;
      background-color: var(--container-color);
      border: 1px solid rgba(0, 0, 0, 0.1);
      padding: 1.25rem;
      border-radius: 1rem;
    `;
    if (props.largeDevices) {
      finalStyles += `      
      padding: 1rem;
    `;
    }
    return finalStyles;
  }}
`;

export const WorkImage = styled.img<MediaQuery>`
  ${(props) => {
    let finalStyles = `
      width: 295px;
      height: 160px;
      object-fit: contain;
      border-radius: 1rem;
      margin-bottom: var(--mb-1);
    `;
    if (props.largeDevices) {
      finalStyles += `
      margin-bottom: 0.75rem;
    `;
    }
    return finalStyles;
  }}
`;

export const WorkTitle = styled.h3<MediaQuery>`
  ${(props) => {
    let finalStyles = `
      font-size: var(--normal-font-size);
      font-family: "SFMedium";
      margin-bottom: var(--mb-0-5);
    `;
    if (props.largeDevices) {
      finalStyles += `
      margin-bottom: 0.25rem;
      `;
    }
    return finalStyles;
  }}
`;

export const WorkFilters = styled.div<MediaQuery>`
  ${(props) => {
    let finalStyles = `
      display: flex;
      justify-content: center;
      align-items: center;
      column-gap: 0.75rem;
      margin-bottom: var(--mb-2);
    `;
    if (props.smallDevices) {
      finalStyles += `
        column-gap: 0.25rem;
      `;
    }
    return finalStyles;
  }}
`;
