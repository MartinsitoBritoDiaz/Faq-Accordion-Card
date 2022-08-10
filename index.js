const elements = document.querySelectorAll('#card--description #card--section');

elements.forEach((element, i) => {

    element.addEventListener('click', () => {
        const arrow = document.getElementById(`answer-arrow-${i+1}`)
        const answer = document.getElementById(`answer-${i+1}`)

        arrow.classList.toggle('flip')
        answer.classList.toggle('active')
    })    
});