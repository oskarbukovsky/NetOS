NetOS
=============

```
.md help text :)
This library is the **first step** of a journey that every markup file in a repository goes on before it is rendered on GitHub.com:

1. `github-markup` selects an _underlying library_ to convert the raw markup to HTML. See the list of [supported markup formats](#markups) below.
1. The HTML is sanitized, aggressively removing things that could harm you and your kin—such as `script` tags, inline-styles, and `class` or `id` attributes.
1. Syntax highlighting is performed on code blocks. See [github/linguist](https://github.com/github/linguist#syntax-highlighting) for more information about syntax highlighting.
1. The HTML is passed through other filters that add special sauce, such as emoji, task lists, named anchors, CDN caching for images, and autolinking.
1. The resulting HTML is rendered on GitHub.com.

Please note that **only the first step** is covered by this gem — the rest happens on GitHub.com.  In particular, `markup` itself does no sanitization of the resulting HTML, as it expects that to be covered by whatever pipeline is consuming the HTML.

Please see our [contributing guidelines](CONTRIBUTING.md) before reporting an issue.

Markups
-------

The following markups are supported.  The dependencies listed are required if
you wish to run the library. You can also run `script/bootstrap` to fetch them all.

* [.markdown, .mdown, .mkdn, .md](http://daringfireball.net/projects/markdown/) -- `gem install commonmarker` (https://github.com/gjtorikian/commonmarker)
* [.textile](https://www.promptworks.com/textile) -- `gem install RedCloth` (https://github.com/jgarber/redcloth)
* [.rdoc](https://ruby.github.io/rdoc/) -- `gem install rdoc -v 3.6.1`
* [.org](http://orgmode.org/) -- `gem install org-ruby` (https://github.com/wallyqs/org-ruby)
* [.creole](http://wikicreole.org/) -- `gem install creole` (https://github.com/larsch/creole)
* [.mediawiki, .wiki](http://www.mediawiki.org/wiki/Help:Formatting) -- `gem install wikicloth` (https://github.com/nricciar/wikicloth)
* [.rst](http://docutils.sourceforge.net/rst.html) -- `pip install docutils`
* [.asciidoc, .adoc, .asc](http://asciidoc.org/) -- `gem install asciidoctor` (http://asciidoctor.org)
* [.pod](http://search.cpan.org/dist/perl/pod/perlpod.pod) -- `Pod::Simple::XHTML`
  comes with Perl >= 5.10. Lower versions should install Pod::Simple from CPAN.
  
  
## Tech

Dillinger uses a number of open source projects to work properly:

- [AngularJS] - HTML enhanced for web apps!
- [Ace Editor] - awesome web-based text editor
- [markdown-it] - Markdown parser done right. Fast and easy to extend.
- [Twitter Bootstrap] - great UI boilerplate for modern web apps
- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework [@tjholowaychuk]
- [Gulp] - the streaming build system
- [Breakdance](https://breakdance.github.io/breakdance/) - HTML
to Markdown converter
- [jQuery] - duh

| Plugin | README |
| ------ | ------ |
| Dropbox | [plugins/dropbox/README.md][PlDb] :white_check_mark:|
| GitHub | [plugins/github/README.md][PlGh] :heavy_check_mark:|
| Google Drive | [plugins/googledrive/README.md][PlGd] :x:|
| OneDrive | [plugins/onedrive/README.md][PlOd] |
| Medium | [plugins/medium/README.md][PlMe] |
| Google Analytics | [plugins/googleanalytics/README.md][PlGa] |

This will create the dillinger image and pull in the necessary dependencies.
Be sure to swap out `${package.json.version}` with the actual
version of Dillinger.

> Note: `--capt-add=SYS-ADMIN` is required for PDF rendering.


   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>
   
   https://img.shields.io/github/stars/oskarbukovsky/NetOS.svg?style=social&label=Star
   https://img.shields.io/github/followers/Sangwan5688.svg?style=social&label=Follow
   https://img.shields.io/github/forks/Sangwan5688/BlackHole.svg?style=social&label=Forks
```

Installation
-----------

```
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

```
let environment = new NetOS();
```

Better form:

```
let environment = new NetOS({
    $loadModules: [{login:true}]
});
```
