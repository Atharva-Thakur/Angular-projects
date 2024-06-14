function stringCase(str: string, upper: boolean){
    if(upper){
        return str.toUpperCase();
    }else{
        return str.toLowerCase();  
    }
}

export {stringCase};