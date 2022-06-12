

//Paypal 电面题目，给终端获取对应数据并提供几个方法接口获取对应repo name. 
let endPoint = "https://run.mocky.io/v3/4ba1e485-79fb-4110-97bf-832ccb46d61b"

// reference 教程： https://www.youtube.com/watch?v=PoRJizFvM7s


function PrintMostStarredToday(){   
    let repoName = '';
    let curMostStarred = 0;

    repos.forEach(element => {
        if(element.star_count_today > curMostStarred){
            curMostStarred = element.star_count_today;
            repoName = element.full_name;
        }
    });
    console.log(repoName);
}

function PrintMostRecentCreated(){
    let repoName = '';
    let mostRecent = new Date();
    let index = 1;

    repos.forEach(element => {
        if(index = 1){
            mostRecent = new Date(element.created_at).getTime;
            repoName = element.full_name;
            index++;
        }
        let currentTime = new Date(element.created_at).getTime;
        if(currentTime > mostRecent){
            mostRecent = currentTime;
            repoName = element.full_name;
        }
    });
    console.log(repoName);
}

// ********* pratice 1: using call back function **********
// let repos = []
// async function fetchData(url, callback){
//     const response = await fetch(url);
//     let obj = await response.json();  
//     repos = obj.trending;
//     console.log(repos);
//     callback();
// }


// fetchData(endPoint, PrintMostStarredToday)
// fetchData(endPoint, PrintMostRecentCreated)






// ********* pratice 2: using promise **********
let repos = []
async function fetchData(endPoint){
    const response = await fetch(endPoint);
    const obj = await response.json();
    repos = obj.trending;
    return new Promise((resolve, reject)=>{
        let status = true;
        if(status){
            resolve();
        }else{
            reject('Something went wrong');
        }
    })    
}
fetchData(endPoint)
.then(PrintMostStarredToday)
.then(PrintMostRecentCreated)
.catch(err=>console.log(err));
