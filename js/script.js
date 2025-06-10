gsap.registerPlugin(ScrollTrigger);

// Animatie om de afbeelding te vergroten met scrollen
gsap.to(".keyhole", {
    clipPath: "",
    scrollTrigger: {
        trigger: "",
        start: "",
        end: "",
        scrub: true
    }
});

// Zoom in effect op afbeelding
gsap.to(".keyhole img", {
    scale: 1.5,
      scrollTrigger: {
    trigger: "",
    start: "",
    end: "",
    scrub: true
    }
});

// Animatie op het vierkant als hij in beeld komt
gsap.to(".magic-box", {
  scrollTrigger: {
    trigger: "",        //Animatie start als hij in beeld komt
    start: "",          //Start als hij 80% van het scherm berkeikt
    end: "",            //Eindigt bij 20% van het scherm
    scrub: ,
  },
  scale: ,              //Vierkant wordt 2x zo groot
  rotate: ,             //Draait vierkant 2x rond
  opacity: 0.4,
  filter: "",           //Vervaagt het vierkant
  ease: 
});