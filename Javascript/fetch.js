const selectCiudades = document.getElementById("selectCiudades");

selectCiudades.addEventListener("change", () => {
  const ciudadSeleccionada = selectCiudades.value;
  console.log(ciudadSeleccionada);
  const url = `https://open-weather13.p.rapidapi.com/city/${ciudadSeleccionada}`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "20bf7abe7emsh0b3e787efa9e3dcp1efdcdjsnd9e1e6c4946f",
      "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
    },
  };

  fetch(url, options)
    .then((response) => response.json())
    .then((response) => {
      const {
        name,
        main: { temp },
        weather: [{ description }],
        coord: { lat, lon },
      } = response;
      const contenidoSuperpuesto = document.getElementById(
        "contenido-superpuesto"
      );

      // Crear elementos HTML
      const cityName = document.createElement("h2");
      const tempValue = document.createElement("p");
      const descValue = document.createElement("p");
      const latValue = document.createElement("p");
      const lonValue = document.createElement("p");

      // Asignar valores a los elementos HTML
      cityName.textContent = name;
      tempValue.textContent = `Temperatura actual: ${temp}°C`;
      descValue.textContent = `Descripción: ${description}`;
      latValue.textContent = `Latitud: ${lat}`;
      lonValue.textContent = `Longitud: ${lon}`;

      // Agregar elementos al contenedor HTML
      contenidoSuperpuesto.appendChild(cityName);
      contenidoSuperpuesto.appendChild(tempValue);
      contenidoSuperpuesto.appendChild(descValue);
      contenidoSuperpuesto.appendChild(latValue);
      contenidoSuperpuesto.appendChild(lonValue);
    })
    .catch((error) => console.error(error));
});
