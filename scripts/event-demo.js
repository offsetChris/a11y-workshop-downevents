(function(){
  var button = document.getElementById('targetButton');
  var hiddenText = document.getElementById('showMe');
  /*
  > Vanilla Javascript Examples
  */ 
  
  // *** Basic Click Event
  var demo1 = document.getElementById('demo1Button');
  var demo1Hidden = document.getElementById('demo1Content');
  demo1.addEventListener('click', function(){
    demo1Hidden.style.display = 'block';
  });
  
  // *** Mouse Events
  var demo2 = document.getElementById('demo2Button');
  var demo2Down = document.getElementById('demo2Down');
  var demo2Up = document.getElementById('demo2Up');
  demo2.addEventListener('mousedown', function(){
    demo2Down.style.display = 'block';
  });
  demo2.addEventListener('mouseup', function(){
    demo2Up.style.display = 'block';
  });
  
  // *** Key Events
  var demo3 = document.getElementById('demo3Button');
  var demo3Down = document.getElementById('demo3Down');
  var demo3Up = document.getElementById('demo3Up');
  // Keyboard space bar
  demo3.addEventListener('keydown', function(){
    if(event.keyCode === 32){
      demo3Down.style.display = "block";
    }
  });
  demo3.addEventListener('keyup', function(){
    if(event.keyCode === 32){
      demo3Up.style.display = "block";
    }
  })
  
  // *** Demo 3 is CSS based
  
  // *** Obnoxious down event
  var demo4 = document.getElementById('demo4Button');
  var demo4Content = document.getElementById('demo4Content');
  var count = 0;
  demo4.addEventListener('mousedown', function(){
    var newel = document.createElement('span');
    var randomHeight = Math.floor(Math.random() * (300 - 50) + 50);
    var randomWidth = Math.floor(Math.random() * (300 - 50) + 50);
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    count++;
    newel.className = 'annoying';
    newel.style.height = randomHeight + 'px';
    newel.style.width = randomWidth + 'px';
    newel.style.background = '#'+randomColor;
    newel.style.left = (randomWidth - 50) + 'px';
    newel.innerHTML = '<img src="https://placekitten.com/'+randomWidth+'/'+randomHeight+'" alt="Kitten image number '+count+'">';
    demo4Content.appendChild(newel);
  });
  //TODO: add enter and space keydown
  
  // *** Obnoxious new window
  var demo5 = document.getElementById('demo5Button');
  demo5.addEventListener('mousedown', function(){
    var url = this.getAttribute('href');
    window.open(url, '_blank');
  });
  //TODO: add enter and space keydown
  var demo6 = document.getElementById('demo6Button');
  demo6.addEventListener('click', function(){
    var url = this.getAttribute('href');
    window.open(url, '_blank');
  });
  //TODO: add enter and space keydown
  
  // *** additional examples
  var demo7 = document.getElementById('demo7Button');
  var demo7Content = document.getElementById('demo7Content');
  demo7.addEventListener('touchstart',function(){
    // this.style.background = 'red';
    var url = this.getAttribute('href');
    window.open(url, '_blank');
  });
  
  var demo8 = document.getElementById('demo8Button');
  var demo8Content = document.getElementById('demo8Content');
  demo8.addEventListener('keydown', function(){
    var log = document.createElement('p');
    log.innerText = 'key down: '+ event.keyCode;
    demo8Content.appendChild(log);
  });
  
  var demo9 = document.getElementById('demo9Button');
  var demo9Content = document.getElementById('demo9Content');
  demo9.addEventListener('keyup', function(){
    var log = document.createElement('p');
    log.innerText = 'key up: '+ event.keyCode;
    demo9Content.appendChild(log);
  });
  
  // *** Things that act like down events on mobile :hover
  // button.classList.add('hover-effect');
  
  
  
})();