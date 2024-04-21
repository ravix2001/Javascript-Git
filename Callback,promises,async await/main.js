//synchronous       => execution occurs in order
/*
console.log("code 1 is implemented");
console.log("code 2 is implemented");
console.log("code 3 is implemented");
console.log("code 4 is implemented");
*/

//asynchronous      => particular(function taking long time to execute) is executed in parallel to the other functions after that function
/*
console.log("code 1 is implemented");
console.log("code 2 is implemented");
function hello(){
    console.log("Hello! I was taking more time so I got late.");
}
setTimeout(hello,2000);
setTimeout(() => {
    console.log("I was also taking more time. Bye!");
}, 4000);
console.log("code 3 is implemented");
console.log("code 4 is implemented");
*/

//Callbacks
/*
function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,calc){      
    calc(a,b);
}
calculator(1,2,sum);    //callback function => function passed as an argument to a another function

function newCalculator(a,b,calci){
    calci(a,b);
}
newCalculator(4,5,(a,b) => {
    console.log(a+b);
});
*/
//Callback hell     =>nested callback
/*
function getData(dataId,nextData){
    setTimeout(() => {
        console.log("data",dataId);
        if(nextData){
            nextData();
        }
    },2000);
}
getData(1, () => {
    console.log("getting data 2 ...");
    getData(2, () => {
        console.log("getting data 3 ...");
        getData(3,() => {
            console.log("getting data 4 ...");
            getData(4);
        })
    });

});
*/
//Promises
/*
let promise = new Promise((resolve,reject) => {
    console.log("I am a promise");
    resolve("Success");
    //reject("Error Occured");
});
*/
/*
const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a promise");
        //resolve("success");
        reject("Network error");

    });
};
let promise = getPromise();

promise.then((res) => {
    console.log("Promise fulfilled",res);
});

promise.catch((err) => {
    console.log("Promise rejected",err);
});
*/