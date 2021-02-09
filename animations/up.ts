import gsap from './gsap'

const upIconAnimation = (target: string) => {
  gsap.to(target, {
    duration: 0.5,
    y: -10,
    repeat: -1,
    yoyo: true,
  })
}
export default upIconAnimation
