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

const getStatusAlt = async (userId) => {
  const user = await getUser(userId)
  const grades = await getGrades(user.schoolId)
  let average = 0
  if (grades.length > 0) {
    average = grades.map((grade) => grade.grade).reduce((a, b) => a + b) / grades.length
  }
  return `${user.name} has a ${average}% in the class.`
}

/*
const getPromise = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      reject('Erreur')
    } else {
      resolve('Mike!')
    }
  })
}

// async await
const getAsync = async () => {
  // throw new Error('Erreur'); //reject
  return 'Mike' // Promise { 'Mike' } - return = resolve 
}

getAsync().then((name) => {
  console.log('getPromise then : ', name);
}).catch((e) => {
  console.log(e);
})

console.log('getAsync : ', getAsync(3))
console.log('getPromise : ', getPromise(3))

*/

let userId = 2

getStatusAlt(userId) // userId
  .then((status) => {
    console.log('getStatusAlt : ', status);
  })
  .catch((e) => {
    console.log('getStatusAlt : ', e);
  })

getStatus(userId) // userId
  .then((status) => {
    console.log('getStatus : ', status);
  })
  .catch((e) => {
    console.log('getStatus : ', e);
  })
/*
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
  */