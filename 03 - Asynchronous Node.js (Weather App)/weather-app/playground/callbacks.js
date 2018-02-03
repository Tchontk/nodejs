var getUser = (id, callback) => {
    var user = {
        id,
        name: 'My Name'
    }
    setTimeout(() => {
        callback(user)
    }, 3000)
}



getUser(31, (userObject) => {
    console.log(userObject);
})