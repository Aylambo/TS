import styled from "styled-components";

export const Wrapper = styled.div`

    display: flex;
    justify-content: space-between;
    font-family: Ariel, Helvetica, sans-serif;
    border: 1px solid lightblue;
    padding: 20px;
    
    div {
        flex: 1
    }
    
    .info, .btns {
        display: flex;
        justify-content: space-between;
    }
    
    img{
        max-width: 80px;
        object-fit: cover;
        margin-left: 40px;
    }
`
