function strname(name:string, department:string):string {

    if(department = 'IT')
        return 'My name is '+name +' department is '+ department;
    else
        return 'other department student'
}

let resultds = strname('Sudakar', 'IT');
console.log(resultds);

function notreturn(name:string, department:string):void{
    console.log(name, department);
}
notreturn('sudakar', 'csc');

