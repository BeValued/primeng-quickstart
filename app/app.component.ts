import {Component} from 'angular2/core';
import {InputText} from 'primeng/primeng';

@Component({
	selector: 'my-app',
	template: `
        <h1>My First 2 App</h1>
        <input type="text" pInputText/>
    `,
    directives: [InputText]
})
export class AppComponent {

}