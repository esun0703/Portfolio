document.querySelector('.navbuttoncontainer').addEventListener('click', function (e) {
  var target = e.target;
  
  if (target.tagName === 'A') {
    e.currentTarget.querySelector('.current').classList.remove('current');
    target.classList.add('current');
  }
});