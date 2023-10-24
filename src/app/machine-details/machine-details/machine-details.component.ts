import { Component } from '@angular/core';
import { ReportServiceService } from 'src/app/services/report-service.service';

@Component({
  selector: 'app-machine-details',
  templateUrl: './machine-details.component.html',
  styleUrls: ['./machine-details.component.scss']
})
export class MachineDetailsComponent {
  //TODO fazer a tela de detalhes descentemente.
  // TODO PRECISA AJEITAR PARA PEGAR OS DADOS

  constructor(private reportService: ReportServiceService) {}
  /*

  */

  gerarRelatorio() {
    const filtros = { dataInicial: '2022-01-01', dataFinal: '2022-12-31' };
    this.reportService.gerarRelatorio(filtros).subscribe((data: any) => {
      const blob = new Blob([data], { type: 'application/pdf' });
      console.log(blob);
      
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'relatorio.pdf';
      link.click();
    });
  }
}
