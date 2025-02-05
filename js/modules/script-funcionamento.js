export default class Funcionamento {
  constructor(diasSemana, activeClass) {
    this.funcionamento = document.querySelector(diasSemana);
    this.activeClass = activeClass;
  }
  dadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(",").map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario
      .split(",")
      .map(Number);
  }
  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horarioAgora = (this.dataAgora.getUTCHours() - 3 + 24) % 24;
  }
  estaAberto() {
    this.semanaAberta = this.diasSemana.indexOf(this.diaAgora) !== -1;
    this.horarioAberto =
      this.horarioAgora >= this.horarioSemana[0] &&
      this.horarioAgora < this.horarioSemana[1];
    return this.semanaAberta && this.horarioAberto;
  }
  ativaAberto() {
    if (this.estaAberto()) {
      this.funcionamento.classList.add(this.activeClass);
    }
  }
  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativaAberto();
    }
  }
}
