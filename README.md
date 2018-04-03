# <i lang="en">Live regions</i> à la demande

Un petit module pour générer à la demande des annonces dans les lecteurs d’écran, sans changement visuel dans l’interface. Initialiser et utiliser une <i lang="en">live region</i> est aussi simple que :

```js
const liveRegion = new OnDemandLiveRegion()

liveRegion.say('Bonjour tout le monde')
```

## Installation

Récupérez simplement la [version minifiée](on-demand-live-region.min.js) ou installez-la à partir de <abbr>N.P.M.</abbr> :

```
npm i on-demand-live-region
```

## Paramètres objet

* `level` – le niveau de priorité de votre <i lang="en">live region</i> (par défaut : `polite`) ;
* `parent` – l’élément auquel sera ajouté votre <i lang="en">live region</i> (par défaut : `body`) ;
* `idPrefix` – le préfixe pour l’identifiant `id` généré attaché à la <i lang="en">live region</i> (par défaut : `live-region-`) ;
* `delay` – le délai en millisecondes avant que la phrase soit prononcée (par défaut : `0`).

## Exemple avec priorité assertive et délai d’une demi-seconde

```js
const liveRegionDelayed = new OnDemandLiveRegion({
  level: 'assertive',
  delay: 500
})

liveRegionDelayed.say('Salut tout le monde ! (Désolé, je réagis un peu tard.)')
```

Vous pouvez surcharger le paramètre de délai avec un second argument quand vous appelez `say` :

```js
liveRegionDelayed.say('Salut tout le monde ! (Désolé, je réagis un peu tard.)', 1000)
```

## Dites-le encore et encore

Chaque fois que vous utiliserez la méthode `say`, la <i lang="en">live region</i> existante (si elle existe bien) sera détruite et une nouvelle sera créée. Cela signifie que vous pouvez faire la même annonce plusieurs fois de manière fiable. Ce qui n’est pas garanti dans d’autres implémentations, où la même <i lang="en">live region</i> est repeuplée.

## Testé dans

* Safari avec <i lang="en">VoiceOver</i> ;
* Chrome avec <i lang="en">VoiceOver</i> ;
* IE11 avec <i lang="en">JAWS</i> ;
* Chrome avec <i lang="en">JAWS</i> ;
* Firefox avec <abbr>N.V.D.A.</abbr> ;
* Chrome avec <i lang="en">ChromeVox</i>.
