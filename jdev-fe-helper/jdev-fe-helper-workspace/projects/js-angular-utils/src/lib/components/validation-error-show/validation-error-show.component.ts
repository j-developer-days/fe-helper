import { Component, input, WritableSignal } from '@angular/core';
import { Field } from '../../models/internal';

@Component({
  selector: 'jdev-validation-error-show',
  standalone: false,
  templateUrl: './validation-error-show.component.html',
  styleUrl: './validation-error-show.component.scss',
})
export class ValidationErrorShowComponent {

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