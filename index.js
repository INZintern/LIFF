// Import stylesheets
import './style.css';
import liff from '@line/liff';

initializeLiff('1656330644-eN2Glg4r');
function initializeLiff(myLiffId) {
  liff
    .init({
      liffId: myLiffId
    })
    .then(() => {
      // start to use LIFF's api
      displayLiffData();
      if (liff.isLoggedIn()) {
        liff
          .getProfile()
          .then(profile => {
            const userProfile = profile.userId;
            const displayName = profile.displayName;
            const statusMessage = profile.statusMessage;
            const pictureUrl = profile.pictureUrl;
            const email = liff.getDecodedIDToken().email;
            document.getElementById('userProfile').textContent =
              'userProfile : ' + userProfile;
            document.getElementById('displayName').textContent =
              'displayName : ' + displayName;
            document.getElementById('statusMessage').textContent =
              'statusMessage : ' + statusMessage;
            document.getElementById('pictureUrl').src = profile.pictureUrl;
            document.getElementById('email').textContent = 'email : ' + email;
          })
          .catch(err => console.error(err));
      } else {
        document.getElementById('liffInitErrorMessage').textContent =
          'ERR : ' + 'External Login is Currently In Progress';
      }
      //initializeApp();
    })
    .catch(err => {
      document.getElementById('liffAppContent').classList.add('hidden');
      document
        .getElementById('liffInitErrorMessage')
        .classList.remove('hidden');
      document.getElementById('liffInitErrorMessage').textContent =
        'ERR : ' + err;
    });
}

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter 007</h1>`;

function displayLiffData() {
  document.getElementById('browserLanguage').textContent =
    'browserLanguage : ' + liff.getLanguage();
  document.getElementById('sdkVersion').textContent =
    'sdkVersion : ' + liff.getVersion();
  document.getElementById('isInClient').textContent =
    'isInClient : ' + liff.isInClient();
  document.getElementById('isLoggedIn').textContent =
    'isLoggedIn : ' + liff.isLoggedIn();
  document.getElementById('deviceOS').textContent =
    'DeviceOS : ' + liff.getOS();
  document.getElementById('lineVersion').textContent =
    'lineVersion : ' + liff.getLineVersion();
}
