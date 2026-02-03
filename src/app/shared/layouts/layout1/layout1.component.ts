import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'sos-layout1',
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './layout1.component.html',
  styleUrl: './layout1.component.scss'
})
export class Layout1Component {

}
