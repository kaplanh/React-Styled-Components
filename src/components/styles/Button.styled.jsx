//! escb ile buttondan component olusturma kisayolu


import styled, { css } from "styled-components";

const Button = styled.button`
    background-color: ${({ bg }) => bg || "#fff"};
    color: ${({ color }) => color || "#fff"};
    border: 1px solid #a62440;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    padding: 1rem 1.2rem;
    font-size: 1.1rem;
    margin-right: 0.5rem;
    margin: 2rem 0.5rem;
    cursor: pointer;
    &:hover {
        opacity: 0.9;
        transform: scale(0.98);
    }

    /* !bg property e sahip olana css yardimiyla birden fazla özellikte verebiliriz */
    
    /* ${({ bg }) =>
        bg &&
        css`
            background-color: #a62440;
            color: #fff;
            border: 1px solid #a62440;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
            padding: 1rem 1.2rem;
            font-size: 1.1rem;
            margin-right: 0.5rem;
            margin: 2rem 0.5rem;
            cursor: pointer;
            &:hover {
                opacity: 0.9;
                transform: scale(0.98);
            }
        `} */
`;

export default Button;


//! extends yukardaki button'un tüm özelliklerini alip istediklerimi degistirebiliyor yada ek özellik ekleyebiliyorum
// export const DarkButton = styled(Button)`
//     background-color: white;
//     color: red;
//     border: 2px solid red;
// `;