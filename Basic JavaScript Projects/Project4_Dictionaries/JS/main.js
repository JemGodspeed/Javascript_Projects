function my_dictionary() {
    var animal = {
        species: "cat",
        color: "orange",
        breed: "siamese",
        age: 3,
        sound: "meow"
    };
    delete animal.sound;
    document.getElementById("dictionary").innerHTML = animal.breed;
}
