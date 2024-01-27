async function getCategories() {
  try {
    const res = await fetch(
      'https://www.themealdb.com/api/json/v1/1/categories.php'
    );
    const data = await res.json();
    console.log(data.categories);
    displayMeals(data.categories);
  } catch (error) {
    console.log(error);
  }
}
getCategories();
function displayMeals(categories) {
  let cartona = '';

  for (let i = 0; i < categories.length; i++) {
    const {
      strCategory: categoryName,
      strCategoryThumb: categoryIMG,
      strCategoryDescription: categoryDESC,
    } = categories[i];

    cartona += `
      <div class="col-md-3">
        <div class="position-relative overflow-hidden menu-images-container" onClick="detailedCategory('${categoryName}')">
          <img src="${categoryIMG}" class="w-100  rounded-3" alt="">
          <div class="overlay-layer d-flex flex-column align-items-center rounded-3">
            <h2 class=" my-2 text-center fw-semibold">${categoryName}</h2>
            <p class="text-center w-75">${categoryDESC.slice(0, 135)}</p>
          </div>
        </div>
      </div>
    `;
  }
  $('#demo').append(cartona);
}

function detailedCategory(categoryName) {
  window.location.href = `http://localhost:5500/filterByCategory.html?c=${categoryName}`;
}
