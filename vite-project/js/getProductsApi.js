const productContainer = document.querySelector('#apiContainerData');
//const imgProduct = document.querySelector('#imgDisplay');
const searchBarInput = document.querySelector("#search-product-input")
const ApiUrl = 'https://fakestoreapi.com/products';

let responseJSON = [];

searchBarInput.addEventListener('keyup', (e) =>{
  //console.log(e)
  const searchString = e.target.value.toLowerCase();
  //console.log(e.target.value)
  const filteredTitles = responseJSON.filter((titleOfProduct) => {
    return (
        titleOfProduct.title.toLowerCase().includes(searchString)
    )

  })
  console.log(filteredTitles)
})


async function getProducts() {
  try {
    const response = await fetch(ApiUrl);
    //console.log(response);
    responseJSON = await response.json();
    //console.log(responseJSON);
    const products = responseJSON.results;
    //console.log(products);
    productContainer.innerHTML = ""
    for (let i = 0; i < responseJSON.length; i++) {
      //console.log(responseJSON);
      //console.log(responseJSON[i].image);
      //console.log(responseJSON[i].price);
      //console.log(responseJSON[i].description);
      productContainer.innerHTML += `
            <div class=" mt-8 justify-center items-center flex container flex-col mx-auto">
              <div class="container mx-auto   p-4 sm:w-1/2">
               <a href="./productPage.html?id=${responseJSON[i].id}">
                <div class="card object-contain flex flex-col justify-center p-10  rounded-lg shadow-xl border-2 border-gray-300 ">
                  <div class="prod-title">
                    <p class="text-xl uppercase text-gray-900 font-bold">${responseJSON[i].title}</p>
                  </div>
                  <div class="prod-img">
                    <img src="${responseJSON[i].image}"
                         class=" object-cover object-center container mx-auto mt-4 w-9/12\t" />
                  </div>
                  <div class="prod-info grid gap-10">
                    <div class="flex flex-col md:flex-row justify-between items-center text-gray-900 text-center">
                      <p class="font-bold text-2xl mt-4 hover:underline text-center">${responseJSON[i].price}$</p>
                    </div>
                  </div>
                </div>
                </a>
              </div>
            </div>
          `;
    }
  } catch (error) {
    productContainer.innerHTML = `<h1 class="text-center text-red-600 text-2xl "> error</h1>`;
  }
}


getProducts();




