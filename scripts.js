let numOrStr = prompt('input number or string');

switch (numOrStr) {
    case null:
        console.log('You canceled');
        break
    case !numOrStr.trim() === ''|| numOrStr:
        console.log('Empty String');
        break
    case !isNaN(numOrStr) || numOrStr:
        console.log('number is Ba_NaN');
        break
    default:
        console.log('Ok');
}

