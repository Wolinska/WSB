//Uzytkownik podaje z klawiatury haslo w polu input, jesli poda bledne haslo to wyswietli sie alert o tresci "bledne haslo", user bedzie pytany do momentu podania poprawnego hasla, haslo bedzie brzmialo "okon", wykorzystaj petle while

elPass = document.getElementById('pass');
elPrzycisk = document.getElementById('przycisk');
let pass,komunikat;

pass = prompt('Podaj haslo');

while (pass != 'okoń') {
    pass = prompt("Podaj ponownie haslo");
}
