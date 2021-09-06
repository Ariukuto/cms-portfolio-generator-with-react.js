# landingpage cms generator with React.js

## Um was handelt es sich genau?
Dieses Tool ermöglicht es, eine responsive Landingpage schnell und einfach, automatisch zu generieren. Das Pflegen der Inhalte funktioniert aktuell noch über eine config.json. In Zukunft wird es noch eine Admin Oberfläche geben. Das Frontend wird hauptsächlich mit React.js Komponenten entwickelt. Dies ermöglich eine schnellere Anpassung und bessere Wartbarkeit. In Zukunft wird es so möglich sein, bestehende Komponenten zu erweitern um es an eigene Bedürfnisse anzupassen. Durch die Entwicklung mit SASS/SCSS war es möglich, eine leicht wartbare Styling Architektur zu entwickeln. So lassen sich mit wenig Aufwand eigene Templates erstellen.

## Wie kann ich es nutzen? (Getting started)
1. git installieren
2. npm installieren 
3. git clone [URL]
4. `npm install` im Terminal des Projektverzeichnises ausführen
5. `npm start` oder `npm run build`
6. pflegen der Inhalte unter `src/config/config.json`

### Welche Technologien kommen bei der Entwicklung zum Einsatz?
+ HTML
+ CSS
+ javaScript 
+ React.js (mit JSX)
+ SASS/SCSS (Precompiler für CSS)
+ Bootstrap (UI- und Grid Framework)
+ Git (Versionverwaltung)
+ NPM (Node Packet Manager)
+ Jest (für automatische Tests)

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

### icons  
Am besten ist es, die Icons als SVG oder PNGs herunterzuladen und diese in den unter src/img Ordner zu legen. Anschließend muss nur noch der exakte Name des Bildes in der config Datei gepflegt werden. Nicht vergessen Bilder ("img" auf "true" setzen).

Hier sind nur einige mögliche Anbieter von free und Premium Icons
+ https://www.flaticon.com/
+ Bootstrap Icons
+ Font Awesome Icons Free

## Beispiel Iconpflege
Am Beispiel Font Awesome:  
Screenshot von der Seite: https://fontawesome.com/v5.15/icons/subway?style=solid
![alt text](https://github.com/Ariukuto/landingpage-cms-react/blob/main/.githubres/fa.png?raw=true)  
Gesamten CSS Klassennamen des `<i>` Tags: `fas fa-subway` kopieren und in config.json einfügen  
<br/><br/>
![alt text](https://github.com/Ariukuto/landingpage-cms-react/blob/main/.githubres/configicon.png?raw=true)  
Es können beliebig viele icons hinzugefügt werden. Die Anzahl ist abhängig von Objekten `{}` innerhalb des `fields: []` Arrays.

## Beispielbild
![alt text](https://github.com/Ariukuto/landingpage-cms-react/blob/main/.githubres/sample.png?raw=true)
![alt text](https://github.com/Ariukuto/landingpage-cms-react/blob/main/.githubres/iconrow.png?raw=true)
![alt text](https://github.com/Ariukuto/landingpage-cms-react/blob/main/.githubres/details.png?raw=true)

