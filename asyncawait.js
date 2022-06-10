async function main() {
    var user = await fetchCurrentUser();

    var [ archiveOrders, currentOrders] = 
    await Promise.all([
        fetchArchive(user.id),
        fetchCurrentOrders(user.id)
    ]) 
}