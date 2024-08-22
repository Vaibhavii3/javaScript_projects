const counters = document.querySelectorAll(".counter");

const animationSpeed = 500;


const updateCounters = (counter) => {
    const targetCount = +counter.getAttribute("data-target");

    let currentCount = +counter.innerText;

    const animationStep = targetCount / animationSpeed;

    if(currentCount < targetCount){
        counter.innerText = currentCount + animationStep;

        setTimeout(()=>{
            updateCounters(counter);
        },1);
    }else{
        counter.innerText = targetCount;
    }
}

counters.forEach((counter)=>{
    updateCounters(counter);
});
