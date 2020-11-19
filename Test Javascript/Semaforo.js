 class Procesos {
        id;
        promise;
        constructor(id, promise) {
            this.id = id;
            this.promise = promise
        }
    }

class Semaforo {
        ultimoProceso = 0;
        flag = true;
        procesosEncolados = [];

        constructor(flag) {
            this.flag = flag;
            setInterval(() => {
                this.verProcesosEncolados();
            }, 2000);
        }
          
        //Este es mi metodo ejecutar de mi clase SEMAFORO
        ejecutar(proceso) {

            if (this.flag && this.ultimoProceso === proceso.id - 1) {
                this.flag = false;
                proceso.promise.then((idProceso) => {
                    console.log("se ejecuto el proceso: " + idProceso);
                    this.ultimoProceso = proceso.id;
                    this.flag = true;

                });
            } else {
                this.procesosEncolados.push(proceso);
            }
        }
        
        //Este es mi metodo verProcesosEncolados de mi clase SEMAFORO
        verProcesosEncolados() {
            const process = this.procesosEncolados.find((element) => {
                return this.ultimoProceso === element.id - 1;
            });

            if (this.flag && process) {
                this.flag = false;
                process.promise.then((idProceso) => {
                    console.log("se ejecuto el proceso: " + idProceso);
                    this.ultimoProceso = process.id;
                    this.flag = true;
                });
            }
        }
    }
    
    //Aca creo mi objeto semoforo de mi clase SEMAFORO
    let semaforo = new Semaforo(true);

    function generarProceso(id) {
        const promise = new Promise((resolve) => {
            setTimeout(function () {
                resolve(id);
            }, Math.random() * 100);
        });
        return new Procesos(id, promise);
    }

    NUMERO_DE_PROCESOS = 7;
    let procesos = [];
    for (let i = 1; i <= NUMERO_DE_PROCESOS; i++) {
        procesos.push(generarProceso(i))
    }

    procesos.forEach((proceso) => {
        semaforo.ejecutar(proceso);
    });







