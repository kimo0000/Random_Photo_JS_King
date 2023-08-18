const contentEl = document.querySelector('.content');
const btn = document.getElementById('btn');

let count = 6;

// Methode 1:
// btn.addEventListener('click', () => {
//     let element = "";
//     for (let i = 0; i < count; i++) {
//       element += `<img src="https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}">`;
//    }

//     contentEl.innerHTML += element;
// })

// Methode 2:
btn.addEventListener("click", () => {
  for (let i = 0; i < count; i++) {
    const image = document.createElement('img');
    image.src = `https://picsum.photos/300?random=${Math.floor(
      Math.random() * 2000)}"`;

      contentEl.appendChild(image);
  }
});

