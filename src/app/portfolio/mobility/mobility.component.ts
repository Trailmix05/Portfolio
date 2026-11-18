import { Component } from '@angular/core'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzModalModule } from 'ng-zorro-antd/modal'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NgTemplateOutlet } from '@angular/common'

export type partnership = 'existing' | 'waiting for a response' | 'nonexisting'

interface MobilityProject {
  id?: number
  title: string
  location: string
  country: string
  duration: string
  type: string
  partnership?: partnership
  description: string
}

@Component({
  selector: 'app-mobility',
  standalone: true,
  imports: [NzModalModule, NgTemplateOutlet, NzGridModule, NzTagModule],
  templateUrl: './mobility.component.html',
  styleUrls: ['./mobility.component.less', '../../app.component.less'],
})
export class MobilityComponent {
  isVisible: boolean[] = []
  projects: MobilityProject[] = [
    {
      title: 'Aalto University',
      location: 'Aalto',
      country: 'Finland',
      duration: '1 Semester',
      type: 'Exchange',
      partnership: 'waiting for a response',
      description:
        'Aalto University in Finland is a prestigious multidisciplinary university known for its strong emphasis on technology, business, and design. Founded in 2010 through the merger of three leading Finnish universities, Aalto has quickly established itself as a pioneer in innovation and entrepreneurship. Its schools of engineering and business are internationally recognized, and the university fosters cutting-edge research in fields such as digital technologies, sustainable energy, and creative industries.',
    },
    {
      title: '"Tor Vergata" University',
      location: 'Rome',
      country: 'Italy',
      duration: '1 Semester',
      type: 'Exchange',
      partnership: 'existing',
      description:
        'The University of Rome Tor Vergata, established in 1982 as Rome’s second public university, is a major research institution set on a sprawling 600-hectare campus in the southeast of the city. Designed on an Anglo-Saxon campus model, it is internationally recognized for its strong programs in engineering, economics, sciences, and medicine, and maintains close ties with prominent national research centers such as the CNR and the Italian Space Agency.',
    },
    {
      title: 'Technical University of Darmstadt',
      location: 'Darmstadt',
      country: 'Germany',
      duration: '1 Semester',
      type: 'Exchange',
      partnership: 'existing',
      description:
        'The Technical University of Darmstadt is an extremely prestigious and reputable technical university in Germany. The Computer Science department was founded in 1972 and was one of the first computer science departments in Germany. They are also pioneers in the research field, with multiple figureheads in computer science creating innovative solutions and ways of thinking.',
    },
    {
      title: 'University of Stavanger',
      location: 'Stavanger',
      country: 'Norway',
      duration: '1 Semester',
      type: 'Exchange',
      partnership: 'existing',
      description:
        'The University of Stavanger is a public research university located in Stavanger, Norway. Established in 2005, it is known for its strong focus on energy, technology, offshore engineering, and risk management, maintaining close ties with international industry and research networks.',
    },
    {
      title: 'Delft University',
      location: 'Delft',
      country: 'Netherlands',
      duration: '1 Semester',
      type: 'Free-Mover',
      partnership: 'nonexisting',
      description:
        'Delft University of Technology in the Netherlands is a world-leading technical university known for its excellence in engineering and technology education and research. Established in 1842, TU Delft has been at the forefront of innovation in fields such as aerospace, civil engineering, and computer science. The university is celebrated for its strong focus on sustainable technologies, smart systems, and interdisciplinary collaboration, shaping future engineers and researchers globally.',
    },
  ]

  chunkedProjects: MobilityProject[][] = []

  ngOnInit() {
    for (const project of this.projects) {
      const index = this.projects.indexOf(project)
      this.projects[index].id = index
      this.isVisible.push(false)
    }
    this.chunkedProjects = this.chunkProjects(3)
  }

  chunkProjects(chunkSize: number): MobilityProject[][] {
    const chunks = []
    for (let i = 0; i < this.projects.length; i += chunkSize)
      chunks.push(this.projects.slice(i, i + chunkSize))

    return chunks
  }

  closeModal(modalID = -1) {
    if (modalID > -1) {
      this.isVisible[modalID] = false
    }
  }

  showModal(modalID = -1) {
    if (modalID > -1) {
      this.isVisible[modalID] = true
    }
  }

  getBadgeColor(status?: partnership): string {
    switch (status) {
      case 'existing':
        return 'green' // Or '#52c41a' for solid fill
      case 'waiting for a response':
        return 'gold' // Or '#faad14' for solid fill
      case 'nonexisting':
      default:
        return 'default' // Renders a clean grey pill
    }
  }
}
