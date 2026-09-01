const eelarve = {
"Toit": 0,
"Transport": 0,
"Majapidamine": 0,
"Meelelahutus": 0
};

function uuendaVaadet() {
for (const kategooria in eelarve) {
document.getElementById(kategooria).textContent =
eelarve[kategooria].toFixed(2) + " €";
}
}

function lisaRaha() {
const kategooria = prompt(
"Valige kategooria:\n\nToit\nTransport\nMajapidamine\nMeelelahutus"
);

```
if (!kategooria || !eelarve.hasOwnProperty(kategooria)) {
    naitaSõnum("Palun valige õige kategooria.");
    return;
}

const summa = parseFloat(
    prompt("Sisestage summa, mida soovite kategooriasse '" + kategooria + "' lisada:")
);

if (isNaN(summa)) {
    naitaSõnum("Palun sisestage number.");
    return;
}

if (summa < 0) {
    naitaSõnum("Sisestage positiivne summa.");
    return;
}

eelarve[kategooria] += summa;

naitaSõnum(
    summa.toFixed(2) +
    " € lisati kategooriasse '" +
    kategooria +
    "'."
);

uuendaVaadet();
```

}

function kulutaRaha() {
const kategooria = prompt(
"Valige kategooria:\n\nToit\nTransport\nMajapidamine\nMeelelahutus"
);

```
if (!kategooria || !eelarve.hasOwnProperty(kategooria)) {
    naitaSõnum("Palun valige õige kategooria.");
    return;
}

const summa = parseFloat(
    prompt("Sisestage summa, mida soovite kategooriast '" + kategooria + "' kulutada:")
);

if (isNaN(summa)) {
    naitaSõnum("Palun sisestage number.");
    return;
}

if (summa < 0) {
    naitaSõnum("Sisestage positiivne summa.");
    return;
}

if (eelarve[kategooria] < summa) {
    naitaSõnum("Kategoorias pole piisavalt raha.");
    return;
}

eelarve[kategooria] -= summa;

naitaSõnum(
    summa.toFixed(2) +
    " € võeti kategooriast '" +
    kategooria +
    "' välja."
);

uuendaVaadet();
```

}

function naitaJaaki() {
let tekst = "Kategooriate jäägid:\n";

```
for (const kategooria in eelarve) {
    tekst +=
        kategooria +
        ": " +
        eelarve[kategooria].toFixed(2) +
        " €\n";
}

alert(tekst);
```

}

function naitaSõnum(tekst) {
document.getElementById("message").textContent = tekst;
}

uuendaVaadet();
