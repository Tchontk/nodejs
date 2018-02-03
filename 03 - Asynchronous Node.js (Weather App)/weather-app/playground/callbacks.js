var getUser = (id, callback) => {
    var user = {
        id,
        name: 'My Name'
    }
    setTimeout(() => {
        callback(user)
    }, 3000)
}

//https://maps.googleapis.com/maps/api/geocode/json?address=r1301%20lombard%20street%20philadelphia

getUser(31, (userObject) => {
    console.log(userObject);
})