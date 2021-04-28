// const delay = ms => {
//      return new Promise(resolve => setTimeout(() => resolve("Resolve"), ms))
// };

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Await 3 seconds")
    },3000)
}).then((data) => console.log(data))

const url = 'https://jsonplaceholder.typicode.com/users/?_limit=8'

async function async() {
    console.log("Start...")
    try{
        await p
        const response = await fetch(url);
        const data = await response.json()
        console.log("Data: ", data)
    } catch(err) {
        console.log(err)
    } finally {
        console.log("Finish")
    }
}
async();


//___________________________________________________________

// await - spasum e minchev avartvi Promisy, heto ancnum e myus Promise-in
// async - grvum e functionic araj vori mej petq e ogtagorcenq await ,  Promise e
// try, catch - error-i hamar
