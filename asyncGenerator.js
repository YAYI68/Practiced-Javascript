runner ( function *main(){
    var user = yield fetchCurrentUser();

    var [ archiveOrders, currentOrders] = 
    yield Promise.all([
    fetchArchiveOrders(user.id),
    fetchCurrentOrders(user.id)
    ]);
})

//  To Async Await with generator and yield keyword

async function *fetchUrls(urls) {
    for(let url of urls) {
        let resp = await fetch(url);
        if ( resp.status == 20){
            let text = await resp.text();
            yield text.toUpperCase();
        }
        else {
            yield undefined
        }
    }
}

async function main( favoriteSites){
    var it = fetchUrls(favoriteSites);

    while (true){
        let res = await it.next();
        if (res.done) break;
        let text = res.value;   
    }
}

async function main(favoriteSites){
    for await (let text of fetchUrls(favoriteSites)){
        console.log(text)
    }
}