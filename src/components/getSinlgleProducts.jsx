export default async function getSinlgleProducts(id) {
    let data = await fetch(`https://dummyjson.com/products/${id}`)
    let products = data.json()
    return products;

}
