$(document).ready(function() {
    let gameSpeed = 8;
    let isJumping = false;
    let dino = $('#dino');
    let score = 0;
    

    $(document).keydown(function(e) {
        if (e.keyCode === 32 && !isJumping) {
            isJumping = true;
            dino.animate({ 'bottom': '150px' }, 300, function() {
                dino.animate({ 'bottom': '0' }, 300, function() {
                    isJumping = false;
                });
            });
        }
    });

    function createCactus() {
        let cactus = $('<div class="cactus"><img src="images/cactus.png" width="50px" height="50px"></div>');
        $('#game').append(cactus);

        let cactusPosition = 600;
        let randomTime = Math.random() * 3000 + 1000;

        cactus.css('left', cactusPosition);

        let cactusInterval = setInterval(function() {
            if (cactusPosition < -50) {
                clearInterval(cactusInterval);
                cactus.remove();
            }

            if (cactusPosition > 0 && cactusPosition < 60 && parseInt(dino.css('bottom')) < 50) {
                clearInterval(cactusInterval);
                alert('Game Over!');
                location.reload();
            }

            cactusPosition -= gameSpeed;
            cactus.css('left', cactusPosition);
            score++;
            $('#score').html('<span>Score : '+score+'</span>');
        }, 20);

        setTimeout(createCactus, randomTime);
    }

    createCactus();
});