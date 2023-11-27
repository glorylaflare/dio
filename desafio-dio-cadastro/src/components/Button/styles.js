import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
    background: #565656;
    border-radius: 22px;
    position: relative;

    color: #FFFFFF;
    padding: 2px 12px;
    min-width: 120px;
    width: 50%;
    border: 2px solid #000000;

    &:hover {
        opacity: .6;
        cursor: pointer;
    }

    ${({variant}) => variant !== "primary" && css`
        min-width: 167px;
        height: 33px;
        background: #E4105D;
        font-size: 17px;
        margin: 40px 0;
        &::after {
            content: "";
            position: absolute;
            border: 1px solid #E4105D;
            top: -6px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }
    `}

    &.larger {
        width: 100%;
    }
`