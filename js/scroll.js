/**
 * Created by etu03 on 18-02-14.
 */

// Changer les valeurs par défault
window.sr = ScrollReveal({ reset: false });

// Personnaliser l'apparition des groupes
sr.reveal('#a-propos', { duration: 2000 });
sr.reveal('.services_area', { duration: 2000 });
sr.reveal('.service_item', { duration: 2000 }, 100);
sr.reveal('#portfolio', { duration: 2000 });
/*sr.reveal('#p4', { duration: 200 });
sr.reveal('#p5', { duration: 200 });
sr.reveal('#p6', { duration: 200 });
sr.reveal('.graphique', { duration: 500 });
sr.reveal('#p7', { duration: 200 });
sr.reveal('#p8', { duration: 200 });*/

  // ========================================================================= //
  //  Typed Js
  // ========================================================================= //

  var typed = $(".typed");

  $(function() {
    typed.typed({
      strings: ["Anne-Sophie Desjardins", "designer graphique.", "intégratrice web.", "passionnée.", "avide de défis."],
      typeSpeed: 100,
      loop: true,
    });
  });
