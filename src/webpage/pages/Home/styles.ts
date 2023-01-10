import styled from "styled-components";
import ProfileImg from "../../../assets/profile.jpg";

interface MediaQuery {
  largeDevices?: boolean;
  mediumDevices?: boolean;
  smallMediumDevices?: boolean;
  smallDevices?: boolean;
  toggleMenu?: boolean;
}

export const HomeContainer = styled.div.attrs({
  className: "container grid",
})<MediaQuery>`
  row-gap: 7rem;
`;

export const HomeContent = styled.div.attrs({
  className: "grid",
})<MediaQuery>`
  ${(props) => {
    let finalStyles = `
      grid-template-columns: 116px repeat(2, 1fr);
      padding-top: 5.5rem;
      column-gap: 2rem;
      align-items: center;
    `;
    if (props.mediumDevices) {
      finalStyles += `        
        grid-template-columns: 0.5fr 3fr;
        padding-top: 3.5rem;        
      `;
    } else if (props.largeDevices) {
      finalStyles += `
        grid-template-columns: 100px repeat(2, 1fr);
        column-gap: 1.25rem
      `;
    }
    return finalStyles;
  }}
`;

export const HomeSubtitle = styled.h3<MediaQuery>`
  ${(props) => {
    let finalStyles = `
      position: relative;
      font-size: var(--h3-font-size);
      padding-left: 5.4rem;
      margin-bottom: var(--mb-1);

      &:before {
        content: "";
        position: absolute;
        width: 70px;
        height: 1px;
        background-color: var(--text-color);
        left: 0;
        top: 0.75rem;
      }
  `;
    if (props.largeDevices) {
      finalStyles += `        
        padding-left: 3.75rem;
        margin-bottom: var(--mb-1);     

        &:before {          
          width: 42px;          
          top: 0.8rem;
        }
    `;
    }
    return finalStyles;
  }}
`;

export const HomeDescription = styled.p<MediaQuery>`
  ${(props) => {
    let finalStyles = `
      max-width: 400px;
      margin-bottom: var(--mb-3); 
    `;
    if (props.largeDevices) {
      finalStyles += `        
        max-width: initial;
        margin-bottom: var(--mb-2-5)
      `;
    }
    return finalStyles;
  }}
`;

export const HomeImg = styled.div<MediaQuery>`
  ${(props) => {
    let finalStyles = `
      background: url(${ProfileImg});
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      box-shadow: inset 0 0 0 9px rgb(255 255 255 / 30%);
      order: 1;
      justify-content: center;
      width: 300px;
      height: 300px;
      animation: profile_animate 8s ease-in-out infinite 1s;
   `;
    if (props.smallDevices) {
      finalStyles += `                
        order: initial;
        justify-self: initial;
        box-shadow: inset 0 0 0 6px rgb(255 255 255 / 30%);
        width: 180px;
        height: 180px;
      `;
    } else if (props.mediumDevices) {
      finalStyles += `        
        order: initial;
        justify-self: initial;
        box-shadow: inset 0 0 0 6px rgb(255 255 255 / 30%);
        width: 200px;
        height: 200px;
      `;
    } else if (props.largeDevices) {
      finalStyles += `        
        width: 250px;
        height: 250px;
        box-shadow: inset 0 0 0 8px rgb(255 255 255 / 30%);
      `;
    }
    return finalStyles;
  }}
`;

export const HomeScroll = styled.div<MediaQuery>`
  ${(props) => {
    let finalStyles = `
      margin-left: 9.25rem;
    `;
    if (props.mediumDevices) {
      finalStyles += `        
      display: none;
    `;
    } else if (props.largeDevices) {
      finalStyles += `        
      margin-left: 7.5rem;
    `;
    }
    return finalStyles;
  }}
`;

export const HomeData = styled.div<MediaQuery>`
  ${(props) => {
    let finalStyles = ``;
    if (props.mediumDevices) {
      finalStyles += `        
        grid-column: 1/3;
      `;
    }
    return finalStyles;
  }}
`;
