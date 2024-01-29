const hash = window.location.hash.substr(1); // Get the id from the hash
const id = hash || params.get('id');

async function detailsOfMeal(id) {
  try {
    let res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    let data = await res.json();

    data.meals.forEach((recipe) => {
      const area = recipe.strArea;
      const category = recipe.strCategory;
      const meal = recipe.strMeal;
      const instructions = recipe.strInstructions;
      const img = recipe.strMealThumb;
      const tag = recipe.strTags;
      const source = recipe.strSource;
      const youtube = recipe.strYoutube;

      const ingredients = Object.keys(recipe)
        .filter((k) => k.includes('strIngredient'))
        .map((k) => recipe[k]);

      const measures = Object.keys(recipe)
        .filter((k) => k.includes('strMeasure'))
        .map((k) => recipe[k]);

      displayMeals(
        area,
        category,
        meal,
        instructions,
        img,
        tag,
        ingredients,
        measures,
        source,
        youtube
      );
    });
  } catch (err) {
    console.error('Error fetching meal details:', err);
  }
}

detailsOfMeal(id);

function displayMeals(
  area,
  category,
  meal,
  instructions,
  img,
  tags,
  ingredients,
  measures,
  source,
  youtube
) {
  let recipe = [];

  for (let i = 0; i < ingredients.length; i++) {
    if (ingredients[i] != '' && measures[i] != '') {
      recipe.push(`${measures[i]} ${ingredients[i]}`);
    }
  }
  const tagArray = tags !== null ? tags.split(',').map((tag) => tag) : [];
  // console.log(tagArray);
  let cartona = `
  <div class="col-md-4">
    <img src="${img}" class="w-100 rounded-3" alt="">
    <p class="text-light fw-semibold fs-1">${meal}</p>
  </div>
  <div class="col-md-8 text-white">
    <h2>Instructions</h2>
    <p>${instructions}</p>
    <h3><span class="fw-bolder">Area :</span> ${area}</h3>
    <h3><span class="fw-bolder">Category :</span> ${category}</h3>
    <h3>Recipes :</h3>
    <ul class="list-unstyled d-flex flex-wrap">
      ${recipe
        .map((recipe) => `<li class="alert alert-info m-2 p-1">${recipe}</li>`)
        .join('')}
    </ul>

    <h3>Tags :</h3>
    <ul class="list-unstyled d-flex flex-wrap">
    ${tagArray
      .map((tag) => `<li class="alert alert-danger m-2 p-1">${tag}</li>`)
      .join('')}
  </ul>
    <btn class="btn btn-md btn-success my-3 "><a href="${source}" class="text-white" target="_blank">Source</a></btn>
    <btn class="btn btn-md btn-danger my-3"><a href ="${youtube}" class="text-white"  target="_blank">Youtube</a></btn>
  </div>
`;

  $('#demo').append(cartona);
}
