// Declaring HTML elements to be observed
const workSectionScripted = document.querySelector(".workSectionScripted");
const workSectionMograph = document.querySelector(".workSectionMograph");
const workSectionPromo = document.querySelector(".workSectionPromo")
// Settings for the observers
const options = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px"
};
// Scripted Section Observer
const scriptedObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry =>{
            if(entry.isIntersecting) {
                document.getElementById("scriptedNav").classList.add("workNavLinkInFocus");
            }
            else {
                document.getElementById("scriptedNav").classList.remove("workNavLinkInFocus");
            }
        });
    }, options);

scriptedObserver.observe(workSectionScripted);

// Mograph Section Observer
const mographObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry =>{
        if(entry.isIntersecting) {
            document.getElementById("mographNav").classList.add("workNavLinkInFocus");
        }
        else {
            document.getElementById("mographNav").classList.remove("workNavLinkInFocus");
        }
    });
}, options);

mographObserver.observe(workSectionMograph);

// Promo Section Observer
const promoObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry =>{
        if(entry.isIntersecting) {
            document.getElementById("promoNav").classList.add("workNavLinkInFocus");
        }
        else {
            document.getElementById("promoNav").classList.remove("workNavLinkInFocus");
        }
    });
}, options);

promoObserver.observe(workSectionPromo);