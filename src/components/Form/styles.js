import styled from 'styled-components';


export const FormStyled = styled.form`
    width: 100%;
    max-width: 720px;
    display: flex;
    flex-direction: column;
    background: #FFF;
    box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
    border-radius: 2px;
    padding: 30px 20px;
    label{
        margin-top: 10px;
        color: rgb(78, 78, 78);
        font-size: 14px;
        font-weight: bold;
        display: block;
    }
    input.string{
        width: 75%;
        height: 32px;
        font-size: 14px;
        color: #666;
    }
    input.number{
        width: 50%;
        height: 32px;
        font-size: 14px;
        color: #666;
    }
    select{
        width: 50%;
        height: 32px;
        font-size: 14px;
        color: #666;
    }
`;

export const Strong = styled.strong`
font-size: 20px
`;
