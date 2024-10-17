function count_to_ten() {
    var digit = "";
    var x = 1;

    while (x < 11) {
        digit += x + "<br>";
        x++;
    }

    document.getElementById("counting").innerHTML = digit;
}
