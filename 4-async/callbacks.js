var getUser = (id, callback) => {
    var user = {
        id,
        name: "bruce"
    };

    setTimeout(() => {
        callback(user);
    }, 3000);
};

getUser("124", userObj => {
    console.log(userObj);
});

"https://maps.googleapis.com/maps/api/geocode/json"