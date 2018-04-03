/* Définitions globales */

(function (global) {
  'use strict'

  // Constructeur
  function OnDemandLiveRegion (options) {
    options = options || {}

    // Les paramètres par défaut du module
    this.settings = {
      level: 'polite',
      parent: 'body',
      idPrefix: 'live-region-',
      delay: 0
    }

    // Remplacer les valeurs par défaut lorsqu’elles sont fournies dans les options
    for (var setting in options) {
      if (options.hasOwnProperty(setting)) {
        this.settings[setting] = options[setting]
      }
    }

    // Convertir le parent comme un nœud DOM
    this.settings.parent = document.querySelector(this.settings.parent)
  }

  // 'Say' méthode
  OnDemandLiveRegion.prototype.say = function (thingToSay, delay) {
    // Se débarrasser de l’ancienne _live region_ si elle existe
    var oldRegion = this.settings.parent.querySelector('[id^="' + this.settings.idPrefix + '"]') || false
    if (oldRegion) {
      this.settings.parent.removeChild(oldRegion)
    }

    // Est-ce qu’un délai a été réglé ?
    delay = delay || this.settings.delay

    // Créer une nouvelle _live region_
    this.currentRegion = document.createElement('span')
    this.currentRegion.id = this.settings.idPrefix + Math.floor(Math.random() * 10000)

    // Déterminer le niveau de priorité
    var role = this.settings.level !== 'assertive' ? 'status' : 'alert'

    // Attribuer `role` et `aria-live`
    this.currentRegion.setAttribute('aria-live', this.settings.level)
    this.currentRegion.setAttribute('role', role)

    // Cacher l’élément avec la _live region_, mais pas aux technologies d’assistance
    this.currentRegion.setAttribute('style', 'clip: rect(1px, 1px, 1px, 1px); height: 1px; overflow: hidden; position: absolute; white-space: nowrap; width: 1px')

    // Ajouter la _live region_ à son parent
    this.settings.parent.appendChild(this.currentRegion)

    // Peupler la _live region_ pour l’activer
    window.setTimeout(function () {
      this.currentRegion.textContent = thingToSay
    }.bind(this), delay)

    return this
  }

  // Exporter OnDemandLiveRegion
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = OnDemandLiveRegion
  } else if (typeof define === 'function' && define.amd) {
    define('OnDemandLiveRegion', [], function () {
      return OnDemandLiveRegion
    })
  } else if (typeof global === 'object') {
    // Attacher l’évènement à la fenêtre du navigateur
    global.OnDemandLiveRegion = OnDemandLiveRegion
  }
}(this))
