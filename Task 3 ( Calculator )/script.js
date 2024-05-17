const scrollRevealOption = {
    distance: "70px",
    origin: "top",
    duration: 1500,
    reset:true,
  };

  ScrollReveal().reveal(".container .calculator", {
    ...scrollRevealOption,
    origin:"bottom",
    delay: 700,
  });
  ScrollReveal().reveal(".container h2", {
    ...scrollRevealOption,
    origin:"top",
  });