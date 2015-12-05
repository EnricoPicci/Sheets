import {bootstrap, Component, FORM_DIRECTIVES, 
		CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
    selector: 'my-app',
	providers: [],
    template: `
		<h1>{{title}}</h1>
		`,
	directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
class AppComponent { 
	public title: string = 'Sheets';

}

bootstrap(AppComponent, []);