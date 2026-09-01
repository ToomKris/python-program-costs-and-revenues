const eelarve = {
    Toit: 0,
    Transport: 0,
    Majapidamine: 0,
    Meelelahutus: 0
};

function uuendaVaadet() {
    for (const kategooria in eelarve) {
        document.getElementById(kategooria).textContent =
            eelarve[kategooria].toFixed(2) + " €";
    }
}

function valiKategooria() {
    const kategooria = prompt(
        "Choose a category:\n\nToit\nTransport\nMajapidamine\nMeelelahutus"
    );

    if (!eelarve.hasOwnProperty(kategooria)) {
        naitaSonum("Invalid category.");
        return null;
    }

    return kategooria;
}

function lisaRaha() {
    const kategooria = valiKategooria();

    if (!kategooria) {
        return;
    }

    const summa = parseFloat(
        prompt("Enter the amount you want to add:")
    );

    if (isNaN(summa)) {
        naitaSonum("Please enter a valid number.");
        return;
    }

    if (summa < 0) {
        naitaSonum("The amount cannot be negative.");
        return;
    }

    eelarve[kategooria] += summa;

    naitaSonum(
        summa.toFixed(2) +
        " € added to " +
        kategooria +
        "."
    );

    uuendaVaadet();
}

function kulutaRaha() {
    const kategooria = valiKategooria();

    if (!kategooria) {
        return;
    }

    const summa = parseFloat(
        prompt("Enter the amount you want to spend:")
    );

    if (isNaN(summa)) {
        naitaSonum("Please enter a valid number.");
        return;
    }

    if (summa < 0) {
        naitaSonum("The amount cannot be negative.");
        return;
    }

    if (eelarve[kategooria] < summa) {
        naitaSonum("Not enough money in this category.");
        return;
    }

    eelarve[kategooria] -= summa;

    naitaSonum(
        summa.toFixed(2) +
        " € spent from " +
        kategooria +
        "."
    );

    uuendaVaadet();
}

function naitaJaaki() {
    let tekst = "Current balances:\n\n";

    for (const kategooria in eelarve) {
        tekst +=
            kategooria +
            ": " +
            eelarve[kategooria].toFixed(2) +
            " €\n";
    }

    alert(tekst);
}

function naitaSonum(tekst) {
    document.getElementById("message").textContent = tekst;
}

uuendaVaadet();
