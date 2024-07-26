import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { colIconsClose, colIconsMenu } from 'col-library-example';
import {NgColLibraryExampleModule, NgColLibraryExampleService} from 'ng-col-library-example';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgColLibraryExampleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'col-library-test';

  constructor(private colService:NgColLibraryExampleService){
    colService.registerIcons([colIconsClose,colIconsMenu]);
    
  }
}
