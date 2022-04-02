import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SelectionService } from '../selection.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
 

  constructor(private selectionService: SelectionService) { }

  ngOnInit(): void {
  }


  onSendPick(selection: string) {
    this.selectionService.selectionChange(selection)
     }

}
