function convert() {
    // determine which changed
    switch (this.id) {
        case "binary":
            var bin = parseInt(this.value, 2);
            document.getElementById("hexadecimal").value = bin.toString(16).toUpperCase();
            document.getElementById("decimal").value = bin.toString(10);
            break;
        case "decimal":
            var dec = parseInt(this.value, 10);
            document.getElementById("binary").value = dec.toString(2);
            document.getElementById("hexadecimal").value = dec.toString(16).toUpperCase();
            break;
        case "hexadecimal":
            var hex = parseInt(this.value, 16);
            document.getElementById("decimal").value = hex.toString(10);
            document.getElementById("binary").value = hex.toString(2);
            break;
    }
}


function ready() {
    document.getElementById("binary").addEventListener("keyup", convert, false);
    document.getElementById("decimal").addEventListener("keyup", convert, false);
    document.getElementById("hexadecimal").addEventListener("keyup", convert, false);
}

// attach listeners once elements are loaded
document.addEventListener("DOMContentLoaded", ready, false);
