import ScrollMagic from 'scrollmagic';

interface MySceneType extends ScrollMagic.Scene {
    addIndicators?: (options?: ScrollMagic.IndicatorOptions) => ScrollMagic.Scene;
}


export default class AnimationScroll {
    private pin: string;
    private trigger: string
    private controller: any
    private myScene: MySceneType;
    constructor(pin: string, trigger: string) {
        this.pin = pin
        this.trigger = trigger
        this.controller = new ScrollMagic.Controller();
        this.myScene = new ScrollMagic.Scene({
            triggerElement: this.trigger,
            duration: 300,
        
        })
        
    }

    init = () => {
        this.myScene
            .on("progress", this.progresScroll)
            .setPin(this.pin, {
                pushFollowers: false,
                spacerClass : 'bg-gray-900'
            })
            .addTo(this.controller);

        if (this.myScene.addIndicators) {
            console.log('entraaaaaaa');
            // this.myScene.addIndicators({ name: "1 (duration: 200)" });
        }
    }
    progresScroll(event: any) {
        const progress = -100 + (event.progress * 100);
        let barra = document.getElementById('svg-yellow-line');
        if (barra) {
            barra.style.transform = `translateX(${progress}%)`;
        }
    }

    destroy() {
        this.myScene.destroy();
        this.controller.destroy();
    }
}