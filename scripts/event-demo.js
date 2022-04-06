(function(){
  var button = document.getElementById('targetButton');
  var hiddenText = document.getElementById('showMe');
  
  // *** Basic Click Event
  var demo1 = document.getElementById('demo1Button');
  var demo1Hidden = document.getElementById('demo1Content');
  demo1.addEventListener('click', function(){
    demo1Hidden.style.display = 'block';
  });
  
  // *** Basic Mouse Events
  var demo2 = document.getElementById('demo2Button');
  var demo2Down = document.getElementById('demo2Down');
  var demo2Up = document.getElementById('demo2Up');
  demo2.addEventListener('mousedown', function(){
    demo2Down.style.display = 'block';
  });
  demo2.addEventListener('mouseup', function(){
    demo2Up.style.display = 'block';
  });
  
  // *** Basic Key Events
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
  });

  // *** Annoying key up
  var demo4 = document.getElementById('demo4Button');
  var demo4Content = document.getElementById('demo4Content');
  demo4.addEventListener('keyup', function(){
    var log = document.createElement('p');
    log.innerText = 'key up: '+ event.keyCode;
    demo4Content.appendChild(log);
  });

  // *** Annoying key down
  var demo5 = document.getElementById('demo5Button');
  var demo5Content = document.getElementById('demo5Content');
  demo5.addEventListener('keydown', function(){
    var log = document.createElement('p');
    log.innerText = 'key down: '+ event.keyCode;
    demo5Content.appendChild(log);
  });

  // *** Annoying hover demo 6 is CSS based

  // *** Annoying touchstart on mobile
  var demo6 = document.getElementById('demo7Button');
  var demo6Content = document.getElementById('demo7Content');
  demo6.addEventListener('touchstart',function(){
    this.style.background = 'limegreen';
    demo6Content.style.display = 'block';
  });
  
  // *** Annoying Kittens
  var demo8 = document.getElementById('demo8Button');
  var demo8Content = document.getElementById('demo8Content');
  var count = 0;

  function unleashKittens(){
    var newel = document.createElement('span');
    var randomHeight = Math.floor(Math.random() * (400 - 50) + 50);
    var randomWidth = Math.floor(Math.random() * (400 - 50) + 50);
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    count++;
    newel.className = 'annoying';
    newel.style.height = randomHeight + 'px';
    newel.style.width = randomWidth + 'px';
    newel.style.background = '#'+randomColor;
    newel.style.left = (randomWidth - 50) + 'px';
    newel.style.top = (randomHeight - (randomHeight/2) - 50) + 'px';
    newel.innerHTML = '<img src="https://placekitten.com/'+randomWidth+'/'+randomHeight+'" alt="Kitten image number '+count+'">';
    demo8Content.appendChild(newel);
  }

  demo8.addEventListener('mousedown', unleashKittens);
  demo8.addEventListener('keydown', function(){
    if(event.keyCode === 32){
      unleashKittens();
    }
  })
  
})();