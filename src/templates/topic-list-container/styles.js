import { css } from '@emotion/react';


export function styles(){
    const list = css`
        list-style: none;
        overflow: hidden auto;

        display: grid;
        grid-template-columns: repeat(3, 1fr)
    `
    const topic = css`
                display: flex;
                position: relative;

                background-image: linear-gradient( 135deg, #FFE985 10%, #FA742B 100%);        
                
                font-weight: 900;
        
                grid-column: 1;
                align-items: center;
                justify-content: center;

                height: 50px;
    `

    return { list, topic }
}