# landingpage cms generator with React.js

## Um was handelt es sich genau?
Dieses Tool ermöglicht es, eine responsive Landingpage schnell und einfach, automatisch zu generieren. Das Pflegen der Inhalte funktioniert aktuell noch über eine config.json. In Zukunft wird es noch eine Admin Oberfläche geben. Das Frontend wird hauptsächlich mit React.js Komponenten entwickelt. Dies ermöglich eine schnellere Anpassung und bessere Wartbarkeit. In Zukunft wird es so möglich sein, bestehende Komponenten zu erweitern um es an eigene Bedürfnisse anzupassen. Durch die Entwicklung mit SASS/SCSS war es möglich, eine leicht wartbare Styling Architektur zu entwickeln. So lassen sich mit wenig Aufwand eigene Templates erstellen.

## Wie kann ich es nutzen? (Getting started)
1. git installieren
2. npm installieren 
3. git clone [URL]
4. `npm install` im Terminal des Projektverzeichnises ausführen
5. `npm start` oder `npm run build`
6. pflegen der Inhalte in den config Dateien unter `src/config`

### Welche Technologien kommen bei der Entwicklung zum Einsatz?
+ HTML
+ CSS
+ javaScript 
+ React.js (mit JSX)
+ SASS/SCSS
+ Bootstrap
+ Git
+ NPM
+ Jest
+ Visual Studio Code
+ Linux Mint 
+ Markdown

### Wie funktioniert es?
Aktuell wird noch der gesamte Inhalt der Seite dynamisch aus verschiedenen config.json files zusammengebaut. Diese config files enthalten die verschiedenen Attribute der unterschiedlichen Componenten. Darüber lässt sich zum Beispiel die Breite, ob fullwith oder nicht bestimmen. Auch die Texte, Farben, Bilder, Links, usw. lassen sich über die config Dateien beliebig anpassen und werden regelmäßig erweitert und verbessert.

### Welche Module können aktuell genutzt werden?
Aktuell stehen folgende, pflegbare Module zur Verfügung:
+ Page
+ Navigation
+ Banner
+ Vorstellung
+ Iconrow
+ Details
+ Footer

### icons  
Am besten ist es, die Icons als SVG oder PNGs herunterzuladen und diese in den unter src/img zu findenden Ordner zu legen. Anschließend muss nur noch der exakte Name des Bildes in der config Datei gepflegt werden. Nicht vergessen Bilder ("img" auf "true" setzen).

Hier sind nur einige mögliche Anbieter von free und Premium Icons
+ https://www.flaticon.com/
+ Bootstrap Icons
+ Font Awesome Icons Free


## Beispielbild
![alt text](https://github.com/Ariukuto/landingpage-cms-react/blob/main/.githubres/sample.png?raw=true)
![alt text](https://github.com/Ariukuto/landingpage-cms-react/blob/main/.githubres/iconrow.png?raw=true)
![alt text](https://github.com/Ariukuto/landingpage-cms-react/blob/main/.githubres/details.png?raw=true)

