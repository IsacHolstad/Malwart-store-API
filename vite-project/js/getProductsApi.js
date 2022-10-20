const productContainer = document.querySelector('#apiContainerData');
console.log(productContainer)

const ApiUrl = "https://fakestoreapi.com/products"


async function getProducts() {
    try{
        const response = await fetch(ApiUrl);
        console.log(response);
        const responseJSON = await response.json()
        console.log(responseJSON);
        const products = responseJSON.data;
        console.log(products)
        for (let i = 0; i < products.length; i++){
            console.log(products[i])
        }
    }
    catch (error){
        productContainer.innerHTML = `<h1 class="text-center "> error</h1>`


    }
}
getProducts()