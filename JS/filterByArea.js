const params = new URLSearchParams(window.location.search);
const area = params.get('a');

let mealsByCategory = [];
async function filterByArea(area) {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
    );
    const data = await res.json();
    console.log(data.meals);
    for (let i = 0; i < data.meals.length; i++) {
      mealsByCategory.push(data.meals[i]);
    }
    displayByCategory(mealsByCategory);
  } catch (error) {
    console.log(error);
  }
}

filterByArea(area);

function displayByCategory(meals) {
  let cartona = '';

  for (let i = 0; i < meals.length; i++) {
    const { idMeal, strMeal: nameMeal, strMealThumb: mealIMG } = meals[i];

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
