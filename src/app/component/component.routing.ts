import { Routes } from '@angular/router';

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
import { LlistaBuildingsComponent } from './llista-buildings/llista-buildings.component';
import { FormBuildingsComponent } from './form-buildings/form-buildings.component';
import { LlistaMantenimentComponent } from './llista-manteniment/llista-manteniment.component';
import { FormMantenimentComponent } from './form-manteniment/form-manteniment.component';
import { FormAmbitsComponent } from './form-ambits/form-ambits.component';


export const ComponentsRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'progressbar',
				component: NgbdpregressbarBasicComponent,
				data: {
					title: 'Progressbar',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Progressbar' }
					]
				}
			},
			{
				path: 'card',
				component: CardsComponent,
				data: {
					title: 'Cards',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Cards' }
					]
				}
			},
			{
				path: 'pagination',
				component: NgbdpaginationBasicComponent,
				data: {
					title: 'Pagination',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Pagination' }
					]
				}
			},
			{
				path: 'accordion',
				component: NgbdAccordionBasicComponent,
				data: {
					title: 'Accordion',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Accordion' }
					]
				}
			},
			{
				path: 'alert',
				component: NgbdAlertBasicComponent,
				data: {
					title: 'Alert',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Alert' }
					]
				}
			},
			{
				path: 'carousel',
				component: NgbdCarouselBasicComponent,
				data: {
					title: 'Carousel',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Carousel' }
					]
				}
			},
			{
				path: 'datepicker',
				component: NgbdDatepickerBasicComponent,
				data: {
					title: 'Datepicker',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Datepicker' }
					]
				}
			},
			{
				path: 'dropdown',
				component: NgbdDropdownBasicComponent,
				data: {
					title: 'Dropdown',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Dropdown' }
					]
				}
			},
			{
				path: 'modal',
				component: NgbdModalBasicComponent,
				data: {
					title: 'Modal',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Modal' }
					]
				}
			},
			{
				path: 'poptool',
				component: NgbdPopTooltipComponent,
				data: {
					title: 'Popover & Tooltip',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Popover & Tooltip' }
					]
				}
			},
			{
				path: 'rating',
				component: NgbdratingBasicComponent,
				data: {
					title: 'Rating',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Rating' }
					]
				}
			},
			{
				path: 'tabs',
				component: NgbdtabsBasicComponent,
				data: {
					title: 'Tabs',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Tabs' }
					]
				}
			},
			{
				path: 'timepicker',
				component: NgbdtimepickerBasicComponent,
				data: {
					title: 'Timepicker',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Timepicker' }
					]
				}
			},
			{
				path: 'buttons',
				component: ButtonsComponent,
				data: {
					title: 'Button',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Button' }
					]
				}
			},
			{
				path: 'toast',
				component: ToastComponent,
				data: {
					title: 'Toast',
				}
      },
      {
				path: 'buildings',
				component: LlistaBuildingsComponent,
				data: {
					title: 'Llista edificis'
        }
      },
      {
        path: 'buildings/crear',
        component: FormBuildingsComponent,
        data: {
          title: 'Crear edificis',
        }
      },
      {
        path: 'buildings/editar/:id',
        component: FormBuildingsComponent,
        data: {
          title: 'Editar edificis',
        }
      },
      {
        path: 'ambits/crear',
        component: FormAmbitsComponent,
        data: {
          title: 'Crear àmbits',
          category: 'Àmbit',
          field: 'ambit'
        }
      },
      {
        path: 'amnbits/editar/:id',
        component: FormAmbitsComponent,
        data: {
          title: 'Editar àmbits',
          category: 'Àmbit',
          field: 'ambit'
        }
      },
      {
        path: 'floors/crear',
        component: FormMantenimentComponent,
        data: {
          title: 'Crear plantes',
          category: 'Planta',
          field: 'floor'
        }
      },
      {
        path: 'floors/editar/:id',
        component: FormMantenimentComponent,
        data: {
          title: 'Editar plantes',
          category: 'Planta',
          field: 'floor'
        }
      },
      {
        path: 'waitingrooms/crear',
        component: FormMantenimentComponent,
        data: {
          title: `Crear sala d'espera`,
          category: `Sala d'espera`,
          field: 'waitingroom'
        }
      },
      {
        path: 'waitingrooms/editar/:id',
        component: FormMantenimentComponent,
        data: {
          title: `Editar sala d'espera`,
          category: `Sala d'espera`,
          field: 'waitingroom'
        }
      },
      {
        path: 'servicespecialities/crear',
        component: FormMantenimentComponent,
        data: {
          title: 'Crear servei o especialitat',
          category: 'Servei o especialitat',
          field: 'servicespeciality'
        }
      },
      {
        path: 'servicespecialities/editar/:id',
        component: FormMantenimentComponent,
        data: {
          title: 'Editar servei o especialitat',
          category: 'Servei o especialitat',
          field: 'servicespeciality'
        }
      },
      {
        path: 'consultingrooms/crear',
        component: FormMantenimentComponent,
        data: {
          title: 'Crear consultori',
          category: 'Consultori',
          field: 'consultingroom'
        }
      },
      {
        path: 'consultingrooms/editar/:id',
        component: FormMantenimentComponent,
        data: {
          title: 'Editar consultori',
          category: 'Consultori',
          field: 'consultingroom'
        }
      },
      {
        path: 'rooms/crear',
        component: FormMantenimentComponent,
        data: {
          title: 'Crear habitació',
          category: 'Habitació',
          field: 'room'
        }
      },
      {
        path: 'rooms/editar/:id',
        component: FormMantenimentComponent,
        data: {
          title: 'Editar habitació',
          category: 'Habitació',
          field: 'room'
        }
      }
		]
	}
];
