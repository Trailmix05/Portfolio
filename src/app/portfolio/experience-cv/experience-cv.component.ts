import { Component } from '@angular/core'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzCollapseModule } from 'ng-zorro-antd/collapse'
import { NzIconDirective } from 'ng-zorro-antd/icon'
import { NzButtonModule } from 'ng-zorro-antd/button'

@Component({
	selector: 'app-experience-cv',
	standalone: true,
	imports: [
		NzGridModule,
		NzCardModule,
		NzCollapseModule,
		NzIconDirective,
		NzButtonModule,
	],
	templateUrl: './experience-cv.component.html',
	styleUrls: ['./experience-cv.component.less', '../../app.component.less'],
})
export class ExperienceCVComponent {}
