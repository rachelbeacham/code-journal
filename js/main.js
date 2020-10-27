var $avatarUrl = document.querySelector('#avatarUrl');
var $profileImage = document.querySelector('.placeholder');
var $save = document.querySelector('button');
var $username = document.querySelector('#username');
var $fullName = document.querySelector('#fullName');
var $location = document.querySelector('#location');
var $bio = document.querySelector('#bio');

function updateProfileImage(event) {
  $profileImage.setAttribute('src', event.target.value);
}

function formSubmitted(event) {
  data.profile.username = $username.value;
  data.profile.fullName = $fullName.value;
  data.profile.location = $location.value;
  data.profile.bio = $bio.value;
  data.profile.avatarUrl = $avatarUrl.value;
  window.addEventListener('beforeunload', function () {
    var dataProfileJson = JSON.stringify(data.profile);
    localStorage.setItem('profile', dataProfileJson);
  });
}

$avatarUrl.addEventListener('input', updateProfileImage);

$save.addEventListener('click', formSubmitted);
