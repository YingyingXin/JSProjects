
// ******General learn*******
let myName = "yingying"
console.log(myName)

const sex = "female"
console.log(sex)

let things = [1, "画画", "fighting"]

things.forEach(element => {
    console.log("test");
    console.log(element)
})

let car = {
    brand : "Nissan",
    year : 2003,
    horsePower : 10000
}
console.log(car.brand)



// *************备忘录***************

let title = document.getElementById('title')
let btn = document.getElementById('btn')
function updateTitle() {
    let newContent = 
    ` 
        <h3> ${myName} </h3>       
    `
    title.innerHTML += myName
}
btn.addEventListener('click', updateTitle)
// console.log(title)

let content = document.getElementById('noteContent')
let date = document.getElementById('noteDate')
let time = document.getElementById('noteTime')

let addBtn = document.getElementById('add')
let deleteBtn = document.getElementById('delete')

let notes = []

function renderNotes(){
    let notesBlock = document.getElementById('notes')
    let newNote = ''
    notes.forEach(element => {
        newNote +=
        `
            <p>记事：${element.content}</p>
            <p>日期：${element.date}</p>
            <p>时间：${element.time}</p>
        `
    });
    notesBlock.innerHTML = newNote
    
}

addBtn.addEventListener('click', ()=>{
    let note = {
        content : content.value,
        date : date.value,
        time : time.value
    }
    notes.push(note)
    renderNotes()
    console.log("New note is added")
})

deleteBtn.addEventListener('click', ()=>{
    notes.pop()
    renderNotes()
    console.log("Last note is deleted")
})




// 时间 ************讲时间显示在页面************

let curTime = document.getElementById("time")

// let task = () => {
//     curTime.innerHTML = new Date().toLocaleString();
//     setTimeout(task, 1000);
// }
// task();

setInterval(() => {
    curTime.innerHTML = new Date().toLocaleString();
}, 1000);



// *************** Promise *******************

let myPromise = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)
    setTimeout(() => {
        myReject("???");
        myResolve("!!!");
    },2000);
});


myPromise.then((msg) => {
    console.log('Mypromise resolved! Msg: ' + msg);
    return "from resolve handler";
}, (msg)=> {
    console.log('Mypromise rejected! Msg: ' + msg);
    return "from reject handler";
}).then((msg) => {
    console.log("second resolved handler: Msg: " + msg);
}, () => {
    console.log("second reject handler: Msg: " + msg);
});

setTimeout(element => console.log("test"), 1000);

setTimeout((element) => {
    console.log("test")
}, 1000);



let myAsync = async () => {
    try {
        console.log("yy");
        let msg = await myPromise;
        return "from async"
        console.log('[Async] Mypromise resolved! Msg: ' + msg);
    } catch (error) {
        console.log('[Async] Mypromise rejected! Msg: ' + error);
    }
    
};

myAsync();





