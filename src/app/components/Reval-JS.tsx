'use client'
import React, { useEffect } from 'react';
import Reveal from 'reveal.js'
import 'reveal.js/dist/reveal.css';
export const RebalJs = () => {

    const initAnimation = () => {

        Reveal.initialize({
            height: 500
        });


        // Reveal.initialize({ transition: 'none' });
        // Reveal.initialize().then(() => {
        //     // reveal.js is ready
        //     console.log('Listo');

        // })
        // let deck1 = new Reveal(document.querySelector('.deck1'), {
        //     embedded: true,
        //     keyboardCondition: 'focused' // only react to keys when focused
        // });
        // deck1.initialize();
        // let deck2 = new Reveal(document.querySelector('.deck2'), {
        //     embedded: true
        // });
        // deck2.initialize();
    }

    const progresScroll = (event: any) => {

    }

    useEffect(() => {
        initAnimation()
    }, [])
    return (
        <div className='bg-slate-600'>
            <div className='reveal '>
                <div className="slides">
                    {/* <section>Horizontal Slide</section> */}
                    <section>
                        <section>Vertical Slide 1</section>
                        <section>Vertical Slide 2</section>
                    </section>
                </div>
            </div>
        </div>
    )
}
