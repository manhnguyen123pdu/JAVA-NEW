async function fetchAPI(){
    let data = await axios.get("http://localhost:8080/demoserlet/products");
    displayProduct(data.data);
}
function displayProduct(products){
    let contentDiv = document.querySelector(".content");
    let contentHTML = "";
    for(let i=0; i<products.length; i++){
        contentHTML +=`
        <div class="item">
            <h3>${products[i].name}</h3>
            <p>${products[i].price}</p>
            <button onclick="deleteProduct(${products[i].id})">delete </button>
        </div>`
    }
    contentDiv.innerHTML = contentHTML;
}
async function deleteProduct(id){
    await axios.delete(`http://localhost:8080/demoserlet/products/${id}`);
    fetchAPI();
}
fetchAPI();