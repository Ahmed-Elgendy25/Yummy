// let searchLetter = $('#searchByLetter').val();
let meals = [];

$('#searchByName').on('input', function () {
  let searchName = $('#searchByName').val();

  searchByName(searchName);
});
$('#searchByLetter').on('input', function () {
  let inputValue = $('#searchByLetter').val();

  // Remove non-alphabetic characters
  inputValue = inputValue.replace(/[^a-zA-Z]/g, '');

  // Limit to one character
  inputValue = inputValue.slice(0, 1);

  // Update the input value
  $('#searchByLetter').val(inputValue);

  if (inputValue.length === 1) {
    searchByLetter(inputValue);
  }
});

async function searchByLetter(letter) {
  try {
    let res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
    );
    let data = await res.json();
    console.log(data.meals);

    meals = data.meals; // Assign the array directly

    displayMeals(meals);
  } catch (err) {
    console.log(err);
  }
}

async function searchByName(name) {
  try {
    let res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    );
    let data = await res.json();
    console.log(data.meals);

    meals = data.meals; // Assign the array directly

    displayMeals(meals);
  } catch (err) {
    console.log(err);
  }
}

function displayMeals(meals) {
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
  $('#demo').html(cartona);
}

// QUERY PARAMETERS TO DETAILS HTML PAGE TO KNOW AND MANIPULATE THE DATA
function getDetails(id) {
  const dynamicURL = `${window.location.origin}/details.html?id=${id}`;
  window.location.href = dynamicURL;
}
