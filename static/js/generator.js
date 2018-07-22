/**
 * joooooo
 * aaaa e a a i a u
 */

var hell = false;

setInterval(() => {
    if (hell) {
        $('.killer_machine').html($('.killer_machine').html() + 'o')
    }
}, 1000)

setTimeout(() => {
    hell = true;
}, 5000)