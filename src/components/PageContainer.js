import styled from 'styled-components';

export default styled.div`
    ${props => props.fontImport ? props.fontimport : ""}
    display: flex;
    flex-direction: ${props => props.fd || "row"};
    justify-content: ${props => props.jc || "center"};
    align-items: ${props => props.ai || "center"};
    ${props => props.matchNavbar ? "min-height: calc(100vh - 70px);" : ""}
    ${props => props.fullScreen ? "height: 100vh;" : ""}
    background-color: ${props => props.bc || "#fff"};
    border-top: ${props => props.bt || "none"};
    width: 100vw;
    font-family: ${props => props.fontFamily ? props.fontFamily : "serif"};
    overflow-x: hidden;
`