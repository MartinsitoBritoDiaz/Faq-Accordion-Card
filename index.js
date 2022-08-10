// const section = document.getElementById('card--section-1')
// const arrow = document.getElementById('answer-arrow-1')
// const answer = document.getElementById('answer-1')



const elements = document.querySelectorAll('#card--description #card--section');
let count = 1;
console.log(elements)

elements.forEach((element, i) => {

    
    
});

for (let i = 0; i <= elements.length; i++) {
    try{
        elements[i].addEventListener('click', () => {
            const arrow = document.getElementById(`answer-arrow-${i+1}`)
            const answer = document.getElementById(`answer-${i+1}`)
    
            arrow.classList.toggle('flip')
            answer.classList.toggle('active')
        })
    }catch(elements){
        console.error('Error')
    }
}