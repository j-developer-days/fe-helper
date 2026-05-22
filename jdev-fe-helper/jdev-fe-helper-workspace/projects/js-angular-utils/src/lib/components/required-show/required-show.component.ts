import { Component, input, WritableSignal } from '@angular/core';
import { Field } from '../../models/internal';

@Component({
  selector: 'jdev-required-show',
  standalone: false,
  templateUrl: './required-show.component.html',
  styleUrl: './required-show.component.scss',
})
export class RequiredShowComponent {

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