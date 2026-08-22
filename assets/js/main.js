/* -------------------------------------------------------------
   main.js — three small things, no dependencies.
   The site works fine without any of it.
   ------------------------------------------------------------- */

(function () {
  'use strict';

  var root = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* --- 1. theme toggle ------------------------------------- */
  var toggle = document.querySelector('[data-theme-toggle]');

  function setToggleLabel() {
    if (!toggle) return;
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    toggle.setAttribute('aria-label', 'Switch to ' + next + ' theme');
  }

  if (toggle) {
    setToggleLabel();
    toggle.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      setToggleLabel();
      try { localStorage.setItem('theme', next); } catch (e) { /* private mode — fine */ }
    });
  }

  /* --- 2. typed intro --------------------------------------
     The text is already in the HTML, so it's readable with JS
     off and there's no layout shift. This just re-types it.   */
  var typed = document.querySelector('[data-typewriter]');

  if (typed && !reduceMotion) {
    var text = typed.textContent;
    var i = 0;
    typed.textContent = '';

    (function tick() {
      typed.textContent = text.slice(0, i);
      if (i++ <= text.length) setTimeout(tick, 70);
    })();
  }

  /* --- 3. copyright year ----------------------------------- */
  var year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
})();
