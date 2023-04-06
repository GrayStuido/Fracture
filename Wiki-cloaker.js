fetch('https://raw.githubusercontent.com/GrayStuido/Fracture/main/Wiki-Cloaker.js')
  .then(response => response.text())
  .then(data => {
    const scriptElement = document.createElement('script');
    scriptElement.textContent = data;
    document.body.appendChild(scriptElement);
  })
  .catch(error => console.error(error));
