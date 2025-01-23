Ontwerp en maak een responsive website voor een startup.

De instructies voor deze opdracht staan in: [INSTRUCTIONS.md](https://github.com/fdnd-task/the-startup-responsive-interactieve-website/blob/main/docs/INSTRUCTIONS.md)

# DRUKWERKDEAL X FDND
Een nieuwe website met oog op de nieuwe branding.

## Beschrijving
[De live website](https://julesbruins.github.io/the-startup-responsive-interactive-website/careers.html)

Op de site kan je de vacatures bekijken die op het moment openstaan bij drukwerkdeal. Ook vind je er informatie over het bedrijf en krijg je doormiddel van de vele afbeeldingen meer sfeer van het bedrijf. Je kan deze afbeeldingen bovenaan bekijken doormiddel van een interactie met pijltjes of wat verder naar beneden op de site. Dit door gewoon horizontaal te scrollen.
Verder zijn de bedrijfsquotes terug te vinden van het bedrijf (de vier oranje quotes'). 

### scroll through drukwerkdeal vacature site


https://github.com/user-attachments/assets/ef119a9d-612c-4c5f-940e-d1dc898ff63a



### RESPONSIVE

Uiteraard heb ik de site responsive gemaakt. Deze is bijna optimaal, op de bovenste interactie met afbeeldingen na. Dit was erg ingewikkeld om nog binnen de tijd te kunnen halen.


https://github.com/user-attachments/assets/4f4c82a8-06ba-48d3-b8c3-5fdbfbd96652




### ACCESIBILITY & W3C

Ik heb ook nog een snelle lighthouse test uitgevoerd en een w3c validator. Resultaten hieronder ↓

<img width="254" alt="Screenshot 2025-01-23 at 10 07 17" src="https://github.com/user-attachments/assets/52471432-24cf-4c63-8451-174f3cb5f0d7" /><img width="254" alt="Screenshot 2025-01-23 at 10 16 03" src="https://github.com/user-attachments/assets/1e01674a-44b6-41af-a317-45c76c8c1b58" />

### OVERIG

Verder zijn er helaas nog ideeën die ik had maar niet heb uit kunnen voeren. Het leek me leuk om een button fixed op de site te zetten. Dat als je op deze klikt, de site vult met een oranje grote druppel en dat jullie hier meer vertellen over de facaliteiten van jullie bedrijf, zoals de sportschool etc., die jullie hebben. Of hierin het nieuws met de blog te plaatsen. Ontwerp is uitgewerkt in [FIGMA](https://www.figma.com/design/gkxd6Awcgr0NP33e3bvt96/Drukwerkdeal-hifi-ontwerpen?node-id=0-1&p=f&t=qAj4o0sz3amFtC7D-0) 

Ook is het voor mobile ontwerp misschien handig nog iets meer feedforward toe te passen op de vacatures dus een pijltje toe te voegen. Verder mochten jullie desktop design te saai vinden, dan kan hier op de achtergrond in heel licht oranje misschien ook weer op enkele plekken de druppel terug komen?
Uiteraard kunnen de afbeeldingen ook omgeruild worden met video's in het ontwerp.



## Kenmerken
### TECHNIEKEN
De HTML heb ik gewoon semantisch geschreven. Verder heb ik hierin [aria-labels](https://github.com/julesbruins/the-startup-responsive-interactive-website/blob/502551b92c64b10bb289fb51ca89aa2601ebb287/careers.html#L22) toegevoegd zodat het meer accessible is.

Voor de algemene styling die vaak dubbel is heb ik een [styleguide](https://github.com/julesbruins/the-startup-responsive-interactive-website/blob/main/styles/styleguide.css) aangemaakt. Hierin staan [custom properties](https://github.com/julesbruins/the-startup-responsive-interactive-website/blob/502551b92c64b10bb289fb51ca89aa2601ebb287/styles/styleguide.css#L32-L64) en algemene styling. Ik heb voor responsiveness [clamp](https://github.com/julesbruins/the-startup-responsive-interactive-website/blob/502551b92c64b10bb289fb51ca89aa2601ebb287/styles/styleguide.css#L158) gebruikt bij de fonts. Zo vergroot en verkleint de tekst geleidelijk aan, aan de hand vna de viewport width.

Met [Javascript](https://github.com/julesbruins/the-startup-responsive-interactive-website/blob/main/careers.js) heb ik mijn interactie gemaakt met de afbeeldingen en pijltjes. De achterste afbeeldingen hebben een blur, lagere opacity, zijn zwart/wit en zijn kleiner. Terwijl de actieve afbeelding, gewoon in kleur is en groter is. De javascript bestaat eigenlijk uit 2 delen. [Eerst](https://github.com/julesbruins/the-startup-responsive-interactive-website/blob/f346e54ae3938c2c0d2b51ed138ec6d4bd7a1145/careers.js#L1-L46) moesten de pijltjes überhaupt de functie uitvoeren. De actieve afbeelding moest telkens vergroten en de achtergrond weer vervagen. [Vervolgens](https://github.com/julesbruins/the-startup-responsive-interactive-website/blob/f346e54ae3938c2c0d2b51ed138ec6d4bd7a1145/careers.js#L49-L70) moesten de pijltjes verdwijnen wanneer je bijvoorbeeld niet meer naar links kon dat het pijltje verdween en andersom.


### ADEMRUIMTE & INSPRINGEN
Ik heb ervoor gezorgd dat er genoeg witruimte is en dat je kan zien wanneer een element [inline of block](https://github.com/julesbruins/the-startup-responsive-interactive-website/blob/2403ac4defe5ddf34d7ca2721eec1cc354e385aa/careers.html#L33-L40) is. 


### VOLGORDE & NESTEN VAN CSS SELECTORS
Ik heb ervoor gezorgd dat mijn CSS redelijk gelijk is aan de volgorde van de HTML. De elementen waar veel CSS voor nodig is staan onderaan. [Nesting](https://github.com/julesbruins/the-startup-responsive-interactive-website/blob/9494c631585de8c1a152746fefc467200d37eab6/styles/careers.css#L94-L128) zorgt voor meer overzicht. 


### NESTEN VAN MEDIA QUERIES
Ik heb mijn [media queries genest](https://github.com/julesbruins/the-startup-responsive-interactive-website/blob/8d2c0eacda97ec256fc3a79ca328a9321cd96222/styles/careers.css#L80-L104) in de bijbehorende styling. Dit zorgt voor meer overzicht, ook kan ik hierdoor verschillende breakpoints gebruiken en is het makkelijker een media query aan te passen.


### NAAMGEVING
Voor naamgeving heb ik rekening gehouden met [beschrijvende namen](https://github.com/julesbruins/the-startup-responsive-interactive-website/blob/3202ce5cae347da4ef7651d4998d8e30d7913c6c/styles/styleguide.css#L38-L39). Ook heb ik er rekening meegehouden dat een custom property niet de naam krijgt van bijvoorbeeld de kleur, maar juist waarvoor de kleur gebruikt wordt. [Bijvoorbeeld](https://github.com/julesbruins/the-startup-responsive-interactive-website/blob/3202ce5cae347da4ef7651d4998d8e30d7913c6c/styles/styleguide.css#L33-L35) 'primary color' ipv 'oranje'. Verder is mijn Javascript zoals gebruikelijk in camelCase en mijn css in kebab-casing


## Bronnen

## Licentie
This project is licensed under the terms of the [MIT license](./LICENSE).


