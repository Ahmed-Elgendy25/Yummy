let meals = [];

async function getMeals() {
  try {
    let res = await fetch(
      'https://www.themealdb.com/api/json/v1/1/search.php?s='
    );
    let data = await res.json();
    console.log(data.meals);
    for (let i = 0; i < Math.min(25, data.meals.length); i++) {
      meals.push(data.meals[i]);
    }

    displayMeals();
  } catch (err) {
    console.log(err);
  }
}

getMeals();

function displayMeals() {
  let cartona = '';

  for (let i = 0; i < meals.length; i++) {
    const {
      idMeal,
      strMeal: nameMeal,
      strMealThumb: mealIMG,
      strInstructions: mealInstruction,
      strSource: mealSource,
      strYoutube: youtubeLINK,
    } = meals[i];

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

// QUERY PARAMETERS TO DETAILS HTML PAGE TO KNOW AND MANIPULATE THE DATA
function getDetails(id) {
  window.location.href = `http://localhost:5500/details.html?id=${id}`;
}
