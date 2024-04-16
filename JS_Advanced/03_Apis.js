const fecthPromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")



fecthPromise.then((res)=>{
    const responsePromise = res.json()
    responsePromise.then((data)=>{
        console.log(data[0]);
    })

})

console.log("started request");