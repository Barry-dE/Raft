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
                stagger: headerElements.length > 100 ? 0.01 : 0.02,
                duration: headerElements.length > 100 ? 0.5 : 0.6,
                ease: 'easeOut',
                delay: 0.3,
            });
        });
    });
}

export default splitText;
