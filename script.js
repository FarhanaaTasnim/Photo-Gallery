// let tableBody = document.querySelector('#postsTable tbody');

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((posts) => {
//     posts.forEach((post) => {
//       let row = document.createElement("tr");
//       row.innerHTML = `
//         <td>${post.id}</td>
//         <td>${post.title}</td>S
//         <td>${post.body}</td>
//       `;
//       tableBody.appendChild(row);
//     });
//   })
  
const row = document.getElementById('photo-list');

const fetchPhotos = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const photos = await response.json();

    photos.slice(0, 12).forEach((photo) => {
      row.innerHTML += `
        <div class="col-md-4">
          <div class="card">
            <img src="https://picsum.photos/id/${photo.id}/300/200" class="card-img-top" alt="Photo ${photo.id}">
            <div class="card-body">
              <h5 class="card-title">Photo #${photo.id}</h5>
              <p class="card-text">${photo.title}</p>
            </div>
          </div>
        </div>
      `;
    });

  } catch (error) {
    console.error("Error fetching photos:", error);
    row.innerHTML = `<p class="text-danger">Failed to load photo data.</p>`;
  }
};

fetchPhotos();
