//_____________________________Bind___________________________

function hello() {
    console.log("Hello", this);
}

const person = {
    name: 'Narek',
    age: 17,
    sayHello: hello,
    sayHelloWindow: hello.bind(this),
    logInfo(job, phone) {
        console.group(`${this.name} Info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}

const harry = {
    name: 'Harry',
    age: 20
}

// person.logInfo.bind(harry,'actor', '666-999-888')()
// bind - stanum e shat parametrer, verjum prtadir petq e kanchel function-y

// const harryLogInfo = person.logInfo.bind(harry,'actor', '666-999-888')
// harryLogInfo('actor', '8-666-999-888')

//_____________________________Call___________________________

// person.logInfo.call(harry,'Actor', '666-999-888')
// call - stanum e shat parametrer, avtomat kanchum e function-y verjum anhrajesht che kanchel

//_____________________________Apply___________________________

// person.logInfo.apply(harry,['Actor', '666-999-888'])
// apply - stnum e erku parametr` function, array. avtomat kanchum e functiony

//_____________________________Prototype___________________________

// const array = [1,2,3,4,5];

// Array.prototype.multiply = function(n) {
//     return this.map(elem => elem * n)
// }

// console.log(array.multiply(5));