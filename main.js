
document.getElementById('postForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const postMessage = document.getElementById('newPost').value;
  const alert = document.getElementById('postAlert');
  const postContainer = document.getElementById('newPostContainer');
  const postedMessage = document.getElementById('postedMessage');

  alert.classList.remove('d-none');
  postedMessage.textContent = postMessage;
  postContainer.classList.remove('d-none');
  document.getElementById('newPost').value = '';

  setTimeout(() => {
    alert.classList.add('d-none');
  }, 3000);
});


function expandPost(post) {
  post.classList.toggle('post-expanded');
}
