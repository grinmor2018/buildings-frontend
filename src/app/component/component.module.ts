import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ComponentsRoutes } from './component.routing';
import { NgbdpregressbarBasicComponent } from './progressbar/progressbar.component';
import { NgbdpaginationBasicComponent } from './pagination/pagination.component';
import { NgbdAccordionBasicComponent } from './accordion/accordion.component';
import { NgbdAlertBasicComponent } from './alert/alert.component';
import { NgbdCarouselBasicComponent } from './carousel/carousel.component';
import { NgbdDatepickerBasicComponent } from './datepicker/datepicker.component';
import { NgbdDropdownBasicComponent } from './dropdown-collapse/dropdown-collapse.component';
import { NgbdModalBasicComponent } from './modal/modal.component';
import { NgbdPopTooltipComponent } from './popover-tooltip/popover-tooltip.component';
import { NgbdratingBasicComponent } from './rating/rating.component';
import { NgbdtabsBasicComponent } from './tabs/tabs.component';
import { NgbdtimepickerBasicComponent } from './timepicker/timepicker.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './card/card.component';
import { ToastComponent } from './toast/toast.component';
import { ToastsContainer } from './toast/toast-container';
import { FormMantenimentComponent } from './form-manteniment/form-manteniment.component';
import { LlistaMantenimentComponent } from './llista-manteniment/llista-manteniment.component';
import { FormAmbitsComponent } from './form-ambits/form-ambits.component';
import { LlistaAmbitsComponent } from './llista-ambits/llista-ambits.component';
import { FormEdificisComponent } from './form-edificis/form-edificis.component';
import { FormContactesComponent } from './form-contactes/form-contactes.component';
import { FormServeisComponent } from './form-serveis/form-serveis.component';
import { FormPlantasComponent } from './form-plantas/form-plantas.component';
import { FormSalasComponent } from './form-salas/form-salas.component';
import { FormServespesComponent } from './form-servespes/form-servespes.component';
import { LlistaEdificisComponent } from './llista-edificis/llista-edificis.component';
import { LlistaPlantasComponent } from './llista-plantas/llista-plantas.component';
import { LlistaSalasComponent } from './llista-salas/llista-salas.component';
import { LlistaServeisComponent } from './llista-serveis/llista-serveis.component';
import { LlistaServespesComponent } from './llista-servespes/llista-servespes.component';
import { LlistaContactesComponent } from './llista-contactes/llista-contactes.component';
import { LlistaRespostasComponent } from './llista-respostas/llista-respostas.component';
import { FormRespostasComponent } from './form-respostas/form-respostas.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [
    NgbdpregressbarBasicComponent,
    NgbdpaginationBasicComponent,
    NgbdAccordionBasicComponent,
    NgbdAlertBasicComponent,
    NgbdCarouselBasicComponent,
    NgbdDatepickerBasicComponent,
    NgbdDropdownBasicComponent,
    NgbdModalBasicComponent,
    NgbdPopTooltipComponent,
    NgbdratingBasicComponent,
    NgbdtabsBasicComponent,
    NgbdtimepickerBasicComponent,
    ButtonsComponent,
    CardsComponent,
    ToastComponent,
    ToastsContainer,
    FormMantenimentComponent,
    LlistaMantenimentComponent,
    FormAmbitsComponent,
    LlistaAmbitsComponent,
    FormEdificisComponent,
    FormContactesComponent,
    FormServeisComponent,
    FormPlantasComponent,
    FormSalasComponent,
    FormServespesComponent,
    LlistaEdificisComponent,
    LlistaPlantasComponent,
    LlistaSalasComponent,
    LlistaServeisComponent,
    LlistaServespesComponent,
    LlistaContactesComponent,
    LlistaRespostasComponent,
    FormRespostasComponent
  ]
})
export class ComponentsModule {}
