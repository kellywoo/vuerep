import easingEquations from './easing'
import { requestAniFrame } from './util'

// main function
export default function (scrollTargetY, speed, easing) {

  var scrollY = window.scrollY, currentTime = 0
  scrollTargetY = scrollTargetY || 0
  speed = speed || 2000
  easing = easing || 'easeOutSine'

  // min time .1, max time .8 seconds
  //  distance / speed = time
  var time = Math.max(0.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, 0.8))

  // add animation loop
  function tick () {
    currentTime += 1 / 60
    var p = currentTime / time
    var t = easingEquations[easing](p)

    if (p < 1) {
      requestAniFrame(tick)

      window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t))
    } else {
      window.scrollTo(0, scrollTargetY)
    }
  }

  // call it once to get started
  tick()
}
