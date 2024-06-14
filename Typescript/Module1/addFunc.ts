function add(a:number,b:number):number{
    return a+b;
}

let myAdd = (x:number,y:number):number => {return x+y;};

function buildName(firstName: string, lastName?: string) { //? makes the parameter optional
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

export {add}