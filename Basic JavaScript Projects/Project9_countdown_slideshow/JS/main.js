function countdown() { 
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1;
        document.getElementById("timer").innerHTML = seconds;

        if (seconds > 0) {
            setTimeout(tick, 1000);
        } else {
            alert("Time's up!");
            document.getElementById("timer").innerHTML = "";
        }
    }

    // Start countdown only if seconds is greater than 0
    if (seconds > 0) {
        tick();
    }
}
