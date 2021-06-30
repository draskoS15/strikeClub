
  const text = document.querySelector(".textAnim");
  const strText = text.textContent;
  const splitText = strText.split("");
  text.textContent = "";

  for (let i=0; i < splitText.length; i++){
    text.innerHTML+="<span>" + splitText[i] + "</span>";
  }
  
  let char = 0;
  let timer = setInterval (onTick, 50);

  function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if(char === splitText.length){
      complete ();
      return;
    }
    function complete(){
      clearInterval(timer);
      timer = null;
    }
  }

  const nextBtn = document.querySelector('.nextBtn');
  const prevBtn = document.querySelector('.prevBtn');
  const container = document.querySelector('.images');

  let counter = 0;
  
  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  function nextSlide(){
    container.animate([{opacity:'0.1'},{opacity:'1.0'}], {duration:1500, fill:'forwards'});
    if(counter === 4){
      counter=-1;
    }
    counter++;
    container.style.backgroundImage = `url(img/Optimized-img-${counter}.jpg)`
  }
  function prevSlide(){
    container.animate([{opacity:'0.1'},{opacity:'1.0'}], {duration:1500, fill:'forwards'});
    if(counter === 0){
      counter=5;
    }
    counter--;
    container.style.backgroundImage = `url(img/Optimized-img-${counter}.jpg)`
  }

  



