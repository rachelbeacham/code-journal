var $avatarUrl = document.querySelector('#avatarUrl');
var $profileImage = document.querySelector('.placeholder');
var $username = document.querySelector('#username');
var $fullName = document.querySelector('#fullName');
var $location = document.querySelector('#location');
var $bio = document.querySelector('#bio');
var $form = document.querySelector('.edit-profile-form');

function updateProfileImage(event) {
  $profileImage.setAttribute('src', event.target.value);
}

function formSubmitted(event) {
  event.preventDefault();
  data.profile.username = $username.value;
  data.profile.fullName = $fullName.value;
  data.profile.location = $location.value;
  data.profile.bio = $bio.value;
  data.profile.avatarUrl = $avatarUrl.value;
  $form.reset();
}

$avatarUrl.addEventListener('input', updateProfileImage);

$form.addEventListener('submit', formSubmitted);

window.addEventListener('beforeunload', function () {
  var dataProfileJson = JSON.stringify(data.profile);
  localStorage.setItem('profile', dataProfileJson);
});
