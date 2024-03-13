import Lenis from '@studio-freight/lenis';

function smoothScroll() {
    const lenis = new Lenis({
        duration: 1.8,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        infinite: false,
        // orientation: 'vertical',
        // smoothWheel: true,
        smooth: true,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
}

export default smoothScroll;
