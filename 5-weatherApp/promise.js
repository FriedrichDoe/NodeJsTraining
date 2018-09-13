var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === "number" && typeof b === "number") {
                resolve(a + b);
            } else {
                reject("arguments must be numbers");
            }
        }, 1500);
    });
};

var somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("it worked!!");
        // reject("unable to fulfill promise");
    }, 2500);
});

somePromise
    .then(message => {
        console.log("success: ", message);
    })
    .catch(error => {
        console.log("error catched: ", error);
    });

asyncAdd(15, 5)
    .then(result => {
        console.log("first asyncAdd result: ", result);
        return asyncAdd(result, 7);
    })
    .catch(error => console.log("asyncAdd error: ", error))
    .then(result => {
        console.log("second asyncAdd result: ", result);
    })
    .catch(error => console.log("asyncAdd error: ", error));

asyncAdd("15", "5").then(
    result => {
        console.log("result: ", result);
    },
    error => {
        console.log("fail:", error);
    }
);
