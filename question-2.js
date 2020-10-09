const resolvedPromise = (message) => {
    setTimeout(() => {
        var promise = new Promise(function(resolve, reject) {
            if(message >= 500) {
                resolve("Message : delayed promise");
            }
            else{
                reject(Error("Not working try again !"));
            }
        });
        console.log(promise);
    }, message)
}
const rejectedPromise  = (message) => {
    try {
        setTimeout(() => {
            if(message <= 500){
                var promise = new Promise(function(resolve, reject) {
                    resolve("Message : delayed exception!");     
                });
            }
            console.log(promise);
        }, message)
        throw new Error("Error: rejected time");
    } catch(e){
        console.error(e);
    }
}
resolvedPromise(500);
rejectedPromise(400);