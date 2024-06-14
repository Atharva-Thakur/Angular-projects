function add(a:number,b:number):number {
    return a+b;
}
function sub(a:number,b:number):number {
    return a-b;
}
function mul(a:number,b:number):number {
    return a*b;
}
function div(a:number,b:number):number {
    if(b==0){
        throw new Error("Division by zero is not allowed")
    }
    return a/b;
}

function Calculator(a:number,o:string,b:number):number{
    switch(o){
        case "+": return add(a,b);
        case "-": return sub(a,b);
        case "*": return mul(a,b);
        case "/": return div(a,b);
        default: throw new Error("Invalid operation");
    }

}

export{Calculator}