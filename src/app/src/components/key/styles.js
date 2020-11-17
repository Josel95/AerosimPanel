import styled from 'styled-components'

export const Container = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #cacaca;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const Key = styled.div`
    & {
        width: 80%;
        height: 80%;
        border-radius: 50%;
        background-color: #000;

        position: relative;
        
        display: flex;
        justify-content: center;
        align-items: center;
        
        transition: linear ${props => `${props.animationTime}s`};

        /* Metal texture get from */
        /* https://simurai.com/lab/2011/08/21/brushed-metal */
        text-shadow: hsla(0,0%,40%,.5) 0 -1px 0, hsla(0,0%,100%,.6) 0 2px 1px;

        box-shadow: inset hsla(0,0%,15%,  1) 0  0px 0px 4px, /* border */
                    inset hsla(0,0%,15%, .8) 0 -1px 5px 4px, /* soft SD */
                    inset hsla(0,0%,0%, .25) 0 -1px 0px 7px, /* bottom SD */
                    inset hsla(0,0%,100%,.7) 0  2px 1px 7px, /* top HL */
                    
                    hsla(0,0%, 0%,.15) 0 -5px 6px 4px, /* outer SD */
                    hsla(0,0%,100%,.5) 0  5px 6px 4px; /* outer HL */ 

        background-image: -webkit-radial-gradient(  50%   0%,  8% 50%, hsla(0,0%,100%,.5) 0%, hsla(0,0%,100%,0) 100%),
                            -webkit-radial-gradient(  50% 100%, 12% 50%, hsla(0,0%,100%,.6) 0%, hsla(0,0%,100%,0) 100%),
                            -webkit-radial-gradient(   0%  50%, 50%  7%, hsla(0,0%,100%,.5) 0%, hsla(0,0%,100%,0) 100%),
                            -webkit-radial-gradient( 100%  50%, 50%  5%, hsla(0,0%,100%,.5) 0%, hsla(0,0%,100%,0) 100%),
                            -webkit-repeating-radial-gradient( 50% 50%, 100% 100%, hsla(0,0%,  0%,0) 0%, hsla(0,0%,  0%,0)   3%, hsla(0,0%,  0%,.1) 3.5%),
                            -webkit-repeating-radial-gradient( 50% 50%, 100% 100%, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,0)   6%, hsla(0,0%,100%,.1) 7.5%),
                            -webkit-repeating-radial-gradient( 50% 50%, 100% 100%, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,0) 1.2%, hsla(0,0%,100%,.2) 2.2%),
                            -webkit-radial-gradient( 50% 50%, 200% 50%, hsla(0,0%,90%,1) 5%, hsla(0,0%,85%,1) 30%, hsla(0,0%,60%,1) 100%);
    }

    &:active {
        transform: rotateZ(90deg);
    }

    &:after {
        content: "";
        width: 10px;
        height: 40%;
        background-color: #232323;
        position: absolute;
    }

`