/**
 * @description Universal usage tools set
 * @author Jan Oskar Bukovský <janoskarbukovsky@gmail.com & bukovsky@gchd.cz>
 * @copyright Jan Oskar Bukovský 2021
 * @version 1.0
 * @since 23.07.2021
 * @license MIT 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
'use strict';
console.log(`Is scope strict: ${(function () { return !this; })()}`);

//PWA
/* Only register a service worker if it's supported */
const divInstall = document.getElementById('installContainer');
const butInstall = document.getElementById('butInstall');

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./files/js/service-worker.js');
}

window.addEventListener('beforeinstallprompt', (event) => {
    console.log('👍', 'beforeinstallprompt', event);
    // Stash the event so it can be triggered later.
    window.deferredPrompt = event;
    // Remove the 'hidden' class from the install button container
    divInstall.classList.toggle('hidden', false);
});
butInstall.addEventListener('click', async () => {
    console.log('👍', 'butInstall-clicked');
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        // The deferred prompt isn't available.
        return;
    }
    // Show the install prompt.
    promptEvent.prompt();
    // Log the result
    const result = await promptEvent.userChoice;
    console.log('👍', 'userChoice', result);
    // Reset the deferred prompt variable, since
    // prompt() can only be called once.
    window.deferredPrompt = null;
    // Hide the install button.
    divInstall.classList.toggle('hidden', true);
});

class NetOS {
    config = {
        modules: [{ name: "login", isActive: false, src: "./files/js/modules/Login/main.js" },
        { name: "spipa", isActive: false, src: "./files/js/modules/Spipa/main.js" },
        { name: "OAuth", isActive: false, src: "./files/js/modules/OAuth/main.js" }],
        number: 1
    };
    loadModules($modules) {
        this.config.modules.forEach(modules => {
            $modules.forEach($modules => {
                if (modules.name == Object.keys($modules)[0]) {
                    modules.isActive = $modules[Object.keys($modules)[0]];
                }
            });
        });
        this.config.modules.filter(obj => { return obj.isActive !== false; }).forEach(current => {
            var module = document.createElement("script");
            document.head.appendChild(module);
            module.src = current.src;
        });
    }
    build() {
        eval();
    }
    constructor($modules = { $loadModules: [] }) {
        this.loadModules($modules.$loadModules);
        this.build();
    }
}
//zkurveninu hnusnou, 
let environment = new NetOS({
    $loadModules: [{ login: true }]
});