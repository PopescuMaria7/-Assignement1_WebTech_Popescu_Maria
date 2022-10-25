const input='The dog is Walking fast';
const dictionary=['walking', 'fast'];


function hash(input,dictionary)
{
    if (typeof input!=="string") {
        throw new Error("Input should be a string ");
    }

    dictionary.forEach(element => {
        if(typeof element!=="string")
        throw new Error("Invalid array format");
        
    });

}

console.log(hash(input, dictionary))
