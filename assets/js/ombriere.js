const ratio = .1
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if(entry.intersectionRatio > ratio) {
            if(entry.target.className === 'reveal-21'){
                entry.target.classList.add('reveal-visible2')
            }else{
                entry.target.classList.add('reveal-visible')
                observer.unobserve(entry.target)
            }
        }
    })
}

const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll('[class*="reveal-"]').forEach(function(r) {
    observer.observe(r);
})

const txt = document.querySelector('.pres_dx_p');
const spantxt = document.querySelector('.span_change');

txt.addEventListener('mouseenter', () => {
    spantxt.classList.add("hover_span");
})
txt.addEventListener('mouseleave', () => {
    spantxt.classList.remove("hover_span");
})
