// Ստեղծել Promise, որը  then-ի միջոցով կանի հետևյալ քայլերը հերթով
// Ստեղծել զանգված 5 պատահական  թվերով 1-1000 միջակայքից
// Հաջորդ then-ը մաքրում է այդ զանգվածը երկնիշ թվերից(եթե կան) և փոխանցում է առաջ
// Հաջորդ then-ը ստանում է այդ զանգվածի թվերի միջին թվաբանականը
// Հաջորդ ֆունկցիան վերադարձնում է այդ թվը 2-ական համակարգով։ Օր՝ binary(35) => 100011

let p = new Promise((resolve, reject) => {
    let array = [];
    if (Array.isArray(array)) {
        resolve(array);
    } else {
        reject("Dzer poxancac arjeqy zangvac che");
    }
})
p.then((e) => {
        console.log(e);
        for (let i = 0; i < 5; i++) {
            e.push(Math.floor(Math.random() * (1000 - 1) + 1));
        }
        return e;
    })
    .then((e) => {
        console.log(e);
        return e.filter(elem => {
            return elem > 99;
        })
    })
    .then((e) => {
        if (e.length < 1) throw new Error("zangvacum petq e lini gone mek 99ic mec tiv");
        console.log(e);
        let gumar = e.reduce((a, b) => a + b);
        return Math.floor(gumar / (e.length));
    })
    .then((e) => {
        console.log(e);
        binary(e);
    })
    .catch((err) => console.log(err))
    .finally(() => console.log("Finally"))
    // finally-n ashxatum e angam ete error e talis


function binary(e) {
    console.log(e.toString(2));
}


//___________________________________________________________________

const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    });
};

Promise.all([sleep(2000), sleep(5000)]).then(() => {
    console.log("All Promises");
})
// kta "All Promises", erb vor avartven zangvaci meji bolor promisenery

Promise.race([sleep(2000), sleep(5000)]).then(() => {
    console.log("First Promise")
})
// kta "First Promise", erb vor avartvi zangvaci meji amenaarag Promisy