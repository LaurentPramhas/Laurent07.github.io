function submitQuiz() {
	let frage1Antwort = document.getElementById('').value;
	let frage2Antwort = document.querySelector('input[name="frage2"]:checked').value;
	let frage3Antwort = document.querySelector('input[name="frage3"]:checked').value;
	let frage4Antwort = document.querySelector('input[name="frage3"]:checked').value;
	let frage5Antwort = document.querySelector('input[name="frage3"]:checked').value;
}








//ANNNNNNIIIIIMMMMMAAAATTTTTIIIIOOOONNNN

const resolver = {
    resolve: function resolve(options, callback) {
      // The string to resolve
      const resolveString = options.resolveString || options.element.getAttribute('data-target-resolver');
      const combinedOptions = Object.assign({}, options, {resolveString: resolveString});
      
      function getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };
      
      function randomCharacter(characters) {
        return characters[getRandomInteger(0, characters.length - 1)];
      };
      
      function doRandomiserEffect(options, callback) {
        const characters = options.characters;
        const timeout = options.timeout;
        const element = options.element;
        const partialString = options.partialString;
  
        let iterations = options.iterations;
  
        setTimeout(() => {
          if (iterations >= 0) {
            const nextOptions = Object.assign({}, options, {iterations: iterations - 1});
  
            // Ensures partialString without the random character as the final state.
            if (iterations === 0) {
              element.textContent = partialString;
            } else {
              // Replaces the last character of partialString with a random character
              element.textContent = partialString.substring(0, partialString.length - 1) + randomCharacter(characters);
            }
  
            doRandomiserEffect(nextOptions, callback)
          } else if (typeof callback === "function") {
            callback(); 
          }
        }, options.timeout);
      };
      
      function doResolverEffect(options, callback) {
        const resolveString = options.resolveString;
        const characters = options.characters;
        const offset = options.offset;
        const partialString = resolveString.substring(0, offset);
        const combinedOptions = Object.assign({}, options, {partialString: partialString});
  
        doRandomiserEffect(combinedOptions, () => {
          const nextOptions = Object.assign({}, options, {offset: offset + 1});
  
          if (offset <= resolveString.length) {
            doResolverEffect(nextOptions, callback);
          } else if (typeof callback === "function") {
            callback();
          }
        });
      };
  
      doResolverEffect(combinedOptions, callback);
    } 
  }
  
  /* Some GLaDOS quotes from Portal 2 chapter 9: The Part Where He Kills You
   * Source: http://theportalwiki.com/wiki/GLaDOS_voice_lines#Chapter_9:_The_Part_Where_He_Kills_You
   */
  const strings = [
    'Car detailing and Upgrading',
    
  ];
  
  let counter = 0;
  
  const options = {
    // Initial position
    offset: 0,
    // Timeout between each random character
    timeout: 5,
    // Number of random characters to show
    iterations: 7,
    // Random characters to pick from
    characters: ['α', 'β', 'γ', 'δ', 'φ', 'ψ', 'ψ', 'Θ', 'Θ', 'Ξ', ],
    // String to resolve
    resolveString: strings[counter],
    // The element
    element: document.querySelector('[data-target-resolver]')
  }
  
  // Callback function when resolve completes
  function callback() {
    setTimeout(() => {
      counter ++;
      
      if (!counter >= strings.length) {
        let nextOptions = Object.assign({}, options, {resolveString: strings[counter]});
      resolver.resolve(nextOptions, callback);
      }
      
      
    }, 1000);
  }
  
  resolver.resolve(options, callback);












  // Observer reagiert *px später
// Wert > 0: Observer reagiert früher
// Wert < 0: Observer reagiert später
let observer_options_offset = "10px";

// Wie viel % des Objekts mit Observer überschneiden müssen
// Default: 1.0 = 100% 
let observer_options_threshold = 0.2;
let observer_options = {
    rootMargin: `0px 0px ${observer_options_offset} 0px`, 
    threshold: observer_options_threshold
}


// Standard-Code: neuen Observer erstellen
const observer = new IntersectionObserver( (entries) => {
    entries.forEach(entry =>{
        //alert('Hallo ich bin da');
       // console.log(entry);
        //console.log(entry.isIntersecting);
        //console.log(entry.target);
        if (entry.isIntersecting) {
            entry.target.classList.add('onscroll_visible')
        } else {
            entry.target.classList.remove('onscroll_visible')
        }
    })
}, observer_options)



// Custom-Code: Elemente mit Element-Selektor picken
// Jedes Element dem Observer zum Überwachen übergeben
const onscroll_elements = document.getElementsByClassName('onscroll_hidden');
for (let i = 0; i < onscroll_elements.length; i++) {
    observer.observe(onscroll_elements[i]);
}


// Custom-Code Variante2 mit QuerySelector und forEach
/*
// Custom-Code: Elemente mit QuerySelector picken
// Jedes Element dem Observer zum Überwachen übergeben 
const onscroll_elements = document.querySelectorAll('.onscroll_hidden');
onscroll_elements.forEach( (el) => {
    observer.observe(el)}
);
*/






 // Observer reagiert *px später
// Wert > 0: Observer reagiert früher
// Wert < 0: Observer reagiert später
let observer_options_offset2 = "0px";

// Wie viel % des Objekts mit Observer überschneiden müssen
// Default: 1.0 = 100% 
let observer_options_threshold2 = 0.3;
let observer_options2 = {
    rootMargin: `0px 0px ${observer_options_offset} 0px`, 
    threshold: observer_options_threshold
}


// Standard-Code: neuen Observer erstellen
const observer2 = new IntersectionObserver( (entries) => {
    entries.forEach(entry =>{
        //alert('Hallo ich bin da');
        console.log(entry);
        console.log(entry.isIntersecting);
        console.log(entry.target);
        if (entry.isIntersecting) {
            entry.target.classList.add('onscroll_visible')
        } else {
            entry.target.classList.remove('onscroll_visible')
        }
    })
}, observer_options)



// Custom-Code: Elemente mit Element-Selektor picken
// Jedes Element dem Observer zum Überwachen übergeben
const onscroll_elements2 = document.getElementsByClassName('aboutUs');
for (let i = 0; i < onscroll_elements2.length; i++) {
    observer.observe(onscroll_elements2[i]);
}


// Custom-Code Variante2 mit QuerySelector und forEach
/*
// Custom-Code: Elemente mit QuerySelector picken
// Jedes Element dem Observer zum Überwachen übergeben 
const onscroll_elements = document.querySelectorAll('.onscroll_hidden');
onscroll_elements.forEach( (el) => {
    observer.observe(el)}
);
*/



let myFullpage = new fullpage('#fullpage', {
  autoScrolling:true,
  scrollHorizontally:true,
  scrollingSpeed: 500,
});