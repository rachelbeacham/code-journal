var $avatarUrlInput = document.querySelector('.avatarUrl');
var $profileImage = document.querySelector('.placeholder');
var $save = document.querySelector('button');

function updateProfileImage(event) {
  $profileImage.setAttribute('src', event.target.value);
}

function formSubmitted(event) {

}
$avatarUrlInput.addEventListener('input', updateProfileImage);

$save.addEventListener('submit', formSubmitted);
