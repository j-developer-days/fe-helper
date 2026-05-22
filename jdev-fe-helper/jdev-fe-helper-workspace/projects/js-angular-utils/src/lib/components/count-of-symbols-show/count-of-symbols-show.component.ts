import { Component, input, WritableSignal } from '@angular/core';
import { Field } from '../../models/internal';

@Component({
  selector: 'jdev-count-of-symbols-show',
  standalone: false,
  templateUrl: './count-of-symbols-show.component.html',
  styleUrl: './count-of-symbols-show.component.scss',
})
export class CountOfSymbolsShowComponent {

  //component variables-------------------------------------------------------
  //component input variables-------------------------------------------------
  field = input.required<WritableSignal<Field<string, number>>>();
  //component output variables------------------------------------------------
  //component model variables-------------------------------------------------
  //lifecycle hooks-----------------------------------------------------------
  //component functions-------------------------------------------------------
  //component events----------------------------------------------------------
  //another component events--------------------------------------------------
  //http call area------------------------------------------------------------
  //private-------------------------------------------------------------------

}