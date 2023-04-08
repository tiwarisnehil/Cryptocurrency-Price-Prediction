let bit_graph = document.getElementById('bit_graph');
let doge_graph = document.getElementById('doge_graph');
let etherium_graph = document.getElementById('etherium_graph');
let binance_graph = document.getElementById('binance_graph');

bit_graph.style.display = `none`
doge_graph.style.display = `none`
etherium_graph.style.display = `none`
binance_graph.style.display = `none`
function bitGraph() {
    if (bit_graph.style.display != `none`) {
        let hide = confirm(`really want to hide bit Graph`)
        bit_graph.style.display = `none`
    }
    else {
        let hide = confirm(`Want to See bit Graph`)
        bit_graph.style.display = `block`
        doge_graph.style.display = `none`
        etherium_graph.style.display = `none`
        binance_graph.style.display = `none`
    }
}
function dogeGraph() {
    if (doge_graph.style.display != `none`) {
        let hide = confirm(`really want to hide doge graph`)
        doge_graph.style.display = `none`
    }
    else {
        let hide = confirm(`Want to See doge graph`)
        doge_graph.style.display = `block`
        bit_graph.style.display = `none`
        etherium_graph.style.display = `none`
        binance_graph.style.display = `none`

    }
}
function etheriumGraph() {
    if (etherium_graph.style.display != `none`) {
        let hide = confirm(`really want to hide etherium graph`)
        etherium_graph.style.display = `none`
    }
    else {
        let hide = confirm(`Want to See etherium graph`)
        etherium_graph.style.display = `block`
        bit_graph.style.display = `none`
        doge_graph.style.display = `none`
        binance_graph.style.display = `none`
    }
}
function binanceGraph() {
    if (binance_graph.style.display != `none`) {
        let hide = confirm(`really want to hide binance graph`)
        binance_graph.style.display = `none`
    }
    else {
        let hide = confirm(`Want to See binance graph`)
        binance_graph.style.display = `block`
        bit_graph.style.display = `none`
        etherium_graph.style.display = `none`
        doge_graph.style.display = `none`
    }
}

function getrealtimepriceRS() {
    var code = document.getElementById("coinCode");
    var price = document.getElementById("realtimeprice");
    console.log(code.value)
    var url = "http://127.0.0.1:5000/showprice";
    $.post(url, {
        coincode: code.value
    }, function (data, status) {
        console.log(data.rtprice);

        price.innerHTML = "<h2>" + data.rtprice.toString() + " </h2>";
        console.log(status);
    });
}
function getrealtimepriceUSD() {
    var code = document.getElementById("coinCode");
    var price = document.getElementById("realtimeprice");
    console.log(code.value)
    var url = "http://127.0.0.1:5000/realtimers";
    $.post(url, {
        coincode: code.value
    }, function (data, status) {
        price.innerHTML = "<h2>" + data.rtprice.toString() + " </h2>";
    });
}

