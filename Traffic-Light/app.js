document.addEventListener('DOMContentLoaded', () => {
    const redLight = document.getElementById('red-light');
    const yellowLight = document.getElementById('yellow-light');
    const greenLight = document.getElementById('green-light');

    let currentLight ='red';

    function changeLight() {
        switch (currentLight) {
            case 'red':
                redLight.classList.remove('on');
                yellowLight.classList.add('on');
                currentLight = 'yellow';
                setTimeout(changeLight, 2000); 
                break;
            case 'yellow':
                yellowLight.classList.remove('on');
                greenLight.classList.add('on');
                currentLight = 'green';
                setTimeout(changeLight, 5000); 
                break;
            case 'green':
                greenLight.classList.remove('on');
                redLight.classList.add('on');
                currentLight = 'red';
                setTimeout(changeLight, 7000); 
                break;
        }
    }

    redLight.classList.add('on'); 
    setTimeout(changeLight, 2000); 
});
