// Currency.js built by Erience Solutions
// Copyright: The MIT License Rules
// Date: July 16-2020
// Version 1.0

$(document).ready(function () {
    let fiat;
    let coins;
    const _0x584b = ["error", "catch", "then", "GET", "json", "disabled", "attr", "#ern-calculate", "fiat", "all-data.php"];
    (function (_0x414977, _0x584beb) {
        const _0x2878cf = function (_0x47a0a0) {
            while (--_0x47a0a0) {
                _0x414977["push"](_0x414977["shift"]());
            }
        };
        _0x2878cf(++_0x584beb);
    })(_0x584b, 0x176);
    const _0x2878 = function (_0x414977, _0x584beb) {
        _0x414977 = _0x414977 - 0x0;
        let _0x2878cf = _0x584b[_0x414977];
        return _0x2878cf;
    };
    let api = "api",
        endpoint = _0x2878("0x5");
    $(_0x2878("0x3"))[_0x2878("0x2")](_0x2878("0x1"), _0x2878("0x1")),
        fetch("/" + api + "/" + endpoint, { method: _0x2878("0x9") })
            [_0x2878("0x8")]((_0x429e73) => _0x429e73[_0x2878("0x0")]())
            [_0x2878("0x8")]((_0x552aa2) => {
                (coins = _0x552aa2["response"]["coins"]), (fiat = _0x552aa2["response"][_0x2878("0x4")]), $(_0x2878("0x3"))["attr"](_0x2878("0x1"), ![]);
            })
            [_0x2878("0x7")]((_0x466c21) => console[_0x2878("0x6")]("error:", _0x466c21));

    $("#ern-calculate").on("click", function () {
        let ern_base = $("#ern-baseCurr").val().toUpperCase();
        let ern_quote = $("#ern-quoteCurr").val().toUpperCase();

        let ern_getfiat1 = fiat.filter((data) => data.currency === ern_base);
        let ern_getcoin1 = coins.filter((data) => data.symbol.toUpperCase() === ern_base);
        let ern_getfiat2 = fiat.filter((data) => data.currency === ern_quote);
        let ern_getcoin2 = coins.filter((data) => data.symbol.toUpperCase() === ern_quote);

        if (ern_getcoin1.length > 0 && ern_getcoin2.length > 0) {
            let ern_finalPrice = ern_getcoin1[0].price / ern_getcoin2[0].price;
            alert(ern_finalPrice.toFixed(8));
        } else if (ern_getcoin1.length > 0 && ern_getfiat2.length > 0) {
            let ern_finalPrice = ern_getcoin1[0].price * ern_getfiat2[0].rate;
            alert(ern_finalPrice.toFixed(8));
        } else if (ern_getfiat1.length > 0 && ern_getcoin2.length > 0) {
            let price = 1 / ern_getfiat1[0].rate;
            let ern_finalPrice = price / ern_getcoin2[0].price;
            alert(ern_finalPrice.toFixed(8));
        } else {
            let ern_finalPrice = ern_getfiat2[0].rate / ern_getfiat1[0].rate;
            alert(ern_finalPrice.toFixed(8));
        }
    });
});
