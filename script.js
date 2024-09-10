document.addEventListener('DOMContentLoaded', () => {
    const resultElement = document.getElementById('result');

    Quagga.init({
        inputStream: {
            name: "Live",
            type: "LiveStream",
            target: document.querySelector('#scanner-container'), // Elemento donde se mostrará la cámara
        },
        decoder: {
            readers: ["pdf417_reader"] // Especifica que queremos leer códigos PDF417
        }
    }, function(err) {
        if (err) {
            console.error('Error al iniciar Quagga:', err);
            return;
        }
        console.log("QuaggaJS iniciado correctamente.");
        Quagga.start();
    });

    Quagga.onDetected(function(result) {
        const code = result.codeResult.code;
        resultElement.innerText = code; // Mostrar el código detectado en la página
        console.log('Código detectado:', code);
    });
});
