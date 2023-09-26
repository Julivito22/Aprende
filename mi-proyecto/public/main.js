document.addEventListener('DOMContentLoaded', function () {
    

    const form = document.getElementById('myForm');
    const step1 = document.querySelector('.step1');
    const step2 = document.querySelector('.step2');

   
    const nextStepButton = step1.querySelector('.next-step');
    nextStepButton.addEventListener('click', function (event) {
        
        event.preventDefault();

        
        step1.style.opacity = '0';
        step2.style.opacity = '1';

        
        step1.style.display = 'none';
        step2.style.display = 'none';

        
        step2.style.display = 'block';

        
    });
});

