export class Multiplicar_log {
  valorA_log: number = 0;
  valorB_log: number = 0;
  resultado_log: number = 0;

   multiplicarConSumas() {
    this.resultado_log = 0;
    const vA_log = Math.abs(this.valorA_log);
    const vB_log = Math.abs(this.valorB_log);

    for (let i = 0; i < vA_log; i++) {
      this.resultado_log += vB_log;
    }
    return this.resultado_log;
  }
  borrar(){
    this.resultado_log = 0;
  }
}