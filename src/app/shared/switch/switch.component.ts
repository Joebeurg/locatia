import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Switch} from '../custom-types/switch';


@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {

  @Input() switchValues: Switch;
  @Output() onSwitch = new EventEmitter<{label: string, value: string}>();

  constructor() { }

  ngOnInit(): void {
  }

  onChange(val: string) {
    this.onSwitch.emit({label: this.switchValues.label, value: val});
  }

}
