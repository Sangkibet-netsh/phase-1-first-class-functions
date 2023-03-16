// function receivesAFunction(callBack){
//     const spy = chai.spy();
// }

function receivesAFunction(callBack){
    return callBack()
    

}
receivesAFunction("Great work"),function (callBack){ "Hello there " +callBack}

function returnsANamedFunction(){
    return function myCall(){
        return "Today is a great day"
    }
}
function returnsAnAnonymousFunction(){
    return function(){
        return "this is anonymous"
    }
}