import { Component } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-cep',
  standalone: true,
  imports: [NzGridModule],
  templateUrl: './cep.component.html',
  styleUrl: './cep.component.less'
})
export class CepComponent {}
