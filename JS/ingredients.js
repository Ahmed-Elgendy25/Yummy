async function getIngredients() {
  try {
    let res = await fetch(
      'https://www.themealdb.com/api/json/v1/1/list.php?i=list'
    );
    let data = await res.json();

    displayIngredients(data.meals);
  } catch (err) {
    console.log(err);
  }
}

getIngredients();

function displayIngredients(ingredients) {
  let cartona = '';

  for (let i = 0; i < ingredients.length; i++) {
    const { strIngredient: ingredientName, strDescription: ingredientDESC } =
      ingredients[i];

    // Check if ingredientDESC is not null before using slice
    const descriptionSnippet = ingredientDESC
      ? ingredientDESC.slice(0, 135)
      : '';

    cartona += `
      <div class="col-md-3">
        <div class="text-center text-light">
          <a class="fw-semibold text-white d-block " onclick="navigateToFilterByIngrident('${ingredientName}')">
            <i class="fa-solid fa-drumstick-bite fa-4x d-block"></i>
            <span class="fa-2x text-inside-anchor">   ${ingredientName}</span>
            <p class="text-center  text-inside-anchor ">${descriptionSnippet}</p>
          </a>
        </div>
      </div>
    `;
  }
  $('#demo').append(cartona);
}

function navigateToFilterByIngrident(ingridentName) {
  window.location.href = `http://localhost:5500/filterByIngredients.html?i=${ingridentName}`;
}
