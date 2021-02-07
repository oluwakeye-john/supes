import { Back, Linear, TimelineLite } from 'gsap'

const landingAnimation = (targets: {
  word: string
  form: string
  starfish: string
}) => {
  const timeline = new TimelineLite()
  heroTextEntry(timeline, targets.word)
  landingFormEntry(timeline, targets.form)
  starfishLoop(timeline, targets.starfish)
}

const heroTextEntry = (tl: TimelineLite, target: string) => {
  tl.to(target, {
    duration: 0.8,
    opacity: 1,
    y: 0,
    stagger: 0.1,
    ease: Back.easeInOut,
    color: '#fff',
  })
}
const landingFormEntry = (tl: TimelineLite, target: string) => {
  tl.to(target, {
    y: 0,
    duration: 0.8,
    opacity: 1,
  })
}

const starfishLoop = (tl: any, target: string) => {
  tl.to(target, {
    opacity: 1,
  })

  tl.to(target, {
    rotate: 360,
    duration: 30,
    repeat: -1,
    ease: Linear.easeNone,
  })
}

export default landingAnimation
