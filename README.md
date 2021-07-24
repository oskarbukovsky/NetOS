NetOS
=============

   ![Stars](https://img.shields.io/github/stars/oskarbukovsky/NetOS.svg?style=social&label=Star)
   ![Forks](https://img.shields.io/github/forks/oskarbukovsky/NetOS.svg?style=social&label=Forks)
   ![Follow](https://img.shields.io/github/followers/oskarbukovsky.svg?style=social&label=Follow)


Technology
-----------

- [Font Awesome](https://fontawesome.com/) - Awesome font gadgets `5.15.2`
- [jQuery](https://jquery.com/) - Highly used javascript library `3.6.0`
- [jQuery UI](https://jqueryui.com/) - jQuery interactive addon `1.12.1`
- [Bootstrap](https://getbootstrap.com/) - JavaScript toolkit `5.0.2-beta2`
- [GApi](https://developers.google.com/people/quickstart/js) - Google api environment
- [crypto-js](https://github.com/brix/crypto-js) - JavaScript crypto library `4.0.0`
- [Lodash](https://lodash.com/) - Used JavaScript library `4.17.21`
- [Popper](https://popper.js.org/) - Tooltip positioning engine `2.9.0`

Support
-----------

| Browser | Support |
| ------ | ------ |
| Edge    | :white_check_mark: >= 81|
| Chrome  | :white_check_mark: >= 85|
| Firefox | :white_check_mark: >= 72|
| Opera   | :white_check_mark: >= 71|
| Safari  | :x:|
| Yandex  | :x:|

> Lower browser versions may work, but this has not been tested yet.

Installation
-----------

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
    integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
    crossorigin="anonymous" />
<link rel="stylesheet" type="text/css" href="files/css/reset.css">
<link rel="stylesheet" type="text/css" href="files/css/netos.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.css"
    integrity="sha512-aOG0c6nPNzGk+5zjwyJaoRUgCdOrfSDhmMID2u4+OIslr0GjpLKo7Xm0Ao3xmpM4T8AmIouRkqwj1nrdVsLKEQ=="
    crossorigin="anonymous" />

<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"
    integrity="sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ=="
    crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://apis.google.com/js/platform.js" type="module" crossorigin="anonymous"
    referrerpolicy="no-referrer"></script>
<script src="https://apis.google.com/js/client:plusone.js" crossorigin="anonymous"
    referrerpolicy="no-referrer"></script>
<script src="https://apis.google.com/js/api.js"
    onreadystatechange="if (this.readyState === 'complete') {this.onload();gapi.load('client:auth2', initClient);}"
    crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script async>
/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
function initClient() {
    gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
    }).then(function () {
        authorizeButton.onclick = handleAuthClick;
        signoutButton.onclick = handleSignoutClick;
    }, function (error) {
        appendPre(JSON.stringify(error, null, 2));
    });
}
</script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"
    integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"
    referrerpolicy="no-referrer"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"
    integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU=" crossorigin="anonymous"
    referrerpolicy="no-referrer"></script>

<script defer src="files/js/netos.test.js"></script>
<script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"
    referrerpolicy="no-referrer"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/core.min.js"
    integrity="sha512-PQsdzDthPKtp230uD7lunTQw6CwNTPnd5LP3e3/+afg9cNkrL7UsfWXT3EW5Ar9XZ5SdADcPDXs1BAWNa9OZ7Q=="
    crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/md5.min.js"
    integrity="sha512-VLDQac8zlryHkFvL1HIH9KKjkPNdsNLEXM/vImKGMaNkEXbNtb+dyhnyXFkxai1RVNtwrD5L7vffgtzYzeKI3A=="
    crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.9.0/umd/popper.min.js"
    integrity="sha512-uxtUCZ+gIIpqJVZe/0IgmHq5yqW+2gzo3zsSqRXSlUBEM2IYxxnuyg7+i7j9SCv1R74/Zixdx0v8OiyShPWbkQ=="
    crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

Usage
-----

Basic form:

```javascript
let environment = new NetOS();
```

Better form:

```javascript
let environment = new NetOS({
    $loadModules: [{login:true}]
});
```

Demo
-----

[![Demo](https://raw.githubusercontent.com/oskarbukovsky/NetOS/main/files/imgs/demo.PNG)](https://oskarbukovsky.github.io/NetOS/netos-old.html)

> Click to image to view demo
