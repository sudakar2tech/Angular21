"use strict";
function strname(name, department) {
    if (department = 'IT')
        return 'My name is ' + name + ' department is ' + department;
    else
        return 'other department student';
}
let resultds = strname('Sudakar', 'IT');
console.log(resultds);
function notreturn(name, department) {
    console.log(name, department);
}
notreturn('sudakar', 'csc');
