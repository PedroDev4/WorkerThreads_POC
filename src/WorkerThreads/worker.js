const { Worker, isMainThread, parentPort, workerData } = require("worker_threads");

let array = [];
array = workerData.arrayExecution;
const finalArray = [];

const lat = workerData.lat;
const lon = workerData.lon;

const math = (num1, num2) => {
    return Math.round(((num1 + num2) * 4) / 2);
};

array.forEach(async (obj) => {

    // finalArray.push(math(lat, lon));
    finalArray.push(obj.peso, obj.altura);
});

parentPort.postMessage(finalArray);

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
