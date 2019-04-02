let k = document.getElementById('komunikat');
let x = prompt('Podaj co chcesz obliczyc', 'k - kwadrat, p - prostokat, t - trojkat');
let pole, bokA, bokB;


/*
if (x == 'k') {
    bokA = prompt('Podaj dlugosc boku a');
    pole = bokA * bokA;
    k.innerHTML = 'Pole kwadratu wynosi: ' + pole + 'cm<sup>2</sup>';
}
else if (x == 'p'){
    bokA = prompt('Podaj dlugosc boku a');
    bokB = prompt('Podaj dlugosc boku b');
    pole = bokA * bokB;
    k.innerHTML = 'Pole prostokata wynosi: ' + pole + 'cm<sup>2</sup>';
}else if (x == 't'){
    bokA = prompt('Podaj dlugosc podstawy trojkata');
    bokB = prompt('Podaj wysokosc trojkata');
    pole = 0.5 * bokA * bokB
    k.innerHTML = 'Pole trojkata wynosi: ' + pole + 'cm<sup>2</sup>';
}
else{
    k.innerHTML = '<span type=color:red> Błędne dane!</span>';
}
*/

switch (x){
    case 'k':
        bokA = prompt('Podaj dlugosc boku a');
        pole = bokA * bokA;
        k.innerHTML = 'Pole kwadratu wynosi: ' + pole + 'cm<sup>2</sup>';
        break;
    case 'p':
        bokA = prompt('Podaj dlugosc boku a');
        bokB = prompt('Podaj dlugosc boku b');
        pole = bokA * bokB;
        k.innerHTML = 'Pole prostokata wynosi: ' + pole + 'cm<sup>2</sup>';
        break;
    case 't':
        bokA = prompt('Podaj dlugosc podstawy trojkata');
        bokB = prompt('Podaj wysokosc trojkata');
        pole = 0.5 * bokA * bokB
        k.innerHTML = 'Pole trojkata wynosi: ' + pole + 'cm<sup>2</sup>';
        break;
    default;
        k.innerHTML = '<span type=color:red> Błędne dane!</span>';

}
