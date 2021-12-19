

let zipcode = "12345-2346";


let pattren = /^[0-9]{5}(?:-[0-9]{4})?$/;


console.log(pattren.test(zipcode));