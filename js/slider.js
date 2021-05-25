var slider = document.getElementById('slider'),
    sliderItems = document.getElementById('items'),
    controls = document.getElementsByClassName('slider_controls')[0]
    controlButtons = document.getElementsByClassName('slider_control');


slide(slider, sliderItems);

function slide(wrapper, items) {
  var posX1 = 0,
      posX2 = 0,
      posInitial,
      posFinal,
      threshold = 100,
      slides = items.getElementsByClassName('slide'),
      slidesLength = slides.length,
      firstSlide = slides[0],
      lastSlide = slides[slidesLength - 1],
      cloneFirst = firstSlide.cloneNode(true),
      cloneLast = lastSlide.cloneNode(true),
      index = 0,
      allowShift = true
      autoplay = true;
      console.log(slides.length);

      const totalButtons = controlButtons.length;
  // Clone first and last slide
  items.appendChild(cloneFirst);
  items.insertBefore(cloneLast, firstSlide);
  wrapper.classList.add('loaded');
  
  // Mouse and Touch events
  items.onmousedown = dragStart;
  
  // Touch events
  items.addEventListener('touchstart', dragStart);
  items.addEventListener('touchend', dragEnd);
  items.addEventListener('touchmove', dragAction);
  
  // Click events
  //prev.addEventListener('click', function () { shiftSlide(-1) });
  //next.addEventListener('click', function () { shiftSlide(1) });
  
  // Transition events
  items.addEventListener('transitionend', checkIndex);

  window.addEventListener('resize', function() {
    if (items.offsetLeft % window.innerWidth) {
      items.style.left = -(index * window.innerWidth) + "px";
    }
  });

  controls.addEventListener('click', function(e) {
    if (e.target.className === 'slider_control') {
      autoplay = false;
      items.classList.add('shifting');
      items.style.left = -(e.target.id * window.innerWidth) + "px";
      index = parseInt(e.target.id); 
      setActiveButton(index);
    }
  })

  function setActiveButton(index) {
    console.log(`index: ${index}`);
    
    for (let i = 0; i < totalButtons; i++) {
      controlButtons[i].classList.remove('active');
    }
    console.log(`targetbutton: ${(index + (totalButtons - 1)) % totalButtons}`)
    controlButtons[(index + (totalButtons - 1)) % totalButtons].classList.add('active');
  }

  setInterval( function() {
    if (autoplay) {
      shiftSlide(1)
    }
    else {
      autoplay = true;
    }
  }, 4000);
  
  function dragStart (e) {
    e = e || window.event;
    e.preventDefault();
    posInitial = items.offsetLeft;
    
    if (e.type == 'touchstart') {
      posX1 = e.touches[0].clientX;
    } else {
      posX1 = e.clientX;
      document.onmouseup = dragEnd;
      document.onmousemove = dragAction;
    }
  }

  function dragAction (e) {
    e = e || window.event;
    
    if (e.type == 'touchmove') {
      posX2 = posX1 - e.touches[0].clientX;
      posX1 = e.touches[0].clientX;
    } else {
      posX2 = posX1 - e.clientX;
      posX1 = e.clientX;
    }
    items.style.left = (items.offsetLeft - posX2) + "px";
  }
  
  function dragEnd (e) {
    posFinal = items.offsetLeft;
    console.log(`posInitial: ${posInitial}`);
    if (posFinal - posInitial < -threshold) {
      console.log('first');
      shiftSlide(1, 'drag');
    } else if (posFinal - posInitial > threshold) {
      console.log('second');
      shiftSlide(-1, 'drag');
    } else {
      console.log('third');
      items.style.left = (posInitial) + "px";
    }

    document.onmouseup = null;
    document.onmousemove = null;
  }
  
  function shiftSlide(dir, action) {
    items.classList.add('shifting');
    
    if (allowShift) {
      if (!action) { posInitial = items.offsetLeft; }
      if (dir == 1) {
        items.style.left = (posInitial - window.innerWidth) + "px";
        index++;      
      } else if (dir == -1) {
        items.style.left = (posInitial + window.innerWidth) + "px";
        index--;      
      }
      setActiveButton(index);
    };
    
    console.log(`index: ${index}`);
    console.log(`items.offsetLeft: ${items.offsetLeft}`);
    console.log(`items.style.left: ${items.style.left}`);
    allowShift = false;
  }
    
  function checkIndex (){
    items.classList.remove('shifting');

    if (index === 0) {
      items.style.left = -(slidesLength * window.innerWidth) + "px";
      index = slidesLength;
    }

    if (index === slidesLength + 1) {
      items.style.left = -(1 * window.innerWidth) + "px";
      index = 1;
    }
    
    allowShift = true;
  }
}