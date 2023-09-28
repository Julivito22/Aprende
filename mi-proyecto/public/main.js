document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');
    const step1 = document.querySelector('.step1');
    const step2 = document.querySelector('.step2');
    const nextStepButton = step1.querySelector('.next-step');

    // Ocultar Step 2 al principio
    step2.style.opacity = '0';
    step2.style.display = 'none';

    nextStepButton.addEventListener('click', function (event) {
        event.preventDefault();

        // Ocultar Step 1 con fade out
        step1.style.opacity = '0';
        setTimeout(function () {
            step1.style.display = 'none';

            // Mostrar Step 2 con fade in
            step2.style.display = 'block';
            setTimeout(function () {
                step2.style.opacity = '1';
            }, 100); // Puedes ajustar el tiempo de transición aquí
        }, 500); // Puedes ajustar el tiempo de transición aquí
    });
});



