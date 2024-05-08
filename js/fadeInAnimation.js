const observer = new IntersectionObserver(animateOnScroll);



function animateOnScroll(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            // Trigger your animation logic here
        } else {
            entry.target.classList.remove('show');
        }
    });
}

let elements = document.querySelectorAll('.hidden');


console.log(elements[0])
addDelay(elements)

function addDelay(list){

    for (let i = 0; i < list.length; i++) {
        
        delay =  i * 200;

        list[i].style.transitionDelay = `${delay}ms`;
        
    }
    
}

elements.forEach((element) => observer.observe(element));
