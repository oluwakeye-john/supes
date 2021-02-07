import { Back, gsap } from 'gsap'

const logoAnimation = (target: string) => {
  gsap.to(target, {
    duration: 5,
    y: 15,

    yoyo: true,
    repeat: -1,
    ease: Back.easeInOut,
  })
}

export default logoAnimation
