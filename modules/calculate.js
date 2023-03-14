const screen = document.querySelector('#screen');

export default function calculate () {
    const result = eval(screen.value);
    screen.value = result;
}

