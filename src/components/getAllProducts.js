export default async function getAllProducts() {
    let data = await fetch('https://dummyjson.com/products')
    let products = data.json()
    return products;

}
