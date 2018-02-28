const users = [{
  id: 1,
  name: "Prck",
  schoolId: 101
}, {
  id: 2,
  name: "Jest",
  schoolId: 999
}]

const grades = [{
  id: 1,
  schoolId: 101,
  grade: 86
}, {
  id: 2,
  schoolId: 999,
  grade: 87
}, {
  id: 3,
  schoolId: 101,
  grade: 80
}, ]

const getUser = (id) => {
  return new Promise((resolve, reject) => {
    // const user = users.find((user) => {
    //   return user.id === id
    // })
    const user = users.find((user) => user.id === id)
    if (user) {
      resolve(user)
    } else {
      reject(`Enable to find user with id of ${id}`)
    }
  })
}

const getGrades = (schoolId) => {
  return new Promise((resolve, reject) => {
    resolve(grades.filter((grade) => {
      return grade.schoolId === schoolId
    }))
    // resolve(grades.filter((grade)=> grade.schoolId === schoolId))
  })
}

const getStatus = (userId) => {
  let user;
  return getUser(userId)
    .then((tempUser) => {
      user = tempUser
      return getGrades(user.schoolId)
    }).then((grades) => {
      let average = 0
      if (grades.length > 0) {
        average = grades.map((grade) => grade.grade).reduce((a, b) => a + b) / grades.length
      }
      return `${user.name} has a ${average}% in the class.`
    })
}

let userId = 3

getStatus(userId) // userId
  .then((status) => {
    console.log('getStatus : ', status);
  })
  .catch((e) => {
    console.log('getStatus : ', e);
  })

// Without reject ==> Empty array
getGrades(99) // schoolId
  .then((grades) => {
    console.log('getGrades : ', grades);
  })
  .catch((e) => {
    console.log('getGrades : ', e);
  })

getUser(userId) // userId
  .then((user) => {
    console.log('getUser : ', user);
  })
  .catch((e) => {
    console.log('getUser : ', e);
  })