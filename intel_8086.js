const procesor = [];

let AH;
let AL;
let BH;
let BL;
let CH;
let CL;
let DH;
let DL;
const rejestry = [];
rejestry.push("AH", "AL", "BH", "BL", "CH", "CL", "DH", "DL");

document.getElementById("AH").addEventListener("change", sprawdz_dane);
document.getElementById("AL").addEventListener("change", sprawdz_dane);
document.getElementById("BH").addEventListener("change", sprawdz_dane);
document.getElementById("BL").addEventListener("change", sprawdz_dane);
document.getElementById("CH").addEventListener("change", sprawdz_dane);
document.getElementById("CL").addEventListener("change", sprawdz_dane);
document.getElementById("DH").addEventListener("change", sprawdz_dane);
document.getElementById("DL").addEventListener("change", sprawdz_dane);

function sprawdz_dane() {

    let AH_message = document.getElementById("AH").value;
    document.getElementById("AH").value=AH_message.toUpperCase();
    AH_message = document.getElementById("AH").value;
    if (AH_message != "") {
        let x;
        let size = AH_message.length;
    
        var regex = /[0-9A-Fa-f]{2}/g;
        if (AH_message.match(regex) ){
            x = 1;
        }else{
            x = 2;
        }

        if (size > 2) {
            x = 2;
        }

        switch (x) {
            case 1:
                document.getElementById("AH_message").style.visibility = "hidden";
                document.getElementById("MOVE").style.display = 'inline-block';
                document.getElementById("XCHG").style.display = 'inline-block';
                document.getElementById("ADD").style.display = 'inline-block';
                document.getElementById("SUB").style.display = 'inline-block';
                document.getElementById("AND").style.display = 'inline-block';
                document.getElementById("OR").style.display = 'inline-block';
                document.getElementById("XOR").style.display = 'inline-block';
                document.getElementById("NOT").style.display = 'inline-block';
                document.getElementById("INC").style.display = 'inline-block';
                document.getElementById("DEC").style.display = 'inline-block';
                break;

            case 2:
                document.getElementById("AH_message").style.visibility = "visible";
                document.getElementById("MOVE").style.display = 'none';
                document.getElementById("XCHG").style.display = 'none';
                document.getElementById("ADD").style.display = 'none';
                document.getElementById("SUB").style.display = 'none';
                document.getElementById("AND").style.display = 'none';
                document.getElementById("OR").style.display = 'none';
                document.getElementById("XOR").style.display = 'none';
                break;

            default:
                alert("Podane dane są błędne");
                break;
        }
    }

    let AL_message = document.getElementById("AL").value;
    document.getElementById("AL").value=AL_message.toUpperCase();
    AL_message = document.getElementById("AL").value;
    if (AL_message != "") {
        let x;
        let size = AL_message.length;

        var regex = /[0-9A-Fa-f]{2}/g;
        if (AL_message.match(regex) ){
            x = 1;
        }else{
            x = 2;
        }

        if (size > 2) {
            x = 2;
        }

        switch (x) {
            case 1:
                document.getElementById("AL_message").style.visibility = "hidden";
                document.getElementById("MOVE").style.display = 'inline-block';
                document.getElementById("XCHG").style.display = 'inline-block';
                document.getElementById("ADD").style.display = 'inline-block';
                document.getElementById("SUB").style.display = 'inline-block';
                document.getElementById("AND").style.display = 'inline-block';
                document.getElementById("OR").style.display = 'inline-block';
                document.getElementById("XOR").style.display = 'inline-block';
                document.getElementById("NOT").style.display = 'inline-block';
                document.getElementById("INC").style.display = 'inline-block';
                document.getElementById("DEC").style.display = 'inline-block';
                break;

            case 2:
                document.getElementById("AL_message").style.visibility = "visible";
                document.getElementById("MOVE").style.display = 'none';
                document.getElementById("XCHG").style.display = 'none';
                document.getElementById("ADD").style.display = 'none';
                document.getElementById("SUB").style.display = 'none';
                document.getElementById("AND").style.display = 'none';
                document.getElementById("OR").style.display = 'none';
                document.getElementById("XOR").style.display = 'none';
                break;

            default:
                alert("Podane dane są błędne");
                break;
        }
    }

    let BH_message = document.getElementById("BH").value;
    document.getElementById("BH").value=BH_message.toUpperCase();
    BH_message = document.getElementById("BH").value;
    if (BH_message != "") {
        let x;
        let size = BH_message.length;

        var regex = /[0-9A-Fa-f]{2}/g;
        if (BH_message.match(regex) ){
            x = 1;
        }else{
            x = 2;
        }

        if (size > 2) {
            x = 2;
        }

        switch (x) {
            case 1:
                document.getElementById("BH_message").style.visibility = "hidden";
                document.getElementById("MOVE").style.display = 'inline-block';
                document.getElementById("XCHG").style.display = 'inline-block';
                document.getElementById("ADD").style.display = 'inline-block';
                document.getElementById("SUB").style.display = 'inline-block';
                document.getElementById("AND").style.display = 'inline-block';
                document.getElementById("OR").style.display = 'inline-block';
                document.getElementById("XOR").style.display = 'inline-block';
                document.getElementById("NOT").style.display = 'inline-block';
                document.getElementById("INC").style.display = 'inline-block';
                document.getElementById("DEC").style.display = 'inline-block';
                break;

            case 2:
                document.getElementById("BH_message").style.visibility = "visible";
                document.getElementById("MOVE").style.display = 'none';
                document.getElementById("XCHG").style.display = 'none';
                document.getElementById("ADD").style.display = 'none';
                document.getElementById("SUB").style.display = 'none';
                document.getElementById("AND").style.display = 'none';
                document.getElementById("OR").style.display = 'none';
                document.getElementById("XOR").style.display = 'none';
                break;

            default:
                alert("Podane dane są błędne");
                break;
        }
    }

    let BL_message = document.getElementById("BL").value;
    document.getElementById("BL").value=BL_message.toUpperCase();
    BL_message = document.getElementById("BL").value;
    if (BL_message != "") {
        let x;
        let size = BL_message.length;

        var regex = /[0-9A-Fa-f]{2}/g;
        if (BL_message.match(regex) ){
            x = 1;
        }else{
            x = 2;
        }

        if (size > 2) {
            x = 2;
        }

        switch (x) {
            case 1:
                document.getElementById("BL_message").style.visibility = "hidden";
                document.getElementById("MOVE").style.display = 'inline-block';
                document.getElementById("XCHG").style.display = 'inline-block';
                document.getElementById("ADD").style.display = 'inline-block';
                document.getElementById("SUB").style.display = 'inline-block';
                document.getElementById("AND").style.display = 'inline-block';
                document.getElementById("OR").style.display = 'inline-block';
                document.getElementById("XOR").style.display = 'inline-block';
                document.getElementById("NOT").style.display = 'inline-block';
                document.getElementById("INC").style.display = 'inline-block';
                document.getElementById("DEC").style.display = 'inline-block';
                break;

            case 2:
                document.getElementById("BL_message").style.visibility = "visible";
                document.getElementById("MOVE").style.display = 'none';
                document.getElementById("XCHG").style.display = 'none';
                document.getElementById("ADD").style.display = 'none';
                document.getElementById("SUB").style.display = 'none';
                document.getElementById("AND").style.display = 'none';
                document.getElementById("OR").style.display = 'none';
                document.getElementById("XOR").style.display = 'none';
                break;

            default:
                alert("Podane dane są błędne");
                break;
        }
    }

    let CH_message = document.getElementById("CH").value;
    document.getElementById("CH").value=CH_message.toUpperCase();
    CH_message = document.getElementById("CH").value;
    if (CH_message != "") {
        let x;
        let size = CH_message.length;

        var regex = /[0-9A-Fa-f]{2}/g;
        if (CH_message.match(regex) ){
            x = 1;
        }else{
            x = 2;
        }

        if (size > 2) {
            x = 2;
        }

        switch (x) {
            case 1:
                document.getElementById("CH_message").style.visibility = "hidden";
                document.getElementById("MOVE").style.display = 'inline-block';
                document.getElementById("XCHG").style.display = 'inline-block';
                document.getElementById("ADD").style.display = 'inline-block';
                document.getElementById("SUB").style.display = 'inline-block';
                document.getElementById("AND").style.display = 'inline-block';
                document.getElementById("OR").style.display = 'inline-block';
                document.getElementById("XOR").style.display = 'inline-block';
                document.getElementById("NOT").style.display = 'inline-block';
                document.getElementById("INC").style.display = 'inline-block';
                document.getElementById("DEC").style.display = 'inline-block';
                break;

            case 2:
                document.getElementById("CH_message").style.visibility = "visible";
                document.getElementById("MOVE").style.display = 'none';
                document.getElementById("XCHG").style.display = 'none';
                document.getElementById("ADD").style.display = 'none';
                document.getElementById("SUB").style.display = 'none';
                document.getElementById("AND").style.display = 'none';
                document.getElementById("OR").style.display = 'none';
                document.getElementById("XOR").style.display = 'none';
                break;

            default:
                alert("Podane dane są błędne");
                break;
        }
    }

    let CL_message = document.getElementById("CL").value;
    document.getElementById("CL").value=CL_message.toUpperCase();
    CL_message = document.getElementById("CL").value;
    if (CL_message != "") {
        let x;
        let size = CL_message.length;

        var regex = /[0-9A-Fa-f]{2}/g;
        if (CL_message.match(regex) ){
            x = 1;
        }else{
            x = 2;
        }

        if (size > 2) {
            x = 2;
        }

        switch (x) {
            case 1:
                document.getElementById("CL_message").style.visibility = "hidden";
                document.getElementById("MOVE").style.display = 'inline-block';
                document.getElementById("XCHG").style.display = 'inline-block';
                document.getElementById("ADD").style.display = 'inline-block';
                document.getElementById("SUB").style.display = 'inline-block';
                document.getElementById("AND").style.display = 'inline-block';
                document.getElementById("OR").style.display = 'inline-block';
                document.getElementById("XOR").style.display = 'inline-block';
                document.getElementById("NOT").style.display = 'inline-block';
                document.getElementById("INC").style.display = 'inline-block';
                document.getElementById("DEC").style.display = 'inline-block';
                break;

            case 2:
                document.getElementById("CL_message").style.visibility = "visible";
                document.getElementById("MOVE").style.display = 'none';
                document.getElementById("XCHG").style.display = 'none';
                document.getElementById("ADD").style.display = 'none';
                document.getElementById("SUB").style.display = 'none';
                document.getElementById("AND").style.display = 'none';
                document.getElementById("OR").style.display = 'none';
                document.getElementById("XOR").style.display = 'none';
                break;

            default:
                alert("Podane dane są błędne");
                break;
        }
    }

    let DH_message = document.getElementById("DH").value;
    document.getElementById("DH").value=DH_message.toUpperCase();
    DH_message = document.getElementById("DH").value;
    if (DH_message != "") {
        let x;
        let size = DH_message.length;

        var regex = /[0-9A-Fa-f]{2}/g;
        if (DH_message.match(regex) ){
            x = 1;
        }else{
            x = 2;
        }

        if (size > 2) {
            x = 2;
        }

        switch (x) {
            case 1:
                document.getElementById("DH_message").style.visibility = "hidden";
                document.getElementById("MOVE").style.display = 'inline-block';
                document.getElementById("XCHG").style.display = 'inline-block';
                document.getElementById("ADD").style.display = 'inline-block';
                document.getElementById("SUB").style.display = 'inline-block';
                document.getElementById("AND").style.display = 'inline-block';
                document.getElementById("OR").style.display = 'inline-block';
                document.getElementById("XOR").style.display = 'inline-block';
                document.getElementById("NOT").style.display = 'inline-block';
                document.getElementById("INC").style.display = 'inline-block';
                document.getElementById("DEC").style.display = 'inline-block';
                break;

            case 2:
                document.getElementById("DH_message").style.visibility = "visible";
                document.getElementById("MOVE").style.display = 'none';
                document.getElementById("XCHG").style.display = 'none';
                document.getElementById("ADD").style.display = 'none';
                document.getElementById("SUB").style.display = 'none';
                document.getElementById("AND").style.display = 'none';
                document.getElementById("OR").style.display = 'none';
                document.getElementById("XOR").style.display = 'none';
                break;

            default:
                alert("Podane dane są błędne");
                break;
        }
    }

    let DL_message = document.getElementById("DL").value;
    document.getElementById("DL").value=DL_message.toUpperCase();
    DL_message = document.getElementById("DL").value;
    if (DL_message != "") {
        let x;
        let size = DL_message.length;
        console.log(DL_message);
        var regex = /[0-9A-Fa-f]{2}/g;
        if (DL_message.match(regex) ){
            x = 1;
        }else{
            x = 2;
        }

        if (size > 2) {
            x = 2;
        }

        switch (x) {
            case 1:
                document.getElementById("DL_message").style.visibility = "hidden";
                document.getElementById("MOVE").style.display = 'inline-block';
                document.getElementById("XCHG").style.display = 'inline-block';
                document.getElementById("ADD").style.display = 'inline-block';
                document.getElementById("SUB").style.display = 'inline-block';
                document.getElementById("AND").style.display = 'inline-block';
                document.getElementById("OR").style.display = 'inline-block';
                document.getElementById("XOR").style.display = 'inline-block';
                document.getElementById("NOT").style.display = 'inline-block';
                document.getElementById("INC").style.display = 'inline-block';
                document.getElementById("DEC").style.display = 'inline-block';
                break;

            case 2:
                document.getElementById("DL_message").style.visibility = "visible";
                document.getElementById("MOVE").style.display = 'none';
                document.getElementById("XCHG").style.display = 'none';
                document.getElementById("ADD").style.display = 'none';
                document.getElementById("SUB").style.display = 'none';
                document.getElementById("AND").style.display = 'none';
                document.getElementById("OR").style.display = 'none';
                document.getElementById("XOR").style.display = 'none';
                break;

            default:
                alert("Podane dane są błędne");
                break;
        }
    }

    if(document.getElementById("AH_message").style.visibility == "visible"|| document.getElementById("AL_message").style.visibility == "visible" || document.getElementById("BH_message").style.visibility == "visible" || document.getElementById("BL_message").style.visibility == "visible" || document.getElementById("CH_message").style.visibility == "visible" || document.getElementById("CL_message").style.visibility == "visible" || document.getElementById("DH_message").style.visibility == "visible" || document.getElementById("DL_message").style.visibility == "visible"){
                document.getElementById("MOVE").style.display = 'none';
                document.getElementById("XCHG").style.display = 'none';
                document.getElementById("ADD").style.display = 'none';
                document.getElementById("SUB").style.display = 'none';
                document.getElementById("AND").style.display = 'none';
                document.getElementById("OR").style.display = 'none';
                document.getElementById("XOR").style.display = 'none';
                document.getElementById("NOT").style.display = 'none';
                document.getElementById("INC").style.display = 'none';
                document.getElementById("DEC").style.display = 'none';
    }
}

document.getElementById("MOVE").addEventListener("click", MOVE);

function MOVE() {
    let pierwszy = document.getElementById("pierwszy").value;
    let drugi = document.getElementById("drugi").value;

    MOVE2(drugi, pierwszy);

}
function MOVE2(a, b) {
    let c = document.getElementById(b).value;
    document.getElementById(a).value = c;
}

document.getElementById("XCHG").addEventListener("click", XCHG);

function XCHG() {
    let pierwszy = document.getElementById("pierwszy").value;
    let drugi = document.getElementById("drugi").value;

    XCHG2(drugi, pierwszy);
}
function XCHG2(pierwszy, drugi) {
    let a = document.getElementById(pierwszy).value;
    let b = document.getElementById(drugi).value;

    document.getElementById(pierwszy).value = b;
    document.getElementById(drugi).value = a;
}

function hex2dec(string_hex) {
    return (parseInt(string_hex, 16))
}

function dec2hex(string_dec) {
    return (string_dec.toString(16).toUpperCase());
}


function hex2bin(string_hex) {
    return (parseInt(string_hex, 16)).toString(2).substr(-8);
}


function bin2hex(string_bin) {
    return (parseInt(string_bin, 2).toString(16));
}


document.getElementById("NOT").addEventListener("click", NOT);

function NOT() {
    let a = document.getElementById("trzeci").value;
    let b = document.getElementById(a).value;

    b = hex2bin(b);


    x=-1;
    let binary=[];
    binary.push(b.slice(x));
    for (let i = 1; i < b.length; i++) {
        binary.push(b.slice(x-1,x))
        x--;
    }
    binary = binary.reverse();






    for (let i = 0; i < binary.length;i++) {
        if(binary[i]=="1"){
            binary[i]="0";
        }else{
            binary[i]="1";
        }
        
    }




    let wynik_tabela="";
    binary.forEach(arg => {
        wynik_tabela+=arg;
    });




    binary = binary.reverse();
    wynik_tabela2 = bin2hex(wynik_tabela);

    wynik_tabela2=wynik_tabela2.toUpperCase();


    let h = document.getElementById("historia");
    h.innerHTML+="Rejestr: " + a + ", funkcja NOT: <br>" + wynik_tabela2 + "(HEX) lub " + wynik_tabela + "(BIN)<hr>";
}


document.getElementById("OR").addEventListener("click", OR);

function OR() {
    let pierwszy_r = document.getElementById("pierwszy").value;
    let drugi_r = document.getElementById("drugi").value;

    pierwszy = document.getElementById(pierwszy_r).value;
    drugi = document.getElementById(drugi_r).value;

    pierwszy = hex2bin(pierwszy);
    drugi = hex2bin(drugi);

    x=-1;
    let tab_pierwszy=[];
    tab_pierwszy.push(pierwszy.slice(x));
    for (let i = 1; i < pierwszy.length; i++) {
        tab_pierwszy.push(pierwszy.slice(x-1,x))
        x--;
    }
    if(tab_pierwszy.length<8){
        for (let i = tab_pierwszy.length; i < 8; i++) {
            tab_pierwszy.push("0");
            
        }
    }
    tab_pierwszy = tab_pierwszy.reverse();

    


    x=-1;
    let tab_drugi=[];
    tab_drugi.push(drugi.slice(x));
    for (let i = 1; i < drugi.length; i++) {
        tab_drugi.push(drugi.slice(x-1,x))
        x--;
    }
    if(tab_drugi.length<8){
        for (let i = tab_drugi.length; i < 8; i++) {
            tab_drugi.push("0");
            
        }
    }
    tab_drugi = tab_drugi.reverse();

    let tab_wynik=[];
    for (let index = 0; index < 8; index++) {
        if(parseInt(tab_pierwszy[index]) + parseInt(tab_drugi[index]) ==0){
            tab_wynik.push(0);
        }else{
            tab_wynik.push(1);
        }
    }

    console.table(tab_pierwszy);
    console.table(tab_drugi);
    console.table(tab_wynik);

    let tab_wynik_bin="";
    tab_wynik.forEach(arg => {
        tab_wynik_bin+=arg;
    });

    tab_wynik2 = bin2hex(tab_wynik_bin);

    tab_wynik2=tab_wynik2.toUpperCase();


    let h = document.getElementById("historia");
    h.innerHTML+="Rejestr: " + pierwszy_r + " oraz " + drugi_r + ", funkcja OR: <br>" + tab_wynik2 + "(HEX) lub " + tab_wynik_bin + "(BIN)<hr>";


}


document.getElementById("XOR").addEventListener("click", XOR);

function XOR() {
    let pierwszy_r = document.getElementById("pierwszy").value;
    let drugi_r = document.getElementById("drugi").value;

    pierwszy = document.getElementById(pierwszy_r).value;
    drugi = document.getElementById(drugi_r).value;

    pierwszy = hex2bin(pierwszy);
    drugi = hex2bin(drugi);

    x=-1;
    let tab_pierwszy=[];
    tab_pierwszy.push(pierwszy.slice(x));
    for (let i = 1; i < pierwszy.length; i++) {
        tab_pierwszy.push(pierwszy.slice(x-1,x))
        x--;
    }
    if(tab_pierwszy.length<8){
        for (let i = tab_pierwszy.length; i < 8; i++) {
            tab_pierwszy.push("0");
            
        }
    }
    tab_pierwszy = tab_pierwszy.reverse();

    


    x=-1;
    let tab_drugi=[];
    tab_drugi.push(drugi.slice(x));
    for (let i = 1; i < drugi.length; i++) {
        tab_drugi.push(drugi.slice(x-1,x))
        x--;
    }
    if(tab_drugi.length<8){
        for (let i = tab_drugi.length; i < 8; i++) {
            tab_drugi.push("0");
            
        }
    }
    tab_drugi = tab_drugi.reverse();

    let tab_wynik=[];
    for (let index = 0; index < 8; index++) {
        if(parseInt(tab_pierwszy[index]) + parseInt(tab_drugi[index]) ==0 || parseInt(tab_pierwszy[index]) + parseInt(tab_drugi[index]) ==2){
            tab_wynik.push(0);
        }else{
            tab_wynik.push(1);
        }
    }

    console.table(tab_pierwszy);
    console.table(tab_drugi);
    console.table(tab_wynik);

    let tab_wynik_bin="";
    tab_wynik.forEach(arg => {
        tab_wynik_bin+=arg;
    });

    tab_wynik2 = bin2hex(tab_wynik_bin);

    tab_wynik2=tab_wynik2.toUpperCase();


    let h = document.getElementById("historia");
    h.innerHTML+="Rejestr: " + pierwszy_r + " oraz " + drugi_r + ", funkcja XOR: <br>" + tab_wynik2 + "(HEX) lub " + tab_wynik_bin + "(BIN)<hr>";


}


document.getElementById("AND").addEventListener("click", AND);

function AND() {
    let pierwszy_r = document.getElementById("pierwszy").value;
    let drugi_r = document.getElementById("drugi").value;

    pierwszy = document.getElementById(pierwszy_r).value;
    drugi = document.getElementById(drugi_r).value;

    pierwszy = hex2bin(pierwszy);
    drugi = hex2bin(drugi);

    x=-1;
    let tab_pierwszy=[];
    tab_pierwszy.push(pierwszy.slice(x));
    for (let i = 1; i < pierwszy.length; i++) {
        tab_pierwszy.push(pierwszy.slice(x-1,x))
        x--;
    }
    if(tab_pierwszy.length<8){
        for (let i = tab_pierwszy.length; i < 8; i++) {
            tab_pierwszy.push("0");
            
        }
    }
    tab_pierwszy = tab_pierwszy.reverse();

    


    x=-1;
    let tab_drugi=[];
    tab_drugi.push(drugi.slice(x));
    for (let i = 1; i < drugi.length; i++) {
        tab_drugi.push(drugi.slice(x-1,x))
        x--;
    }
    if(tab_drugi.length<8){
        for (let i = tab_drugi.length; i < 8; i++) {
            tab_drugi.push("0");
            
        }
    }
    tab_drugi = tab_drugi.reverse();

    let tab_wynik=[];
    for (let index = 0; index < 8; index++) {
        if(parseInt(tab_pierwszy[index]) + parseInt(tab_drugi[index]) ==2){
            tab_wynik.push(1);
        }else{
            tab_wynik.push(0);
        }
    }

    console.table(tab_pierwszy);
    console.table(tab_drugi);
    console.table(tab_wynik);

    let tab_wynik_bin="";
    tab_wynik.forEach(arg => {
        tab_wynik_bin+=arg;
    });

    tab_wynik2 = bin2hex(tab_wynik_bin);

    tab_wynik2=tab_wynik2.toUpperCase();


    let h = document.getElementById("historia");
    h.innerHTML+="Rejestr: " + pierwszy_r + " oraz " + drugi_r + ", funkcja AND: <br>" + tab_wynik2 + "(HEX) lub " + tab_wynik_bin + "(BIN)<hr>";


}


document.getElementById("INC").addEventListener("click", INC);

function INC() {
    let a = document.getElementById("trzeci").value;
    let rejestr = document.getElementById(a).value;
    rejestr = hex2dec(rejestr);
    rejestr++;
    if (rejestr > 255) {
        rejestr = 255;
    }
    rejestr = dec2hex(rejestr);
    document.getElementById(a).value = rejestr;

    sprawdz_dane();
}

document.getElementById("DEC").addEventListener("click", DEC);

function DEC() {
    let a = document.getElementById("trzeci").value;
    let rejestr = document.getElementById(a).value;
    rejestr = hex2dec(rejestr);
    rejestr--;
    rejestr = dec2hex(rejestr);
    if (rejestr < 0) {
        rejestr = 0;
    }
    document.getElementById(a).value = rejestr;
    sprawdz_dane();
}

document.getElementById("ADD").addEventListener("click", ADD);

function ADD() {
    let pierwszy_r = document.getElementById("pierwszy").value;
    let drugi_r = document.getElementById("drugi").value;

    pierwszy = document.getElementById(pierwszy_r).value;
    drugi = document.getElementById(drugi_r).value;

    pierwszy = hex2dec(pierwszy);
    drugi = hex2dec(drugi);

    let wynik_dec= pierwszy + drugi;
    let wynik_bin= dec2hex(wynik_dec);
    wynik_bin=hex2bin(wynik_bin);
    let wynik_hex = dec2hex(wynik_dec);
    wynik_hex=wynik_hex.toUpperCase();


    let h = document.getElementById("historia");
    h.innerHTML+="Rejestr: " + pierwszy_r + " oraz " + drugi_r + ", funkcja ADD: <br>" + wynik_hex + "(HEX) lub " + wynik_bin + "(BIN)<hr>";


}

document.getElementById("SUB").addEventListener("click", SUB);

function SUB() {
    let pierwszy_r = document.getElementById("pierwszy").value;
    let drugi_r = document.getElementById("drugi").value;

    pierwszy = document.getElementById(pierwszy_r).value;
    drugi = document.getElementById(drugi_r).value;

    pierwszy = hex2dec(pierwszy);
    drugi = hex2dec(drugi);

    let wynik_dec= pierwszy - drugi;
    let wynik_bin= dec2hex(wynik_dec);
    wynik_bin=hex2bin(wynik_bin);
    let wynik_hex = dec2hex(wynik_dec);
    wynik_hex=wynik_hex.toUpperCase();


    let h = document.getElementById("historia");
    h.innerHTML+="Rejestr: " + pierwszy_r + " oraz " + drugi_r + ", funkcja SUB: <br>" + wynik_hex + "(HEX) lub " + wynik_bin + "(BIN)<hr>";


}