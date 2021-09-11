const colors = ["yellow", "blue", "red", "orange"];
colors.forEach((i) => {
    console.log(`${i}`);
});

/*

    1) Hoeveel regels neemt mijn for loop en mijn while loop in beslag?
        Voor de while loop 6 regels en voor de for loop 4 regels.
    2) Hoeveel regels neemt mijn forEach method in beslag?
       Voor de forEach method 3 regels
    3) Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop? Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom?
       de forEach methode is overzichtelijker
    4) Kun je een array method gebruiken op een object? Het antwoord is nee.
       Stel je hebt een object met 45 properties. Probeer eens uit te zoeken (gebruik Google) hoe je tóch die 45 properties kunt console.loggen met een loop: Looping through the properties of an object.
       Probeer dit stukje code uit en gebruik hier een object met 5 properties voor. Ben je nu aan het itereren?
       Ik zou hiervoor de forLoop gebruiken omdat ik het duidelijker vind
*/