const params = new URLSearchParams(window.location.search);
const ingredient = params.get('i');

let ingredientByCategory = [];
async function filterByIngredients(ingredient) {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await res.json();
    console.log(data.meals);
    for (let i = 0; i < data.meals.length; i++) {
      ingredientByCategory.push(data.meals[i]);
    }
    displayByIngredients(ingredientByCategory);
  } catch (error) {
    console.log(error);
  }
}

filterByIngredients(ingredient);

function displayByIngredients(ingredients) {
  let cartona = '';

  for (let i = 0; i < ingredients.length; i++) {
    const { idMeal, strMeal: nameMeal, strMealThumb: mealIMG } = ingredients[i];

    cartona += `
      <div class="col-md-3">
        <div class="position-relative overflow-hidden menu-images-container"  onClick="getDetails(${idMeal})">
          <img src="${mealIMG}" class="w-100  rounded-3" alt="">
          <div class="overlay-layer d-flex align-items-center">
            <h2 class="mx-2">${nameMeal}</h2>
          </div>
        </div>
      </div>
    `;
  }
  $('#demo').append(cartona);
}

function getDetails(id) {
  window.location.href = `http://localhost:5500/details.html?id=${id}`;
}
