var $avatarUrlInput = document.querySelector('.avatarUrl');
var $profileImage = document.querySelector('.placeholder');

function updateProfileImage(event) {
  $profileImage.setAttribute('src', event.target.value);
}
$avatarUrlInput.addEventListener('input', updateProfileImage);
