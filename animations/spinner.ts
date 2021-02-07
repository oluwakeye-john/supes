import gsap from 'gsap'

const spinnerAnimation = (target: string) => {
  gsap.to(target, {
    duration: 1.5,
    rotate: 360,
    repeat: -1,
    yoyo: true,
  })
}

export default spinnerAnimation
