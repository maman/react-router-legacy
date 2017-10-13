function execSteps(steps, done) {
  let index = 0

  return function () {
    if (steps.length === 0) {
      done()
    } else {
      try {
        steps[index++].apply(this, arguments)
        if (index === steps.length) done()
      } catch (error) {
        index = 0
        done(error)
      }
    }
  }
}

export default execSteps
