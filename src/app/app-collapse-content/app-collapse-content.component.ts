import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collapse-content',
  templateUrl: './app-collapse-content.component.html',
  styleUrls: ['./app-collapse-content.component.scss']
})
export class CollapseContentComponent implements OnInit {
  @Input() title: string;
  @Input() isCollapsed: boolean;

  constructor() { }

  ngOnInit() {
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}
