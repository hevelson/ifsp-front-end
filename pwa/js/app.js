if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/sw.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}

if (navigator.mediaDevices && typeof navigator.mediaDevices.getUserMedia === 'function') {

  document.addEventListener('DOMContentLoaded', function () {
    let options = {
      onCloseStart: fecharCamera,
      onOpenStart: iniciarCamera
    }

    let elems = document.querySelectorAll('.modal');
    let instances = M.Modal.init(elems, options);
  });

  function fecharCamera() {
    Quagga.stop();
  }

  function iniciarCamera() {
    Quagga.init({
      inputStream: {
        name: "Live",
        type: "LiveStream",
        target: document.querySelector('#barcode-scanner')
      },
      decoder: {
        readers: ["code_128_reader"]
      }
    }, function (err) {
      if (err) {
        console.log(err);
        return
      }
      console.log("Initialization finished. Ready to start");
      Quagga.start();
    });
  }

  Quagga.onDetected(function (result) {
    const code = result.codeResult.code;
    console.log(code);
    document.querySelector("#codigo").value = code;
    const modal = M.Modal.getInstance(document.querySelector("#modal1"));
    modal.close();
  });
  // safely access `navigator.mediaDevices.getUserMedia`
}