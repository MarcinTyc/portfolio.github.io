
//
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".slider", { y: "-100%", duration: 1.5, delay:0.5 }) ;
tl.to(".intro", { y: "-100%", duration: 1,delay:1.5 }, "-=1");

tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".main-header", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".main-para", { opacity: 0 }, { opacity: 1, duration: 2 }, "-=1");

const section = document.querySelectorAll('section');
const bubble =document.querySelector('.bubble');

const gradients = ["linear-gradient(to right top, #ffd38d, #b16c15)",
    "linear-gradient(to right top, #ffd38d, #b16c15)",
    "linear-gradient(to right top, #ffd38d, #b16c15)"


];

const options ={
    threshold: 0.7
}

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries){
entries.forEach(entry=>{

const className = entry.target.className;
const activeAnchor = document.querySelector(`[data-page${className}]`);
const gradientIndex = entry.target.getAttribute('data-index');
const coords = activeAnchor.getBoundingClientRect();
const directions= {
    height: coords.height,
    width: coords.width,
    top: coords.top,
    left: coords.left
};
if (entry.isIntersecting){
    bubble.style.setProperty('left', `${directions.left}px`);
    bubble.style.setProperty('top', `${directions.top}px`);
    bubble.style.setProperty('width', `${directions.width}px`);
    bubble.style.setProperty('height', `${directions.height}px`);
}

});

}

section.forEach(section=> {
    observer.observe(section);
})

