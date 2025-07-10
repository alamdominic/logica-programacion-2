function startConvertion(){
    const userInput = parseFloat(document.getElementById("number").value);

    if (isNaN(userInput)) {
        alert("Por favor ingresa un número válido.");
        return;
    }

    const fahrenheit = conversionCelciusAFarenheit(userInput)
    const kelvin = conversionCelciusAKelvin(userInput)
    
    const resultado = document.getElementById("resultado");
    resultado.style.display = "flex";

    // Limpiar contenido anterior
    resultado.innerHTML = '';

    //Crear titulo Resultado
    resultado.innerHTML += crearTitulo();
    // Crear tarjetas
    resultado.innerHTML += crearTarjeta(`${userInput} °C`, "Celsius");
    resultado.innerHTML += crearTarjeta(`${fahrenheit.toFixed(2)} °F`, "Fahrenheit");
    resultado.innerHTML += crearTarjeta(`${kelvin.toFixed(2)} K`, "Kelvin");
}
//F = (C × 9/5) + 32
function conversionCelciusAFarenheit(gradosCelsius){
    let gradosFarnheit = (gradosCelsius * 9/5) + 32
    return gradosFarnheit
}

//K = C + 273.15
function conversionCelciusAKelvin(gradosCelsius){
    let gradosKelvin = gradosCelsius + 273.15
    return gradosKelvin
}

function crearTitulo(){
    return `
        <H2> Resultados de tu conversion </h2>
        <br>
    `
}

function crearTarjeta(valor, unidad) {
    return `
        <div class="tarjeta">
            <h3>${unidad}</h3>
            <p>${valor}</p>
        </div>
    `;
}