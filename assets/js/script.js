const setaD = document.querySelectorAll('.arrow-right');
const setaE = document.querySelectorAll('.arrow-left');
const carrosel = document.querySelectorAll('.filmes-list')
const top10 = document.querySelector('#top10')

setaD.forEach ((setaD, i) => {
    let clickCounter = 0;
    const itemNumber = carrosel[i].querySelectorAll('img').length;
    
    setaD.addEventListener('click',()=> {

    clickCounter++;

        if (itemNumber - (4+clickCounter) > 0) {

            carrosel[i].style.transform = `translateX(${carrosel[i].computedStyleMap().get('transform')[0].x.value-390}px)`;
        } else {

            carrosel[i].style.transform = `translateX(0)`
            clickCounter = 0;
        }
   
   
        setaE.forEach ((setaE, i) => {

            let clickReturn = clickCounter;

            setaE.addEventListener('click',()=> {

                if (clickReturn > 0) {

                    carrosel[i].style.transform = `translateX(${carrosel[i].computedStyleMap().get('transform')[0].x.value
                +390}px)`;

                    clickReturn--;
                    clickCounter--;

                } else { 

                    carrosel[i].style.transform = `translateX()`;
        
                }
            }); 
        
        })
   
    });
    
})



