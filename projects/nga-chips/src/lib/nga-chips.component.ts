import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { Chips } from './chips.types';

@Component({
  selector: 'nga-chips',
  templateUrl: 'nga-chips.component.html',
  styleUrls: ['nga-chips.component.scss']
})
export class NgaChipsComponent {
  @ViewChild('tagInput') tagInput?: ElementRef;
  @ViewChild('tagsContainer') tagsContainer?: ElementRef;

  @Input() suggestedChips: Array<Chips> = [];
  @Input() value: Array<Chips> = [];
  @Input() limitNumber: number = -1;
  @Output() valueChange = new EventEmitter<Array<Chips>>();

  @Input() placeHolder: string = "";
  @Input() secondaryPlaceHolder: string = "";
  @Output() onInput: EventEmitter<string> = new EventEmitter<string>();
  @Input() search$?: Observable<any[]>;
  @Input() minChars: number = -1;
  currentValue: string = "";

  constructor() {

  }

  ngAfterViewInit(): void {
    // Get the tags and input elements from the DOM
    const input = this.tagInput?.nativeElement;
    // Add an event listener for keydown on the input element
    const keyDown = fromEvent(input, 'keyup');
    keyDown.subscribe((event) => this.keyUp(event));
    // Add an event listener for click on the tags list
    this.search$?.subscribe({
      next: resp => console.log(resp)
    })
  }

  keyUp(event: any) {
    const tags = this.tagsContainer?.nativeElement;
    if (!this.value) {
      this.value = [];
    }
    // Check if the key pressed is 'Enter'
    if (event.key === 'Enter') {
      this.suggestedChips = [];
      // Prevent the default action of the keypress
      // event (submitting the form)
      event.preventDefault();
      const targetValue = event.target.value;
      if (targetValue.trim() != '') {
        const find = this.value.find(el => el.value == targetValue);
        if (!find) {
          this.currentValue = "";
          // Get the trimmed value of the input element
          this.value.push({
            value: event.target.value,
            display: event.target.value,
          });
        }
      }

    }
  }

  selectItem(value: string) {
    if (!this.value.find(item => item.value == value)) {
      const find = this.suggestedChips.find(el => el.value == value);
      if (find) {
        this.value.push(find);
        this.suggestedChips = [];
        this.currentValue = "";
      }
    }
  }

  deleteTag(value: string) {
    this.value = this.value.filter(item => item.value != value);
    this.valueChange.emit(this.value);
  }

  @HostListener("keydown", ['$event'])
  onKeyDown(event: any) {
    if (event.code == 'Backspace' && this.currentValue.trim() == "") {
      const lastItem = this.value.pop();
      this.valueChange.emit(this.value);
      if (lastItem) {
        this.currentValue = lastItem?.display;
      }
    }
  }

  input(event: any) {
    if (event.target.value.length > this.minChars) {
      this.onInput.emit(event.target.value);
    }
  }
}
