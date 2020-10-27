var $avatarUrl = document.querySelector('#avatarUrl');
var $profileImage = document.querySelector('.placeholder');
var $save = document.querySelector('button');
var $username = document.querySelector('#username')
var $fullName = document.querySelector('#fullName')
var $location = document.querySelector('#location')
var $bio = document.querySelector('#bio')
var $form = document.querySelectorAll('form');


function updateProfileImage(event) {
  $profileImage.setAttribute('src', event.target.value);
}

function formSubmitted(event) {
   data.profile.username = $username;
   data.profile.fullName = $fullName;
   data.profile.location = $location;
   data.profile.bio = $bio;
   data.profile.avatarUrl = $avatarUrl;
}

$avatarUrl.addEventListener('input', updateProfileImage);
$save.addEventListener('submit', formSubmitted);
