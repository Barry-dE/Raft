import Splitting from 'splitting';
import gsap from 'gsap';
import { intersectionObserver } from './intersectionObserver';
function splitText() {
    const header = document.querySelectorAll('[data-animation="header"]');
    const paragraph = document.querySelectorAll('[data-animation="paragraph"]');

    header.forEach((item) => {
        Splitting({
            target: item,
            by: 'chars',
        });
        gsap.set(item.querySelectorAll('.char'), {
            opacity: 0,
            yPercent: 100,
            transformStyle: 'preserve-3d',
        });
        intersectionObserver(item, {
            threshold: 1,
        }).then(() => {
            const headerElements = item.querySelectorAll('.char');
            gsap.to(headerElements, {
                opacity: 1,
                yPercent: 0,
                stagger: headerElements.length > 100 ? 0.03 : 0.04,
                duration: headerElements.length > 100 ? 0.5 : 0.6,
                ease: 'easeOut',
                delay: 0.2,
            });
        });
    });

    //

    //     paragraph.forEach((item) => {
    //         const line = Splitting({
    //             target: item,
    //             by: 'lines',
    //         });

    //         line.forEach((splitItem) => {
    //             const wrapLines = splitItem.words
    //                 .map((wordsArray) => {
    //                     return `<span class='word__Wrap'>${wordsArray.textContent}</span>`;
    //                 })
    //                 .join(' ');
    //             splitItem.el.innerHTML = wrapLines; // Use innerHTML to add the wrapped words back to the DOM
    //         });

    //         gsap.set(item.querySelectorAll('.word'), {
    //             yPercent: 107,
    //             opacity: 0,
    //             transformStyle: 'preserve-3d',
    //             rotateX: 50,
    //         });
    //     });
}

export default splitText;
