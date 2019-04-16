let json = '{"id":2}'

try {
    let user = JSON.parse(json);
    console.log(user);
    if(!user.name) {
        throw new Error('V etih danuh net IMENi')
    }

    // console.log("Nachinaem robotu");
    // console.log(as);
    // console.log('Result');
} catch(error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);

    console.log(`Mu poluchili ohibku: ${error.name}`)
} finally {
    console.log('Y vipolnus VSIGDA')
}

console.log('Y rabotay dalhe')