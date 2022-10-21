const queryString = document.location.search;
console.log(queryString);
const params = new URLSearchParams(queryString);
console.log(params);
const id = params.get('id')
console.log("id of the post clicked", id);

const apiUrl = `https://fakestoreapi.com/products/${id}`;
console.log(apiUrl)
const productById = document.querySelector('#spesific-product-container')

async function getSpesificProductById() {
    try{
        const response = await fetch(apiUrl);
        console.log(response);
        const singelProduct = await response.json();
        console.log(singelProduct)
        productById.innerHTML = `
        <div class="w-full mt-8 flex justify-center items-center ">
              <div class="container mx-auto max-w-sm w-full p-4 sm:w-full ">
                <div class="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-xl border-2 border-gray-300 ">
                  <div class="prod-title">
                    <p class="text-2xl uppercase text-gray-900 font-bold">${singelProduct.title}</p>
                  </div>
                  <div class="prod-img">
                    <img src="${singelProduct.image}"
                         class="w-full object-cover object-center container mx-auto mt-4" />
                  </div>
                  <div class="prod-info grid gap-10">
                    <div class="flex flex-col md:flex-row justify-between items-center text-gray-900">
                      <p class="font-bold text-2xl mt-4">${singelProduct.price}$</p>
                      <button
                              class="px-6 py-2 mt-4 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Add
                        to cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        `

    }
    catch (error) {
        productById.innerHTML = `<h1 class="text-center">Could not get Product</h1>`
    }
}
getSpesificProductById()