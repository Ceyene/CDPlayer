const $disc = document.getElementById("disc");
        const $play = document.getElementById("play");
        const $pause = document.getElementById("pause");
        const $stop = document.getElementById("stop");
        const $reverse = document.getElementById("reverse");

        //When clic on play button
        $play.addEventListener("click", (event)=> {
            animation.play(); //Existing method in animation
        });

        //When clic on pause button
        $pause.addEventListener("click", (event)=> {
            animation.pause(); //Existing method in animation
        });
        
        //When clic on stop button
        $stop.addEventListener("click", (event)=> {
            animation.cancel(); //Existing method in animation
        });
        
        //When clic on reverse button
        $reverse.addEventListener("click", (event)=> {
            animation.reverse(); //Existing method in animation
        });

        //Animation of disc
        const animation = $disc.animate([
            //from
            {
                transform: 'rotate(0)'
            },
            //to
            {
                transform: 'rotate(360deg)'
            }
        ], {
            duration: 2000,
            delay: 100,
            direction: 'normal',
            easing: 'linear',
            iterations: 100,
        });

        //Initial state of animation
        animation.pause();