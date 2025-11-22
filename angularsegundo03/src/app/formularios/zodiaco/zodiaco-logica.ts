export class Zodiaco_log {
  nombre_log!: string;
  aPaterno_log!: string;
  aMaterno_log!: string;
  resnombre_log!: string;

  dia_log: number = 0;
  mes_log: number = 0;
  ano_log: number = 0;
  resEdad_log: string = "";
  sex_log: boolean = true;

  resSimbolo_log: string = "";
  imgz_log: string = "";

  calcularNombreCompleto() {
    return this.resnombre_log = `Hola, ${this.nombre_log} ${this.aPaterno_log} ${this.aMaterno_log}`;
  }

  calcularEdad() {
    const fechaActual_log = new Date();
    const anoActual_log = fechaActual_log.getFullYear();
    const diaActual_log = fechaActual_log.getDate();
    const mesActual_log = fechaActual_log.getMonth() + 1;
    let edad_log = anoActual_log - this.ano_log;
    if(this.mes_log > mesActual_log){
      edad_log = edad_log - 1;
      if(this.dia_log > diaActual_log){
        edad_log = edad_log - 1;
      }
    }
    return this.resEdad_log = `Tienes ${edad_log} años`;
  }
  calcularSignoZodiacalChino() {
    const residuo = this.ano_log % 12;

    const signosZodiaco = {
      0: 'mono',
      1: 'gallo',
      2: 'perro',
      3: 'cerdo',
      4: 'rata',
      5: 'buey',
      6: 'tigre',
      7: 'conejo',
      8: 'dragon',
      9: 'serpiente',
      10: 'caballo',
      11: 'cabra'
    };

    const simboloZ = signosZodiaco[residuo as keyof typeof signosZodiaco];

    this.resSimbolo_log = `Tu signo zodiacal es: ${simboloZ}`;
    this.imgz_log = `${simboloZ}.jpg`;
  }
}
