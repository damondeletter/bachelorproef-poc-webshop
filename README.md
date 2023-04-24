# Algemene informatie

Deze repository is onderdeel van de bachelorproef omtrent microfrontends:

* "Integreren van meerdere front-end frameworks en libraries op een Single Page Application: een exploratieve studie en proof of concept"


  * **Student:** Damon De Letter
  * **Studentennummer:** 202075027
  * **In samenspraak met:** promotor Thomas Aelbrecht en co-promotor Clint Cambier 
  * **Studierichting:** Toegepaste Informatica - Enterprise and mobile development
# Project
Als proof of concept (PoC) is er webshop gemaakt, gebruikmakend van verschillende microfrontends, die elk een framework of library representeren.

De verschillende frameworks / libraries die gekozen werden, op basis van functionele en niet-functionele requirements, zijn:
* React
* Angular
* Vue
* Svelte
* SolidJS

De microfrontends zijn onafhankelijk opgebouwd, waardoor deze ook op zichzelf gebruikt kunnen worden. 

Een aantal zaken die geïntegreerd zijn in dit project:

- [X] Global state management
- [X] Microfrontends kunnen onafhankelijk van elkaar opgesteld worden, alsook gebruikt worden
- [X] Error handling
- [X] Zowel globale als microfrontend-specifieke styling.
- [X] De volledige flow van een webshop


## De flow
De webshop start op een productenpagina, waarbij verschillende producten omtrent technologie zichtbaar zijn. Verder staat op deze pagina ook nog een klein stukje tekst en een footer.

Bovenaan is een navigatiebalk voorzien, met een knop naar de "about"-sectie en naar het winkelmandje.

Zodra er een product toegevoegd wordt aan het winkelmandje, zal de tekst in de navigatiebalk ook veranderen. Door hierop te klikken, ga je naar /cart, waar het volledige winkelmandje zichtbaar is. Hier kan dan ook een keuze gemaakt worden om producten te verwijderen of toe te voegen via de aanbevolen producten.

Door op "nomadr-webshop" te klikken, keer je terug naar de productenpagina, zonder dat je winkelmandje leeg gemaakt wordt.

Door een kortingscode (damon25) in te vullen, gaat er 25% van de totale prijs. Na op de checkout-knop te duwen, kom je op een pagina met een formulier. Hier dien je al je gegevens in te vullen (deze worden niet opgeslagen!!) om verder te gaan met het plaatsen van een bestelling.

Aan de rechterkant kan een overzicht teruggevonden worden met de producten in het winkelmandje.

Na alles correct in te vullen, kan je de bestelling plaatsen en krijg je een uniek bestellingsnummer (het winkelmandje is nu leeg).

## DISCLAIMER: 
De webshop is slechts een proof of concept! De producten zijn fictief, alsook wordt er hier geen rekening gehouden met beveiligingsmaatregelen of authenticatie. Het is puur opgezet om aan te tonen dat meerdere frameworks op een SPA mogelijk zijn.

# Demo
Hier is een korte demovideo waar de functionaliteiten worden getoond.

<figure class="video_container">
  <iframe src="https://www.youtube.com/watch?v=OKf9wie8fVE&feature=youtu.be" frameborder="0" allowfullscreen="true"> </iframe>
</figure>


# Doel PoC
Het doel van deze PoC is om aan te tonen dat verschillende frameworks en libraries op dezelfde webapplicatie gebruikt kunnen worden. Door het concept van een SPA te nemen en deze op te splitsen in kleinere onderdelen (microfrontends) is het mogelijk om verschillende taken te verdelen aan meerdere teams.

De PoC simuleert als het ware een werkomgeving waarbij verschillende teams (bv: andere geografische locatie) kunnen samenwerken aan dezelfde webapplicatie, zonder elkaar voor de voeten te lopen. Ook kunnen deze teams samenwerken, zonder veel te weten over wat de andere code doet.

Teams die dus geen kennis hebben van een bepaald framework (bv: React), maar wel gekend zijn met een framework zoals Vue.js, kunnen dus prima hiermee werken.

In deze repository is ervoor gekozen om zowel de shell als de pilets (zie volgende sectie) in 1 repository te steken. In de praktijk en bij grotere projecten, is het aangeraden om via een monorepository te werken (scheiden van shell en pilets).

# Piral in het kort
Piral kan zowel als een JavaScript router als een framework gezien worden, die het mogelijk maakt om Single Page Applications te maken met microfrontends.

Het bevat een groeiende en actieve community, met een uitgebreide documentatie over de mogelijkheden. Deze community is via een chatapplicatie genaamd "Gitter" beschikbaar, waar je ook alle vragen kan stellen aan de eigenaar / maker van Piral.

Dit zorgt er dan ook weer voor dat problemen snel opgelost kunnen worden en specifieke use cases correct uitgevoerd kunnen worden.

Piral werkt met het principe van een hoofdapplicatie en kleinere microfronteds, waarbij de microfrontends allemaal samenkomen in deze applicatie. 
- De "shell", ook wel bekend als de applicatie die alles omvat, wordt een piral-instantie genoemd. Dit zal alle microfrontends samen nemen en weergeven als 1 grote webapplicatie.
- De "pilets", ook wel bekend als de microfrontends, worden pilet-instanties genoemd. Deze zijn onafhankelijk, maar zijn wel gebaseerd op de shell. Je bouwt dus best eerst je shell uit, voordat je pilets gaat creëren hierop.

Alle pilets worden gepublished via een feed. Deze kan zowel lokaal zijn, als een online feed die gehost wordt door Piral zelf. Het principe werkt op een zeer simpele manier:
- De pilets worden dus op basis van de shell opgesteld (via shared dependencies kunnen deze allemaal dependencies erven). Deze worden dan (volledig) uitgewerkt en via een commando naar de feed geschreven. De piral-instantie (hoofdapplicatie) zal dan via slechts 1 request deze feed opvragen en invullen via een zelfgekozen layout.

De shell werkt via het piral commando, gevolgd door de nodige argumenten / uitvoering.

De pilets werken via het pilet commando, met de nodige argumenten / uitvoering.

Bv: het volgende commando zal de shell opstarten in debug-modus
```
piral debug
```

Bv: het volgende commando zal de pilet opstarten in debug-modus
```
pilet debug
```
# Overzicht gebruikte frameworks en libraries
* Overzichtpagina products --> react

* Productcards --> react 

* Add to cart button in productcard --> vue 

* Aboutsectie op overzichtpagina --> svelte 

* Footer --> solidjs 

* Cartpagina --> vue 

* Recommended products op cartpagina --> react 

* Orderpagina --> svelte 

* Confirmpagina --> solid

* About-pagina --> angular
# Installatie
Er is reeds een script voorzien die de shell en alle pilets zal installeren en builden. De code voor dit script kan bekeken worden in het bestand: "install.sh".

Bij vragen over het effect van het script, kan u mij altijd contacteren. (damondeletter.dev@gmail.com)

Volgende stappen dienen uitgevoerd te worden voordat de webapplicatie opgestart kan worden.

1. Clone het project op een plek naar keuze: 
  ```git clone https://github.com/damondeletter/bachelorproef-poc-webshop.git```

2. Navigeer naar het project:
```cd bachelorproef-poc-webshop```

3. Afhankelijk van de OS van uw toestel kunnen meerdere commando's werken:
  - WINDOWS: 
    - ```install.sh```
    - ```./install.sh```
  - MACOS:
    - ```install.sh```
    - ```sudo sh install.sh```

  Dit zal eerst de shell installeren en builden, gevolgd door alle pilets. Dit proces kan enkele minuten duren.

  Zodra de CLI klaar is met alle installaties en builds, kunnen zowel de shell als pilets opgestart worden.

4. Om de shell te starten (volledige applicatie): 
```cd webshop-shell``` 
en om hem op te starten:
```piral debug``` 

5. Om de pilets op te starten (zelfde werkwijze per pilet):
```cd [pilet]```
en om hem op te starten:
```pilet debug```

([pilet] dient vervangen te worden door een pilet-directory, bv: React)
# Aanpassingen
Om dit project lokaal te runnen en veranderingen door te brengen, is het aangeraden om een account te registren op https://feed.piral.cloud/.

Doordat de pilets op een feed staan die niet door anderen aangepast dient te worden, zal er een eigen feed opgesteld moeten worden.

1. Voer allereerst de stappen van "Installatie" uit.


2. In de index.tsx van de shell kan een url teruggevonden worden, die verwijst naar de online feed. Door zelf 1 aan te maken en de url te vervangen, kunnen de pilets aangepast worden voor eigen gebruik.

3. Via "Manage API keys" kan een API-key aangemaakt worden, om pilets mee te publishen. LET OP: deze key is slechts 1 maal zichtbaar.

4. De pilets kunnen nu gepublished worden op deze eigen feed, via het commando: 
```
 pilet publish --fresh --api-key [API_KEY] --url [FEED_URL]
 ```
(alles tussen [] dient vervangen te worden met eigen waarden)


