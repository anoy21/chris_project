const scrollHeader = () =>{ 
    const header = document.getElementById("navbar")
    this.scrollY >= 250 ? header.classList.add('scroll-header')
                        : header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)


// locomotive

const scroller = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    multiplier: 0.75,
  });





//gsap

  