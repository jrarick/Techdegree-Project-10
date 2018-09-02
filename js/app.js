const modal = $('#myModal');
const span = $('.close');

$.ajax({
  url: 'https://randomuser.me/api/?results=12&nat=us',
  dataType: 'json',
  success: function(data) {
    console.log(data);

    const employee = data.results;
    let employeeHTML = '';

    // load random users
    for (let i = 0; i < 12; i += 1) {
      let avatar = employee[i].picture.large;
      let firstName = employee[i].name.first;
      let lastName = employee[i].name.last;
      let email = employee[i].email;
      let city = employee[i].location.city;

      employeeHTML += `<a class="main-content__item">
                         <img class="employee-avatar" src="${avatar}" alt="${firstName} Avatar">
                         <div class="employee-text">
                           <h2 class="name">${firstName} ${lastName}</h2>
                           <p class="email">${email}</p>
                           <p class="city">${city}</p>
                         </div>
                       </a>`;
      $('#main-content__wrapper').html(employeeHTML);
    }; // end for loop

    // Dislpay popup on click
    $('.main-content__item').click(function(event) {
      let modalHTML = '';
      let targetIndex = $(this).index();
      let avatar = employee[targetIndex].picture.large;
      let firstName = employee[targetIndex].name.first;
      let lastName = employee[targetIndex].name.last;
      let email = employee[targetIndex].email;
      let city = employee[targetIndex].location.city;
      let phone = employee[targetIndex].phone;
      let address = employee[targetIndex].location.street + ", " +
                    employee[targetIndex].location.state + " " +
                    employee[targetIndex].location.postcode;
      let birthday = "Birthday: " + new Date(employee[targetIndex].dob.date).toLocaleDateString("en-US");

      modalHTML += `<img class="employee-avatar" src="${avatar}" alt="${firstName} Avatar">
                    <h2 class="name">${firstName} ${lastName}</h2>
                    <p class="email">${email}</p>
                    <p class="city">${city}</p>
                    <hr class="line">
                    <p class="phone">${phone}</p>
                    <p class="address">${address}</p>
                    <p class="birthday">${birthday}</p>`
      $('.employee-popup-info').html(modalHTML);
      modal.show();
    }); // end popup

  }
}); // end AJAX

// close popup window
$('.close').click(function() {
  modal.hide();
});
