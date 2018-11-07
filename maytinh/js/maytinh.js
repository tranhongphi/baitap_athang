var tt = "";

function xoa() {
    document.getElementById("sc").value = "";
}

function addNumber(value) {
    tmp = document.getElementById("sc").value;
    document.getElementById("sc").value += value;
}

function toantu(value) {
    tt = document.getElementById(value).id;
}

function tinh() {
    var str = document.getElementById("sc").value;
    if (tt == "cong") {
        var arr = str.split("+");
    } else if (tt == "tru") {
        var arr = str.split("-");
    } else if (tt == "nhan") {
        var arr = str.split("x");
    } else if (tt == "chia") {
        var arr = str.split("/");
    } else if (tt == "chiadu") {
        var arr = str.split("%");
    } else if (tt == "mu") {
        var arr = str.split("^");
    } else if (tt = "can") {
        var arr = str.split("sqrt");
    }
    var kq = parseInt(arr[0]);
    for (var i = 1; i < arr.length; i++) {
        if (tt == "cong") {
            kq += parseInt(arr[i]);
        } else if (tt == "tru") {
            kq -= parseInt(arr[i]);
        } else if (tt == "chia") {
            kq /= parseInt(arr[i]);
        } else if (tt == "chiadu") {
            kq %= parseInt(arr[i]);
        } else if (tt == "mu") {
            kq = Math.pow(kq, parseInt(arr[i]));
        } else if (tt == "nhan") {
            kq *= parseInt(arr[i]);
        }
    }
    if (tt == "can") {
        var kq1 = parseInt(arr[1]);
        kq = Math.sqrt(kq1);
    }
    document.getElementById("sc").value += kq;
}