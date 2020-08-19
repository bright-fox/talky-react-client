import styled from "styled-components"

export default styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.backgroundColor || 'white'};
    width: ${props => props.width || '100vw'};
    height: ${props => props.height || '100vh'};
`