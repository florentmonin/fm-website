export function clamp(a, min, max) {
    let res = a
    if (min !== null) {
        res = Math.max(res, min)
    }
    if (max !== null) {
        res = Math.min(res, max)
    }
    return res
}

export function getRandomGaussian(sigma=1, mu=0) {
    let u1 = Math.random()
    let u2 = Math.random()
    // Box-Muller transform to get gaussian distribution from uniform distribution
    let z1 = Math.sqrt(-2*Math.log(u1)) * Math.cos(2*Math.PI*u2)
    let z2 = Math.sqrt(-2*Math.log(u1)) * Math.sin(2*Math.PI*u2)
    z1 = z1*sigma + mu
    z2 = z2*sigma + mu
    return [z1, z2]
}

export function collide(
    {"word1": {"x": x1, "y": y1, "w": w1, "h": h1},
    "word2": {"x": x2, "y": y2, "w": w2, "h": h2}},
    padding,
    paddingLeft,
    paddingTop,
) {
    if (x1<paddingLeft) {
        return true
    }
    if (y1<paddingTop) {
        return true
    }

    if (x1+w1 + padding < x2) {
        // word 1 is to the left of word 2
        return false
    }

    if (x2+w2 + padding < x1) {
        // word 2 is to the left of word 1
        return false
    }

    if (y1+h1 + padding < y2) {
        // word 1 is above word 2
        return false
    }

    if (y2+h2  + padding < y1) {
        // word 2 is above word 1
        return false
    }
    return true
}

export function clean_setup(CenterOfInterest) {
    for (let i = 0; i < CenterOfInterest.length; i++) {
        const coi = CenterOfInterest[i];
        let element = document.getElementById(coi)
        element.style.visibility = "";
    }
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

export function translate_words(wordSizes, CentersOfInterest, firstTime) {
    shuffle(CentersOfInterest)
    clean_setup(CentersOfInterest);
    let sigma = 0.1
    let mu = 0.5
    let MAX_TRIALS = 500
    let padding = 10
    let animationDuration = 8000
    /* for each word, compute its size (width, height)
    For each word:
        Find a random position
        Check if position inside bounds if not retry
        check if position clips with another already placed word,
            if not retry
        place word, and save position
    */
    let fold1 = document.getElementById("fold1")
    let shadow = window.getComputedStyle(fold1).boxShadow
    let fold4 = document.getElementById("fold4")
    let paddingLeft = (
        parseInt(window.getComputedStyle(fold1).width)
        - parseInt(window.getComputedStyle(fold4).width)
    )
    let paddingTop = (
        parseInt(window.getComputedStyle(fold1).width)
        - parseInt(window.getComputedStyle(fold4).width)
    ) + parseInt(shadow.split(" ").slice(-1)[0])  // Get size of shadow
    paddingLeft = window.innerWidth >= 1024 ? paddingLeft : 0
    paddingTop = window.innerWidth < 1024 ? paddingTop : 0
    console.log(paddingLeft, paddingTop)
    let words = document.getElementById("words")
    let totalHeight = words.offsetHeight;
    let totalWidth = words.offsetWidth;

    for (let i = 0; i < CentersOfInterest.length; i++) {
        const coi = CentersOfInterest[i];
        let doCollide = true
        let trialCounter = 0
        let x = null
        let y = null
        while (doCollide & (trialCounter < MAX_TRIALS)) {
            trialCounter ++;
            let t = trialCounter/MAX_TRIALS
            let [z1, z2] = getRandomGaussian(sigma * (1+t), mu)
            z1 = clamp(z1, 0, 1)
            z2 = clamp(z2, 0, 1)
            x = z1 * (totalWidth  - wordSizes[coi].w)
            y = z2 * (totalHeight - wordSizes[coi].h)
            let word1 = wordSizes[coi];
            word1.x = x
            word1.y = y
            let found_collision = false
            for (let j = 0; j < i; j++) {
                const word2 = wordSizes[CentersOfInterest[j]];
                if (collide({"word2": word2, "word1": word1}, padding, paddingLeft, paddingTop)) {
                    found_collision = true
                    break
                }
            }
            if (!found_collision) {
                doCollide = false
                break
            }
        }
        let element = document.getElementById(coi)
        if (trialCounter < MAX_TRIALS) {
            wordSizes[coi].x = x
            wordSizes[coi].y = y
            element.style.transform = `translate(${x}px, ${y}px)`
            if (!firstTime) {
                element.style.transition = "transform 0.2s linear 0s"
            }
            element.style.opacity = "1"
            let randomDuration = - Math.floor(Math.random() * animationDuration);
            let element_child = document.getElementById(coi+"_child")
            element_child.style.animationDelay = randomDuration + 'ms';
        } else {
            element.style.visibility = "hidden";
        }
    }
}

export function debounce(func, wait, immediate) {
    var timeout;

    return function executedFunction() {
      var context = this;
      var args = arguments;

      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };

      var callNow = immediate && !timeout;

      clearTimeout(timeout);

      timeout = setTimeout(later, wait);

      if (callNow) func.apply(context, args);
    };
  };