<img src="http://assets.angular.schule/logo-angular-schulung-heidelberg-2019-03.png">

#### **mit Johannes Hoppe**

<hr>

**Schön, dass Du dabei bist!**  
Merke dir schon einmal dieses Repository.  
Hier wird während des Workshops stets der Quelltext unserer Beispielanwendung verfügbar sein.
> **https://github.com/angular-schule/2019-03-angular-workshop-heidelberg**

Damit wir gleich durchstarten können, solltest Du ein paar Vorbereitungen treffen.  
Die gesamte Installation wird rund 30 Minuten dauern. 

## Benötigte Software

1. **Node.js 8.9** oder höher: [https://nodejs.org](https://nodejs.org)
   + Mac-Benutzer bitte Homebrew verwenden! ([siehe Anleitung](https://presentations.angular.schule/HOMEBREW_NODE))
2. **Google Chrome:** [https://www.google.com/chrome/](https://www.google.com/chrome/)
   + **[Angular Augury](https://chrome.google.com/webstore/detail/augury/elgalmkoelokbchhkhacckoklkejnhcd)** (Chrome Extension)
   + **[Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)** (Chrome Extension)
4. **Visual Studio Code:** [https://code.visualstudio.com](https://code.visualstudio.com)
   + [Angular-Schule: Extension Pack](https://marketplace.visualstudio.com/items?itemName=angular-schule.angular-schule-extension-pack)  (Visual Studio Code Extension)
5. optional: **Git** (und ggf. ein grafischer Client wie SourceTree oder GitExtensions)


## Proxy?

Solltest du einen Firmenlaptop verwenden, so hast du womöglich bereits einen Proxy eingestellt. (siehe z. B. [diese Anleitung](https://presentations.angular.schule/PROXY.html))
Im Workshop-WLAN gibt es keinen Proxy.
Du kommst direkt ins Internet.
Bitte entferne deine Proxy-Einstellungen rechtzeitig vor der Schulung.
Am besten führst du diese Anleitung auch gleich über ein offenes WLAN durch.


## Pakete installieren

Die Angular CLI ist das offizielle Build-Tool für Angular. Mit folgendem Befehl kannst Du die CLI installieren:

```
npm install -g @angular/cli
```

Überprüfe bitte anschließend die Versionen, damit wir beim Workshop alle auf dem gleichen Stand sind.
```
node -v
> Erwartet: v8.9.x oder höher

npm -v
> Erwartet: 5.x oder höher

ng version
> Erwartet: 7.3.5 oder höher
```



## Startprojekt erzeugen

Wir werden gemeinsam ein Beispielprojekt entwickeln.
Bitte lege dazu Übungsprojekt schon vor Beginn des Workshops an.
Die Angular CLI nimmt uns die meisten Schritte schon ab.
Führe in Deinem Arbeitsverzeichnis die folgenden Befehle aus:

```
ng new book-rating --routing --style=scss --prefix=br
cd book-rating
ng serve
```

> ACHTUNG: Bei Fehlern mit `node-gyp` bzw. `node-sass` bitte noch einmal ausführen: `npm i node-sass`.

Die Installation kann bei langsamer Internetverbindung sehr lange dauern.
Warte beim Schritt `Installing packages for tooling via npm.` mit Geduld ab!


> Auf http://localhost:4200 sollte nun eine Website mit dem Text "Welcome to ..." erscheinen!
Wenn bei allen Teilnehmern das Grundgerüst steht, können wir ohne Zeitverlust loslegen.

![Screenshot CLI](http://assets.angular.schule/chrome_cli_welcome.png)


Sollte es zu einer Fehlermeldung kommen, dann sende uns den Fehlertext und einen Screenshot einfach per Mail an [team@angular.schule](mailto:team@angular.schule).  
Wir werden schnell eine Lösung finden.



### Wir freuen uns schon! 🙂

Bei Fragen wende dich einfach direkt an das Angular-Schule-Team:  
[team@angular.schule](mailto:team@angular.schule)

<hr>

<img src="http://assets.angular.schule/logo-angular-schule.png" height="60">

### &copy; 2019 https://angular.schule | Stand: 14.03.2019
