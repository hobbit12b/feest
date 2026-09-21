# Meester Dennis 50 jaar! 🎈

Een interactief ballonnenfeest voor het digibord met 21 activiteiten.

## Openen

Download **Ballonnenfeest-Dennis-50.html** via de downloadknop bij het bestand en open het in Edge of Chrome. De afbeeldingen zitten in het bestand. Je kunt dit ene bestand ook op een USB-stick zetten. Kies de knop ⛶ voor volledig scherm.

`index.html` bevat dezelfde complete presentatie. Voor de filmpjes en Yurls-discopagina is internet nodig; de overige presentatie werkt lokaal.

## Spelen

- Tik een ballon aan. Eerst dwarrelt confetti, daarna verschijnt de opdracht langzaam.
- Grote ballonnen vliegen vooraan en sneller; kleine ballonnen zweven achteraan.
- De knop 🎈 → brengt je terug. De ballonnen blijven doorvliegen.
- Onder **Voor de meester** staat de uitleg van de opdracht.
- Via ⚙ kun je opdrachten opnieuw openen, de materialen bekijken of een nieuw feest starten.
- De browser bewaart de geprikte ballonnen op het apparaat, indien lokale opslag beschikbaar is.

De kleurenstopdans en de opgegeven Yurls-discopagina zijn inbegrepen.

## Aanpassen

De basisopdrachten staan in `src/template.html`. `flying.js` regelt de vliegende ballonnen en confetti. `flying.css` en `centered-title.css` regelen de vormgeving. De twee PNG-bestanden zijn met imagegen gemaakte afbeeldingen.

Na wijzigingen, voer met Node.js vanuit de repository uit:

```sh
node build-flying.cjs
```

Dit bouwt de twee zelfstandige HTML-bestanden opnieuw. Er zijn geen extra pakketten nodig om te bouwen of de presentatie te gebruiken.

De controles in `tests/flying.cjs` en `tests/continuous.cjs` gebruiken Playwright en Microsoft Edge. `tests/layout.cjs` is de oudere controle van de oorspronkelijke presentatie.
