(function () {
  if (sessionStorage.getItem('suzuki_oil_auth') !== '1') {
    location.replace('login.html?r=' + encodeURIComponent(location.href));
  }
}());
