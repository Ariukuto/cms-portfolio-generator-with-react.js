# landingpage cms generator with React.js


Dieses Tool ermöglicht es, eine responsive Landingpage schnell und einfach, automatisch zu generieren. Das Pflegen der Inhalte funktioniert aktuell noch über eine config.json. In Zukunft wird es noch eine Admin Oberfläche geben. Das Frontend wird hauptsächlich mit React.js Komponenten entwickelt. Dies ermöglich eine schnellere Anpassung und bessere Wartbarkeit. In Zukunft wird es so möglich sein bestehende Komponenten zu erweitern um es an eigene Bedürfnisse anzupassen. Durch die Entwicklung mit SASS/SCSS war es möglich, eine leicht wartbare Styling Architektur zu entwickeln. So lassen sich mit wenig Aufwand eigene Templates erstellen.

## Technologiestack
+ React.js (mit JSX)
+ SASS/SCSS (Precompiler für CSS)
+ Bootstrap (UI- und Grid Framework)

## Get Started
1. git installieren
2. npm installieren 
3. git clone [URL]
4. `npm install` im Terminal des Projektverzeichnises ausführen
5. `npm start` oder `npm run build`
6. pflegen der Inhalte unter `src/config/config.json`


## Aktuelle Features
+ Fullwith der Module (true, false)
+ Schatten aktivieren (true, false)
+ Bilder als Icon nutzen (img:true)
+ Größe der Bilder einstellen

## Module  
Aktuell stehen folgende pflegbare Module zur Verfügung:
+ Page
+ Navigation
+ Banner
+ Vorstellung
+ Iconrow
+ Details


## icons  
Momentan werden folgende Icon Anbieter unterstützt:
+ Bootstrap Icons
+ Font Awesome Icons Free
+ Bilder ("img" auf "true" setzen)
+ Weitere werden folgen...




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

