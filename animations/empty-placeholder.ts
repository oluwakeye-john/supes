import { Elastic } from 'gsap'
import gsap from './gsap'

const emptyPlaceholder = (target: string, cb?: any) => {
  gsap.to(target, {
    duration: 1,
    scale: 1,
    opacity: 1,
    ease: Elastic.easeInOut,
    onComplete() {
      cb && cb()
    },
  })
}

export default emptyPlaceholder
