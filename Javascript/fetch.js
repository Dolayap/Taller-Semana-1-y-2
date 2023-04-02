obtenerClima();
limpiarResultado();
function obtenerClima() {
  const selectCiudades = document.getElementById("selectCiudades");

  selectCiudades.addEventListener("change", () => {
    const ciudadSeleccionada = selectCiudades.value;
    console.log(ciudadSeleccionada);
    const url = `https://open-weather13.p.rapidapi.com/city/${ciudadSeleccionada}`;

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "a479ba5c53msh581bf18a3eca336p14f0b1jsnf495ba20c0d5",
        "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((response) => {
        const {
          name,
          main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
          visibility,
          wind: { speed, deg, gust },
          weather: [{ id, main, description, icon }],
          sys: { type, id: sysId, country, sunrise, sunset },
          timezone,
          coord: { lat, lon },
        } = response;
        const contenidoSuperpuesto = document.getElementById(
          "contenido-superpuesto"
        );

        // Crear elementos HTML
        const cityName = document.createElement("h2");
        const tempValue = document.createElement("p");
        const mintempValue = document.createElement("p");
        const pressureValue = document.createElement("p");
        const maxtempValue = document.createElement("p");

        const mainValue = document.createElement("p");
        const descValue = document.createElement("p");
        const iconValue = document.createElement("p");

        const latValue = document.createElement("p");
        const lonValue = document.createElement("p");

        const speedValue = document.createElement("p");
        const degValue = document.createElement("p");
        const gustValue = document.createElement("p");

        // Asignar valores a los elementos HTML
        cityName.textContent = name;
        mintempValue.textContent = `La temperatura minima sera de ${temp_min}°F`;
        maxtempValue.textContent = `La temperatura maxima sera de ${temp_max}°F`;
        tempValue.textContent = `Temperatura actual: ${temp}°F`;
        pressureValue.textContent = `Presion actual: ${pressure}`;

        mainValue.textContent = `Clima: ${description}`;
        descValue.textContent = `Descripción: ${description}`;
        iconValue.textContent = `Icono: ${description}`;

        latValue.textContent = `Latitud: ${lat}`;
        lonValue.textContent = `Longitud: ${lon}`;

        speedValue.textContent = `Velocidad del viento: ${speed}km`;
        degValue.textContent = `Direccion del viento: ${deg}`;
        gustValue.textContent = `Rafaga: ${gust}`;

        // Agregar elementos al contenedor HTML
        contenidoSuperpuesto.appendChild(cityName);
        contenidoSuperpuesto.appendChild(tempValue);
        contenidoSuperpuesto.appendChild(mintempValue);
        contenidoSuperpuesto.appendChild(maxtempValue);
        contenidoSuperpuesto.appendChild(pressureValue);
        contenidoSuperpuesto.appendChild(mainValue);
        contenidoSuperpuesto.appendChild(descValue);
        contenidoSuperpuesto.appendChild(iconValue);
        contenidoSuperpuesto.appendChild(latValue);
        contenidoSuperpuesto.appendChild(lonValue);
        contenidoSuperpuesto.appendChild(speedValue);
        contenidoSuperpuesto.appendChild(degValue);
        contenidoSuperpuesto.appendChild(gustValue);
      })
      .catch((error) => console.error(error));
  });
}
function limpiarResultado() {
  const contenidoSuperpuesto = document.getElementById("contenido-superpuesto");
  contenidoSuperpuesto.innerHTML = "";
}
