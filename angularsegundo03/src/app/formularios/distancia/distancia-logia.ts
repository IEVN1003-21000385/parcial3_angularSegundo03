export class DistanciaLogica {
    // Valores base
    nx1_log!: number;
    nx2_log!: number;
    ny1_log!: number;
    ny2_log!: number;
    // Valores multiplicados por
    x1m_log: number = 0;
    y1m_log: number = 0;
    // Valores sumados
    xSuma_log: number = 0;
    ySuma_log: number = 0;
    // Valores elevados al cuadrado
    xElevado_log: number = 0;
    yElevado_log: number = 0;
    // Segunda suma
    segSuma_log: number = 0;
    // Resultado final
    resFinal_log: number = 0;

  calcularDistancia() {
    // Valores multiplicados por -
    this.x1m_log = this.nx1_log * -1;
    this.y1m_log = this.ny1_log * -1;

    // Valores sumados
    this.xSuma_log = this.nx2_log + this.x1m_log;
    this.ySuma_log = this.ny2_log + this.y1m_log;

    // Valores elevados al cuadrado
    this.xElevado_log = this.xSuma_log ** 2;
    this.yElevado_log = this.ySuma_log ** 2;

    // Segunda suma
    this.segSuma_log = this.xElevado_log + this.yElevado_log;

    // Resultado final
    this.resFinal_log = Math.sqrt(this.segSuma_log);

    return this.resFinal_log;
  }

  borrar() {
      this.resFinal_log = 0;
  }
}
