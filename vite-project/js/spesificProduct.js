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
                      <p class="font-bold text-2xl mt-4">${singelProduct.price}$</p>

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
        productById.innerHTML = `<section class="bg-primary relative z-10 py-[120px]">
  <div class="container mx-auto">
    <div class="-mx-4 flex">
      <div class="w-full px-4">
        <div class="mx-auto max-w-[400px] text-center">
          <h2
            class="mb-2 text-[50px] font-bold leading-none text-white sm:text-[80px] md:text-[100px]"
          >
            404
          </h2>
          <h4 class="mb-3 text-[22px] font-semibold leading-tight text-white">
            Oops! That page can’t be found
          </h4>
          <p class="mb-8 text-lg text-white">
            The page you are looking for it maybe deleted
          </p>
          <a
            href="javascript:void(0)"
            class="hover:text-primary inline-block rounded-lg border border-white px-8 py-3 text-center text-base font-semibold text-white transition hover:bg-white"
          >
            Go To Home
          </a>
        </div>
      </div>
    </div>
  </div>
  <div
    class="absolute top-0 left-0 -z-10 flex h-full w-full items-center justify-between space-x-5 md:space-x-8 lg:space-x-14"
  >
    <div
      class="h-full w-1/3 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"
    ></div>
    <div class="flex h-full w-1/3">
      <div
        class="h-full w-1/2 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"
      ></div>
      <div
        class="h-full w-1/2 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"
      ></div>
    </div>
    <div
      class="h-full w-1/3 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"
    ></div>
  </div>
</section>
<!-- ====== Error 404 Section End -->`
    }
}
getSpesificProductById()