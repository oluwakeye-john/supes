import { Linear } from 'gsap'
import gsap from './gsap'

const logoAnimation = (target: string) => {
  gsap.to(target, {
    duration: 3,
    y: 15,

    yoyo: true,
    repeat: -1,
    ease: Linear.easeInOut,
  })
}

export default logoAnimation
