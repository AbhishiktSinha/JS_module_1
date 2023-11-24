function mapAString(str = prompt("enter a string value")) {
    let mapObj = {

    };
    
    for(let i = 0; i < str.length; i++) {
        let ch = str.charAt(i);
        //if we encountered this character for the first time, declare new array
        if(mapObj[ch] === undefined) {
            mapObj[ch] = [i];
        }
        else{
            // otherwise update existing array
            mapObj[ch].push(i);
        }
    }
    return mapObj;
}