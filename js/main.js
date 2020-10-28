var $avatarUrl = document.querySelector('#avatarUrl');
var $profileImage = document.querySelector('.placeholder');
var $username = document.querySelector('#username');
var $fullName = document.querySelector('#fullName');
var $location = document.querySelector('#location');
var $bio = document.querySelector('#bio');
var $form = document.querySelector('.edit-profile-form');
var $container = document.querySelectorAll('.container');
var $main = document.querySelector('main');

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

function renderProfile (data) {
  var containerDiv = document.createElement('div');
  containerDiv.setAttribute('data-view', 'profile');
  containerDiv.className = 'container';

  var nameSection = document.createElement('section');
  nameSection.className = 'row';

  var name = document.createElement('h1');
  name.className = 'column-full';
  name.textContent = data.profile.fullName;

  var profileSection = document.createElement('section');
  profileSection.className = 'row';

  var imageDiv = document.createElement('div');
  imageDiv.className = 'column-half';


  var profileImage = document.createElement('img');
  profileImage.setAttribute('src', data.profile.avatarUrl);
  profileImage.setAttribute('alt', 'user profile photo');

  var profileInfoDiv = document.createElement('div');
  profileInfoDiv.className = 'column-half profile-info';

  var usernameDiv = document.createElement('div');

  var userIcon = document.createElement('i');
  userIcon.className = 'fas fa-user';

  var profileUsername = document.createElement('span');
  profileUsername.className = 'username';
  profileUsername.textContent = data.profile.username;

  var locationDiv = document.createElement('div');

  var locationIcon = document.createElement('i');
  locationIcon.className = 'fas fa-map-marker-alt';

  var profileLocation = document.createElement('span');
  profileLocation.className = 'location';
  profileLocation.textContent = data.profile.location;

  var profileBio = document.createElement('p');
  profileBio.className = 'bio';
  profileBio.textContent = data.profile.bio;

  containerDiv.appendChild(nameSection);
  containerDiv.appendChild(profileSection);
  nameSection.appendChild(name);
  profileSection.appendChild(imageDiv);
  profileSection.appendChild(profileInfoDiv);
  imageDiv.appendChild(profileImage);
  profileInfoDiv.appendChild(usernameDiv);
  profileInfoDiv.appendChild(locationDiv);
  profileInfoDiv.appendChild(profileBio);
  usernameDiv.appendChild(userIcon);
  usernameDiv.appendChild(profileUsername);
  locationDiv.appendChild(locationIcon);
  locationDiv.appendChild(profileLocation);

  return containerDiv;
}

function viewSwapping (currentValue) {
  if (currentValue === 'profile') {
    $container[0].className = 'container hidden';
    $container[1].remove();
    $main.appendChild(renderProfile(data));
;
  } else if (currentValue === 'edit-profile') {
    $container[1].className = 'container hidden';
    $container[0].className = 'container';
  }
  data.view = currentValue;
}
