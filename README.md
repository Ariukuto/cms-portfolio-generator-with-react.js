# landingpage-cms-react

## Beschreibung
Dieses Tool ermöglicht es, eine responsive Landingpage schnell und einfach, automatisch zu generieren. Das Pflegen der Inhalte funktioniert aktuell noch über eine config.json. In Zukunft wird es noch eine Admin Oberfläche geben. Das Frontend wird hauptsächlich mit React.js Komponenten entwickelt. Dies ermöglich eine schnellere Anpassung und bessere Wartbarkeit. In Zukunft wird es so möglich sein bestehende Komponenten zu erweitern um es an eigene Bedürfnisse anzupassen. Durch die Entwicklung mit SASS/SCSS war es möglich, eine leicht wartbare Styling Architektur zu entwickeln. So lassen sich mit wenig Aufwand eigene Templates erstellen.

**Technologiestack**  
+ React.js (mit JSX)
+ SASS/SCSS (Precompiler für CSS)
+ Bootstrap (UI- und Grid Framework)

**Module**  
Aktuell stehen folgende pflegbare Module zur Verfügung:
+ Navigation (Logo, links)
+ Banner (img)
+ Headline (Text)
+ Vorstellung (Bild, Text)
+ Iconrow (Headline, Icons, headlines, text)
+ Details (Bild, abwechselnd links und rechts)  

**icons**  
Momentan werden folgende Icon Anbieter unterstützt:
+ Bootstrap Icons
+ Font Awesome Icons Free
Weitere werden folgen...


## Get Started
1. git installieren
2. npm installieren 
3. git clone [URL]
4. `npm install` im Terminal des Projektverzeichnises ausführen
5. `npm start` oder `npm build`
6. pflegen der Inhalte unter `src/config/config.json`

## Beispiel Iconpflege
Am Beispiel Font Awesome:  
![alt text](https://github.com/Ariukuto/landingpage-cms-react/blob/main/.githubres/fa.png?raw=true)  
Gesamten CSS Klassennamen des `<i>` Tags: `fas fa-subway` kopieren und in config.json einfügen
![alt text](https://github.com/Ariukuto/landingpage-cms-react/blob/main/.githubres/configicon.png?raw=true)  

## Beispielbild
![alt text](https://github.com/Ariukuto/landingpage-cms-react/blob/main/.githubres/sample.png?raw=true)
![alt text](https://github.com/Ariukuto/landingpage-cms-react/blob/main/.githubres/iconrow.png?raw=true)
![alt text](https://github.com/Ariukuto/landingpage-cms-react/blob/main/.githubres/details.png?raw=true)

## config.json Beispiel
![alt text](https://github.com/Ariukuto/landingpage-cms-react/blob/main/.githubres/config.json.png?raw=true)

