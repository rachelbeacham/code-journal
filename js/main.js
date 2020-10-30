var $avatarUrl = document.querySelector('#avatarUrl');
var $profileImage = document.querySelector('.image');
var $username = document.querySelector('#username');
var $fullName = document.querySelector('#fullName');
var $location = document.querySelector('#location');
var $bio = document.querySelector('#bio');
var $form = document.querySelector('.edit-profile-form');
var $container = document.querySelectorAll('.container');
var $imageUrl = document.querySelector('#entryImageUrl');
var $entryImage = document.querySelector('.entry');

$avatarUrl.addEventListener('input', updateProfileImage);

$imageUrl.addEventListener('input', updateEntryImage);

$form.addEventListener('submit', formSubmitted);

window.addEventListener('beforeunload', function () {
  var dataProfileJson = JSON.stringify(data.profile);
  localStorage.setItem('profile', dataProfileJson);
});

document.addEventListener('DOMContentLoaded', function () {
  var userData = localStorage.getItem('profile');
  if (userData !== null) {
    data.profile = JSON.parse(userData);
  }
  if (data.profile.username === '') {
    viewSwapping('edit-profile');
  } else {
    viewSwapping('profile');
  }
});

document.addEventListener('click', function (e) {
  if (e.target.getAttribute('href') === null) {
    return;
  }
  if (e.target.getAttribute('href') === '#') {
    if (data.profile.username !== '') {
      if (e.target.getAttribute('data-view') === 'profile') {
        viewSwapping('profile');
      } else if (e.target.getAttribute('data-view') === 'edit-profile') {
        viewSwapping('edit-profile');
      } else if (e.target.getAttribute('data-view') === 'entries') {
        viewSwapping('entries');
      } else if (e.target.getAttribute('data-view') === 'create-entry') {
        viewSwapping('create-entry');
      }
    }
  }
});

function updateProfileImage(event) {
  $profileImage.setAttribute('src', event.target.value);
}
function updateEntryImage(event) {
  $entryImage.setAttribute('src', event.target.value);
}

function formSubmitted(event) {
  event.preventDefault();
  data.profile.username = $username.value;
  data.profile.fullName = $fullName.value;
  data.profile.location = $location.value;
  data.profile.bio = $bio.value;
  data.profile.avatarUrl = $avatarUrl.value;
  $form.reset();
  viewSwapping('profile');
}

function viewSwapping(currentValue) {
  if (currentValue === 'profile') {
    $container[0].className = 'container hidden';
    $container[2].className = 'container hidden';
    $container[3].className = 'container hidden';
    $container[1].className = 'container';
    $container[1].innerHTML = '';
    $container[1].appendChild(renderProfile(data));
  } else if (currentValue === 'edit-profile') {
    $container[1].className = 'container hidden';
    $container[2].className = 'container hidden';
    $container[3].className = 'container hidden';
    $container[0].className = 'container';
    $avatarUrl.value = data.profile.avatarUrl;
    $username.value = data.profile.username;
    $fullName.value = data.profile.fullName;
    $location.value = data.profile.location;
    $bio.value = data.profile.bio;
    if ($avatarUrl.value !== '') {
      $profileImage.setAttribute('src', $avatarUrl.value);
    }
  } else if (currentValue === 'entries') {
    if (data.username !== '') {
      $container[0].className = 'container hidden';
      $container[1].className = 'container hidden';
      $container[3].className = 'container hidden';
      $container[2].className = 'container';
    }
  } else if (currentValue === 'create-entry') {
    if (data.username !== '') {
      $container[0].className = 'container hidden';
      $container[1].className = 'container hidden';
      $container[2].className = 'container hidden';
      $container[3].className = 'container';
    }
  }
  data.view = currentValue;
}

function renderProfile(data) {
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
  profileImage.className = 'image';

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

  var editDiv = document.createElement('div');
  editDiv.className = 'action';

  var editButton = document.createElement('button');
  editButton.textContent = 'Edit Profile';
  editButton.setAttribute('href', '#');
  editButton.setAttribute('data-view', 'edit-profile');

  containerDiv.appendChild(nameSection);
  containerDiv.appendChild(profileSection);
  nameSection.appendChild(name);
  profileSection.appendChild(imageDiv);
  profileSection.appendChild(profileInfoDiv);
  imageDiv.appendChild(profileImage);
  profileInfoDiv.appendChild(usernameDiv);
  profileInfoDiv.appendChild(locationDiv);
  profileInfoDiv.appendChild(profileBio);
  profileInfoDiv.appendChild(editDiv);
  editDiv.appendChild(editButton);
  usernameDiv.appendChild(userIcon);
  usernameDiv.appendChild(profileUsername);
  locationDiv.appendChild(locationIcon);
  locationDiv.appendChild(profileLocation);

  return containerDiv;
}
