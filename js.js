const options = {
    root: null,
    rootMargin: '0px',
    threshold: .1
  };
  const hand = function(){
    console.log("hi");
  }
const obs = new IntersectionObserver(hand,options)
obs.observe(document.querySelector(".menu_bar"));