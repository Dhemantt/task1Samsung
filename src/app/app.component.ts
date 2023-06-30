import { Component } from '@angular/core';
import { TransFormPipePipe } from './trans-form-pipe.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task1';
  heroes=['swimming', 'cricket'];
  

  addHero(newItem: string) {
    console.log(newItem)
    if(newItem.trim().length < 1)
    {
      console.error('please give correct input')
    }
    else{
      let pipe = new TransFormPipePipe()
      let res = pipe.transform(newItem.trim())
      console.log(res)
      this.heroes.push(res);
    }
    
  }
}
