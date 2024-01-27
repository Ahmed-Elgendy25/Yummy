async function getMeals() {
  try {
    let res = await fetch(
      'https://www.themealdb.com/api/json/v1/1/list.php?a=list'
    );
    let data = await res.json();
    console.log(data.meals);
    displayAreaMeals(data.meals);
  } catch (err) {
    console.log(err);
  }
}

getMeals();

function displayAreaMeals(areaMeals) {
  let cartona = '';

  for (let i = 0; i < areaMeals.length; i++) {
    const { strArea: area } = areaMeals[i];
    cartona += `
    <div class="col-md-3">
      <div class="text-center text-light">
        <a class="fw-semibold text-white d-block fa-2x" onclick="navigateToFilterByArea('${area}')">
          <i class="fa-solid fa-house-laptop fa-4x d-block"></i>
          ${area}
        </a>
      </div>
    </div>
  `;
  }
  $('#demo').append(cartona);
}

function navigateToFilterByArea(area) {
  window.location.href = `http://localhost:5500/filterByArea.html?a=${area}`;
}
