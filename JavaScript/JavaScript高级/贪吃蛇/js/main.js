var btn = document.querySelector('#start');
btn.addEventListener('click', function() {
    this.style.display = 'none';
    var map = document.querySelector('.map');
    var game = new Game(map);
    game.start();
})