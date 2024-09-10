window.addEventListener('load', function () {
    const codeReader = new ZXing.BrowserQRCodeReader();
    const videoElement = document.getElementById('video');
    const resultElement = document.getElementById('result');

    // Solicitar acceso a la cámara y comenzar el escaneo
    codeReader.decodeFromVideoDevice(undefined, videoElement, (result, err) => {
        if (result) {
            resultElement.textContent = result.text; // Mostrar el resultado
            console.log('Código QR detectado:', result.text);
        }
        if (err && !(err instanceof ZXing.NotFoundException)) {
            console.error('Error en la detección:', err);
        }
    }).catch(err => {
        console.error('Error al acceder a la cámara:', err);
    });
});
