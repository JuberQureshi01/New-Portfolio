import gsap from "gsap";
export const initGsap = () => {
  gsap.from("#smooth-scroll section", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
    ease: "power2.out"
  });
};
