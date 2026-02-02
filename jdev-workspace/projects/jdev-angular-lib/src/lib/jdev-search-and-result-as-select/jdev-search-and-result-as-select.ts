import { ChangeDetectorRef, Component, input, model, OnChanges, output, SimpleChanges } from '@angular/core';
import { RR, SelectedValue } from '../../models/common';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lib-jdev-search-and-result-as-select',
  imports: [BrowserModule, CommonModule, FormsModule],
  templateUrl: './jdev-search-and-result-as-select.html',
  styleUrl: './jdev-search-and-result-as-select.css'
})
export class JdevSearchAndResultAsSelect implements OnChanges {

  readonly showMoreConst: string = 'sm';
  readonly cannotFindInSelectConst: string = 'an';
  readonly selectDefaultValue: string = '-';

  //inputs
  labelForSearchInputI = input.required<string>();
  canEmptySearchInputI = input<boolean>(false);
  placeHolderForSearchInputI = input<string | null>(null);
  showMoreEnableInSelectI = input<boolean>(true);
  //this true, then 'labelForShowIfNotFoundInSelectI' cannot be null
  showIfNotFoundInSelectI = input<boolean>(false);
  labelForShowIfNotFoundInSelectI = input<string | null>(null);
  idForInputTextSearchInputI = input<string>();

  //output
  selectedItemO = output<SelectedValue | null>();
  callSearchButtonO = output<string>();

  //models
  inputTextSearchM = model<string>('');
  dataResponseForSelectM = model<RR | null>(null);

  //component variables
  selectedItem: string = this.selectDefaultValue;
  selectedItemChangeEventFired: boolean = false;
  previousData: RR | null = null;
  showButtonCall: boolean = true;
  callButtonClicked: boolean = false;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnChanges(_changes: SimpleChanges): void {
    const dataResponseForSelectModelLocal = this.dataResponseForSelectM();

    if (dataResponseForSelectModelLocal) {
      if (this.previousData === null) {
        this.previousData = dataResponseForSelectModelLocal;
      } else {
        if (this.previousData.request === dataResponseForSelectModelLocal.request) {
          this.previousData.request = dataResponseForSelectModelLocal.request;

          const length = this.previousData.response!.items.length;
          let count: number = 0;
          for (const item of dataResponseForSelectModelLocal.response!.items) {
            const itemAsString: string = JSON.stringify(item);
            for (let i = 0; i < length; i++) {
              if (itemAsString === JSON.stringify(this.previousData.response!.items[i])) {
                count++;
                break;
              }
            }
          }

          if (count !== dataResponseForSelectModelLocal.response!.items.length) {
            this.previousData.response!.hasMore = dataResponseForSelectModelLocal.response!.hasMore;
            this.previousData.response!.matchScore = dataResponseForSelectModelLocal.response!.matchScore;
            this.previousData.response!.nextCursor = dataResponseForSelectModelLocal.response!.nextCursor;
            this.previousData.response!.similarity = dataResponseForSelectModelLocal.response!.similarity;

            // this.previousData.response!.items.concat(dataResponseForSelectModelLocal.response!.items);

            const temp: Set<string> = new Set<string>;
            this.arrayIterate(this.previousData.response!.items, temp);
            this.arrayIterate(dataResponseForSelectModelLocal.response!.items, temp);

            this.previousData.response!.items.length = 0;

            for (const item of temp) {
              this.previousData.response!.items.push(JSON.parse(item));
            }
          }
        } else {
          this.previousData = null;
          this.dataResponseForSelectM.set(null);
        }
      }
    }
  }


  // if (this.last5.length === 0) {
  //   this.last5.push(dataResponseForSelectModelLocal);
  // } else {
  //   let index = this.last5.findIndex((value) => value.request === this.inputTextSearchModel());
  //   if (index === -1) {
  //     // this.last5.unshift(dataResponseForSelectModelLocal);
  //   } else {
  //     const previous = this.last5[index];
  //     const concatinateWithPrevious: CommonResposeDataWithPagination<any> = {
  //       nextCursor: dataResponseForSelectModelLocal.response!.nextCursor,
  //       hasMore: dataResponseForSelectModelLocal.response!.hasMore,
  //       items: previous.response!.items.concat(dataResponseForSelectModelLocal.response!.items),
  //       similarity: dataResponseForSelectModelLocal.response!.similarity,
  //       matchScore: dataResponseForSelectModelLocal.response!.matchScore
  //     };
  //     this.last5.unshift({
  //       request: this.inputTextSearchModel(),
  //       response: concatinateWithPrevious
  //     });
  //   }

  //   if (this.last5.length > 5) {
  //     this.last5.pop();
  //   }
  // }

  public clear() {
    this.selectedItem = this.selectDefaultValue;
    this.selectChangeEvent();
    this.inputTextSearchM.set('');
    this.previousData = null;
    this.dataResponseForSelectM.set(null);
    this.showButtonCall = true;
    this.cdr.detectChanges();
    this.callButtonClicked = false;
  }

  public searchInputEvent() {
    if (this.previousData && this.inputTextSearchM() === this.previousData!.request) {
      this.showButtonCall = false;
    } else {
      this.showButtonCall = true;

      if (this.previousData && this.previousData.response) {
        this.previousData.response.hasMore = false;
        this.previousData.response.items = [];
        this.previousData.response.nextCursor = null;
        this.previousData.response.matchScore = -1;
        this.previousData.response.similarity = -1;
        this.previousData.request = this.inputTextSearchM();
      }

      this.selectedItem = this.selectDefaultValue;
      this.selectChangeEvent();
      this.cdr.detectChanges();
    }

    // const dataResponseForSelectModelLocal = this.dataResponseForSelectM();
    // if (dataResponseForSelectModelLocal
    //   && dataResponseForSelectModelLocal.response?.items
    //   && dataResponseForSelectModelLocal.response.items.length > 0) {
    //   const index = dataResponseForSelectModelLocal.response.items.findIndex((value) => {
    //     return this.selectedItem === value.id;
    //   });
    //   if (index === -1) {
    //   }
    // }
  }

  public callClickEvent() {
    if (this.callButtonClicked === false) {
      this.callButtonClicked = true;
    }

    this.showButtonCall = false;
    this.callSearchButtonO.emit(this.inputTextSearchM());
  }

  public addNewClickEvent() {
    this.selectedItemO.emit({
      additionalInfo: {
        nextCursor: null,
        similarity: -1,
        matchScore: -1
      },
      selectedValue: null,
      searchValueInInput: this.inputTextSearchM(),
      isGetNextPage: false,
      isAddForm: true
    });
  }

  public selectClickEvent() {
    if (this.selectedItemChangeEventFired === true) {
      this.selectedItemChangeEventFired = false;
    } else {
      this.selectChangeEvent();
    }
  }

  public selectChangeEvent() {
    const temp = this.selectedItem;
    const inputTextSearch = this.inputTextSearchM();
    if (temp) {
      if (temp === this.selectDefaultValue) {
        //if default value
        this.selectedItemO.emit({
          additionalInfo: {
            nextCursor: null,
            similarity: -1,
            matchScore: -1
          },
          selectedValue: null,
          searchValueInInput: inputTextSearch,
          isGetNextPage: false,
          isAddForm: false
        });
      } else if (temp.startsWith(this.showMoreConst)) {
        //show more
        this.selectedItemO.emit({
          additionalInfo: {
            nextCursor: temp.substring(2),
            similarity: this.previousData!.response!.similarity,
            matchScore: this.previousData!.response!.matchScore
          },
          selectedValue: null,
          searchValueInInput: inputTextSearch,
          isGetNextPage: true,
          isAddForm: false
        });
      } else if (temp.startsWith(this.cannotFindInSelectConst)) {
        //add form if cannot find in select options
        this.selectedItemO.emit({
          additionalInfo: {
            nextCursor: null,
            similarity: -1,
            matchScore: -1
          },
          selectedValue: null,
          searchValueInInput: inputTextSearch,
          isGetNextPage: false,
          isAddForm: true
        });
      } else {
        this.selectedItemO.emit({
          additionalInfo: {
            nextCursor: null,
            similarity: -1,
            matchScore: -1
          },
          selectedValue: temp,
          searchValueInInput: inputTextSearch,
          isGetNextPage: false,
          isAddForm: false
        });
      }
    }
    this.selectedItemChangeEventFired = true;
  }

  private arrayIterate<T>(input: T[], temp: Set<string>) {
    const length = input.length;
    let currentAsString: string;
    for (let i = 0; i < length; i++) {
      currentAsString = JSON.stringify(input[i]);
      if (temp.has(currentAsString) === false) {
        temp.add(currentAsString);
      }
    }
  }

}