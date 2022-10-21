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
        <div class=" mt-8 flex flex-col justify-center items-center container ">
              <div class="container mx-auto  p-4 sm:w-full ">
                <div class="card flex flex-col justify-center p-10 bg-white rounded-xl shadow-xl border-2 border-gray-200 w-1/2 mx-auto  ">
                  <div class="prod-title">
                    <p class="text-2xl uppercase text-gray-900 font-bold">${singelProduct.title}</p>
                  </div>
                  <div class="prod-img">
                    <img src="${singelProduct.image}"
                         class="w-full object-cover object-center container mx-auto mt-4" />
                  </div>
                  <div class="prod-info grid gap-10">
                    <div class="flex flex-col md:flex-row justify-between items-center text-gray-900">
                      <p class="font-bold text-2xl mt-6">${singelProduct.price}$</p>
                      <button
                              class="px-6 py-2 mt-6 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Add
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