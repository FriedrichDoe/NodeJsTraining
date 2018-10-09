const users = [{
        id: 1,
        name: "Josh",
        schoolId: 44
    },
    {
        id: 2,
        name: "Andi",
        schoolId: 67
    }
]

const grades = [{
    id: 1,
    schoolId: 67,
    grade: 86
}, {
    id: 2,
    schoolId: 44,
    grade: 100
}, {
    id: 3,
    schoolId: 67,
    grade: 60
}]

const getUser = id => {
    return new Promise((resolve, reject) => {
        const user = users.find(user => user.id === id)

        if (user) {
            resolve(user)
        } else {
            reject("unable to find user with id of " + id)
        }
    })
}

const getGrades = (schoolId) => {
    return new Promise((resolve, reject) => {
        resolve(grades.filter(grade => grade.schoolId === schoolId))
    })
}

const getStatus = (userId) => {
    var user;
    return getUser(userId).then(tempUser => {
        user = tempUser;
        return getGrades(user.schoolId)
    }).then(grades => {
        // average
        let average = 0;

        if (grades.length > 0) {
            average = grades.map(grade => grade.grade).reduce((a, b) => a + b) / grades.length
        }

        return user.name + "has a " + average + "% in the class"
    })
}

const getStatusAlt = async userId => {
    const user = await getUser(userId)
    const grades = await getGrades(user.schoolId)

    let average = 0;

    if (grades.length > 0) {
        average = grades.map(grade => grade.grade).reduce((a, b) => a + b) / grades.length
    }

    return user.name + " has a " + average + "% in the class"
}

// getStatus(1)
//     .then(res => console.log(res))
//     .catch(e => {
//         console.log(e)
//     })

getStatusAlt(2)
    .then(res => console.log(res))
    .catch(e => console.log(e))