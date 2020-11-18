import styled from 'styled-components'

export const Container = styled.div`
    background-color: #8f8f99;
    min-height: 100vh;
    font-size: 16px;
    padding: 2em;
    
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 2fr 2fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
        "throttle throttle leftSwitch leftSwitch rightSwitch rightSwitch"
        "throttle throttle trim       autopilot autopilot key";
`

export const Panel = styled.div`
    display: flex;
    justify-content: space-between;
    padding: ${props => props.padding || '5em'};
    width: fit-content;
    height: ${props => props.height || 'fit-content'};
    border-radius: 2em;
    box-shadow: 0px 0px 14px 1px rgba(0,0,0,0.75);
`

const Centered = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const AreaThrottle = styled(Centered)`
    grid-area: throttle;
`
export const AreaLeftSwitch = styled(Centered)`
    grid-area: leftSwitch;
`
export const AreaRightSwitch = styled(Centered)`
    grid-area: rightSwitch;
`
export const AreaAutopilot = styled(Centered)`
    grid-area: autopilot;
`
export const AreaKey = styled(Centered)`
    grid-area: key;
`