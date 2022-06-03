new TypeIt("#type", {
    speed: 120,
    loop: true,
    waitUntilVisible: true,
  })
    .type("Gunadarma University", { delay: 400 })
    .pause(500)
    .delete(20)
    .type("Front-End Web Developer", { delay: 400 })
    .pause(500)
    .delete(21)
    .go();
  
  
  AOS.init();
  