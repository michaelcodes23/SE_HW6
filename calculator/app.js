



const equals = (value) => {
    
    if(value.includes('+')){
        sum(value);
    }
    else if (value.includes('-')){
        minus(value)
    }
    else if (value.includes('X')){
        multiply(value)
    }
    else if (value.includes('/')){
        divide(value)
    }
}

const sum = (value) => {
    const display = value.split('+');
    console.log(display);
    let total = 0
    for(let i = 0; i < display.length; i++){
        total += Number(display[i]);
    }
    console.log(total);
    $('.disp1').text(total);
    return sum
}
const minus = (value) => {
    const display = value.split('-');
    console.log(display);
    let total = display[0];
    for(let i = 1; i < display.length; i++){
        total -= Number(display[i]);
    }
    console.log(total);
    $('.disp1').text(total);
    return total
}
const multiply = (value) => {
    const display = value.split('X');
    console.log(display);
    let total = display[0];
    for(let i = 1; i < display.length; i++){
        total *= Number(display[i]);
    }
    console.log(total);
    $('.disp1').text(total);
    return total
}

const divide = (value) => {
    const display = value.split('/');
    console.log(display);
    let total = display[0];
    for(let i = 1; i < display.length; i++){
        total /= Number(display[i]);
    }
    console.log(total);
    $('.disp1').text(total);
    return total
}
const button = $('.but');
const restart = () => {
    console.log("button is working!")
        $('.disp1').text("");
}

$(() => {
    $('.but').on('click', restart);
    $("td").click(function() {
        $('.disp1').append($(this).text());
            let disp = $('.disp1').text();
            // console.log(test.slice(0,(test.length -1)))
            let value = disp.slice(0,(disp.length-1));
            // console.log(disp)
            // console.log(typeof disp);

            if ($(this).text() === "="){
                equals(value);
                // console.log(value);
            }
        }
    )}
  );