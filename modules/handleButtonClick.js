const screen = document.querySelector('#screen');

export default function handleClick (button) {
    button.addEventListener('click', () => {
        screen.value += button.dataset.value;
    });
}

