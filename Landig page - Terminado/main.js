let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Lo de la Nona')
  .pauseFor(150)
  .deleteChars(10)
  .start();
  
  
