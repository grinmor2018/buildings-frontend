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
import { LlistaBuildingsComponent } from './llista-buildings/llista-buildings.component';
import { FormBuildingsComponent } from './form-buildings/form-buildings.component';
import { FormMantenimentComponent } from './form-manteniment/form-manteniment.component';
import { LlistaMantenimentComponent } from './llista-manteniment/llista-manteniment.component';
import { FormAmbitsComponent } from './form-ambits/form-ambits.component';
import { FormFloorsComponent } from './form-floors/form-floors.component';
import { FormWaitingroomsComponent } from './form-waitingrooms/form-waitingrooms.component';
import { FormServicespecialitiesComponent } from './form-servicespecialities/form-servicespecialities.component';
import { FormConsultingroomsComponent } from './form-consultingrooms/form-consultingrooms.component';
import { FormRoomsComponent } from './form-rooms/form-rooms.component';
import { LlistaAmbitsComponent } from './llista-ambits/llista-ambits.component';

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
    LlistaBuildingsComponent,
    FormBuildingsComponent,
    FormMantenimentComponent,
    LlistaMantenimentComponent,
    FormAmbitsComponent,
    FormFloorsComponent,
    FormWaitingroomsComponent,
    FormServicespecialitiesComponent,
    FormConsultingroomsComponent,
    FormRoomsComponent,
    LlistaAmbitsComponent
  ]
})
export class ComponentsModule {}
