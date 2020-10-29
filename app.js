const btn = document.querySelector('#button');
const msg = document.querySelector('#message')

btn.onclick = function(){
    const promise = new Promise((resolve,reject)=>{
        const req = new XMLHttpRequest;
        req.open('GET','http://api.icndb.com/jokes/random');
        req.onload = () =>{
            if(req.status===200)
            {
                resolve(req.response);
            }
            else
            {
                reject(Error(req.statusText));
            };
        }
        req.onerror =()=>{
            reject(Error('Error'))
        }
        req.send();
    })
    promise.then((data)=>{
        console.log("Got data promise executed");
        const result = JSON.parse(data).value.joke;
        msg.innerHTML = result;

    },
    (error)=>{
        console.log("promise rejected");
        console.log(error.message);
    })
}