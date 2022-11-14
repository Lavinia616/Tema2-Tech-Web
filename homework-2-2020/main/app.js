function addTokens(input, tokens){
    if(typeof input !== "string") 
    throw('Invalid input')

    if(input.length<6)
    throw('Input should have at least 6 characters')

    for(var i=0; i<tokens.length; i++){
        if(typeof tokens[i].tokenName!== "string")
        throw('Invalid array format')
    }
    
    var newInput = input
    for(var i=0; i<tokens.length; i++){
        newInput = input.replace('...', '${'+tokens[i].tokenName+'}')
    }
    return newInput
}

const app = {
    addTokens: addTokens
}

module.exports = app;