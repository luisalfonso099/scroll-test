'use client'
import React, { useEffect } from 'react';

export const Reactscroll = () => {
   
    
    return (
        <>
            {/* <div id="trigger1" className="spacer s1"></div> */}
            {/* <svg id="Capa_2" data-name="Capa 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 974.36 119.63">
                <g  data-name="Capa 1">
                    <g>
                        <path className="cls-3" d="M188.84,111.99c-4.76-5.09-7.14-12.29-7.14-21.59V29.27c0-9.3,2.38-16.5,7.14-21.59C193.6,2.59,200.47.04,209.44.04s15.83,2.55,20.6,7.64c4.76,5.09,7.14,12.29,7.14,21.59v61.12c0,9.3-2.38,16.5-7.14,21.59-4.76,5.09-11.63,7.64-20.6,7.64s-15.84-2.55-20.6-7.64ZM218.91,91.56V28.11c0-7.64-3.16-11.46-9.47-11.46s-9.47,3.82-9.47,11.46v63.45c0,7.64,3.16,11.46,9.47,11.46s9.47-3.82,9.47-11.46Z" />
                        <path className="cls-3" d="M354.27,1.7h24.75l18.94,116.27h-18.27l-3.32-23.09v.33h-20.76l-3.32,22.75h-16.94L354.27,1.7ZM374.2,79.43l-8.14-57.47h-.33l-7.97,57.47h16.44Z" />
                        <path className="cls-3" d="M562.88,111.99c-4.76-5.09-7.14-12.29-7.14-21.59V29.27c0-9.3,2.38-16.5,7.14-21.59,4.76-5.09,11.63-7.64,20.6-7.64s15.83,2.55,20.6,7.64c4.76,5.09,7.14,12.29,7.14,21.59v61.12c0,9.3-2.38,16.5-7.14,21.59-4.76,5.09-11.63,7.64-20.6,7.64s-15.84-2.55-20.6-7.64ZM592.95,91.56V28.11c0-7.64-3.16-11.46-9.47-11.46s-9.47,3.82-9.47,11.46v63.45c0,7.64,3.16,11.46,9.47,11.46s9.47-3.82,9.47-11.46Z" />
                    </g>
                    <polygon id="svg-yellow-line" className='cls-init' points="955 78.18 0 78.18 0 38.18 955 38.18 974.36 58.18 955 78.18" />
                    <g>
                        <line className="cls-1" x1="373.64" y1="78.18" x2="367.98" y2="38.18" />
                        <rect className="cls-3" x="218.91" y="37.86" width="18.27" height="40.64" />
                        <polygon className="cls-3" points="368.25 37.37 374.23 79.43 391.68 79.43 384.88 37.7 368.25 37.37" />
                        <rect className="cls-3" x="592.95" y="37.65" width="18.27" height="40.78" />
                    </g>
                    <path className="cls-3" d="M65.09,112.03c-4.54-5.04-6.81-12.26-6.81-21.68v-6.64h17.27v7.97c0,7.53,3.16,11.29,9.47,11.29,3.1,0,5.45-.91,7.06-2.74,1.6-1.83,2.41-4.79,2.41-8.89,0-4.87-1.11-9.16-3.32-12.87-2.22-3.71-6.31-8.16-12.29-13.37-7.53-6.64-12.79-12.65-15.78-18.02-2.99-5.37-4.48-11.43-4.48-18.19,0-9.19,2.33-16.3,6.98-21.34,4.65-5.04,11.4-7.56,20.26-7.56s15.36,2.52,19.85,7.56c4.48,5.04,6.73,12.27,6.73,21.68v4.82h-17.27v-5.98c0-3.99-.78-6.89-2.33-8.72-1.55-1.83-3.82-2.74-6.81-2.74-6.09,0-9.13,3.71-9.13,11.13,0,4.21,1.13,8.14,3.41,11.79,2.27,3.65,6.39,8.08,12.37,13.29,7.64,6.64,12.9,12.68,15.78,18.1,2.88,5.43,4.32,11.79,4.32,19.1,0,9.52-2.35,16.83-7.06,21.92-4.71,5.09-11.54,7.64-20.51,7.64s-15.56-2.52-20.1-7.56Z" />
                    <path className="cls-3" d="M137.51,18.27h-19.1V1.66h56.47v16.61h-19.1v99.66h-18.27V18.27Z" />
                    <path className="cls-3" d="M249.46,1.66h26.91c9.08,0,15.89,2.44,20.43,7.31,4.54,4.87,6.81,12.02,6.81,21.43v11.46c0,9.41-2.27,16.56-6.81,21.43-4.54,4.87-11.35,7.31-20.43,7.31h-8.64v47.34h-18.27V1.66ZM276.36,53.98c2.99,0,5.23-.83,6.73-2.49,1.5-1.66,2.24-4.48,2.24-8.47v-13.79c0-3.99-.75-6.81-2.24-8.47-1.5-1.66-3.74-2.49-6.73-2.49h-8.64v35.71h8.64Z" />
                    <path className="cls-3" d="M413.39,18.27h-19.1V1.66h56.47v16.61h-19.1v99.66h-18.27V18.27Z" />
                    <path className="cls-3" d="M486.13,1.66h22.92l17.77,69.59h.33V1.66h16.28v116.27h-18.77l-21.92-84.87h-.33v84.87h-16.28V1.66Z" />
                    <path className="cls-3" d="M637.11,18.27h-19.1V1.66h56.47v16.61h-19.1v99.66h-18.27V18.27Z" />
                    <path className="cls-3" d="M683.29,1.66h18.27v47.34h19.6V1.66h18.27v116.27h-18.27v-52.32h-19.6v52.32h-18.27V1.66Z" />
                    <path className="cls-3" d="M753.05,1.66h18.27v116.27h-18.27V1.66Z" />
                    <path className="cls-3" d="M784.93,1.66h22.92l17.77,69.59h.33V1.66h16.28v116.27h-18.77l-21.92-84.87h-.33v84.87h-16.28V1.66Z" />
                    <path className="cls-3" d="M861.5,112.03c-4.65-5.04-6.98-12.26-6.98-21.68V29.23c0-9.41,2.33-16.64,6.98-21.68,4.65-5.04,11.4-7.56,20.26-7.56s15.61,2.52,20.26,7.56c4.65,5.04,6.98,12.27,6.98,21.68v9.97h-17.27v-11.13c0-7.64-3.16-11.46-9.47-11.46s-9.47,3.82-9.47,11.46v63.61c0,7.53,3.16,11.29,9.47,11.29s9.47-3.76,9.47-11.29v-22.75h-9.13v-16.61h26.41v38.04c0,9.41-2.33,16.64-6.98,21.68-4.65,5.04-11.41,7.56-20.26,7.56s-15.61-2.52-20.26-7.56Z" />
                </g>
            </svg> */}
        </>
    )
}