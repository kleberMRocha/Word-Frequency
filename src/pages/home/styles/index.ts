import styled,{css} from 'styled-components';
import {TextareaHTMLAttributes} from 'react';


interface textAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    isFocus:boolean;
}

export const Container = styled.div`
    margin: 0  auto;
    text-align:center;
    padding: 0 5%;
    justify-content:center;
    align-items:center;
    width:70%;
    height:100%;
    display:flex;
    flex-direction:column;
    font-family: sans-serif;
    p{
        color:tomato;
    }
`;

export const Buttom = styled.button`
    width: 300px;
    height: 50px;
    border:none;
    margin-top:20px;
    font-weight:bold;
    cursor:pointer;
    transition: background-color .5s;
    &:hover{
        background-color:#bbbfca;
    }
`;

export const TextArea = styled.textarea<textAreaProps>`
    width: 80%;
    min-height: 200px;
    color:#30475e;
    ${(props) => props.isFocus && css`background:#fbf6f0`}
`;

export const Table = styled.table`
    width:80%;
    max-height:150px;
    list-style:none;
    text-align:left;
    td{
     border: #30475e solid 2px;
     text-align:center;
    }
    
`;