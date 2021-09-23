const { Worker, isMainThread, parentPort, workerData } = require("worker_threads");
const path = require('path');

if (!isMainThread) {
    require('ts-node').register();
    require(path.resolve(__dirname, workerData.pathMath));
}


/*

if (isMainThread) {

    const worker = new Worker(__filename, { workerData: 1 }); // Se for a thread principal, gera um novo worker (uma nova thread)
    // Worker data passa dados para executar na outra thread, passando o valor de 1

    worker.on('message', message => console.log(message));
} else {

    // Se não for a main_thread, significa que é um  worker então, ele executa o código abaixo e após isso, passar o código de volta para a thread principal
    const someMath = workerData + 1;
    parentPort.postMessage(someMath); // parentPort = Porta da thread principal
}

*/