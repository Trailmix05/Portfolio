import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconDirective } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-cep',
  standalone: true,
  imports: [
    NzGridModule,
    NzCardModule,
    NzCollapseModule,
    NzIconDirective,
    NzButtonModule
  ],
  templateUrl: './cep.component.html',
  styleUrl: './cep.component.less'
})
export class CepComponent { }
