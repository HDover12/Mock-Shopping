import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SelectionService } from '../selection.service';


@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {


selection: string = ''

  constructor(private selectionService: SelectionService) { }

  onSort(sortSelection: string) {

    this.selectionService.sortChange(sortSelection)
  }

  ngOnInit(): void {
  }

}
