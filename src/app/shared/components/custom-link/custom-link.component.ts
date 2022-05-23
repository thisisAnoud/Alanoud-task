import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-custom-link',
  templateUrl: './custom-link.component.html',
  styleUrls: ['./custom-link.component.scss']
})
export class CustomLinkComponent implements OnInit {
  @Input()
	set text(name: string) {
		this.linkText = name;
	}
	get name(): string {
		return this.linkText;
	}
  public linkText = '';
  constructor() { }

  ngOnInit(): void {
  }

}
