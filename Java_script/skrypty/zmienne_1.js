let komunikat = document.getElementById('komunikat');
//komunikat.innerHTML = 'tekst';
komunikat.textContent = 'tekst';

/*
Uzytkownik podaje z klawiatury swoja narodowosc, jesli poda "Lech" to wyswietli sie komunikat na stronie w bloku o tresci "Lech - ekstraklasa???",
"Cracovia" - "Krakow"
"inna druzyna" -  "Poznan"
*/

let druzyna = prompt('Podaj druzyne');

if (druzyna == 'lech' || druzyna == 'Lech')
    komunikat.textContent == 'lech - ekstraklasa???';
else if (druzyna == 'cracovia' || druzyna = "Cracovia")
    komunikat.textContent == 'Krakow';
else
    komunikat.textContent == "Poznan";

//pole kwadratu

/*
jezeli uzytkownik poda z klawiatury prawidloa dlugosc boku (bok > 0) to wyswietli sie mu "Pole wynosi ... cm2" oraz "Obwod wynosi....cm". Jezeli dane beda bledne to wyswietli sie komunikat w kolorze czerwonym. Utworz nowy blok strony do wyswietlenia komunikatu.
*/

let elKomKw = document.getElementById('komKwadrat');
let bok = parseFloat (prompt('Podaj dlugosc boku'));
if (bok > 0) {
    let pole = bok * bok;
    let obwod = 4 * bok;
    let text = '<hr> Pole wynosi: ' + pole + ' cm<sup>2</sup><br>';
        text +='Obwod wynosi: ' + obwod + ' cm';
    elKomKw.textContent = text;
}
else {
   elKomKw.innerHTML = '<span style="color:red"> Bledne dane!</span>';
}
