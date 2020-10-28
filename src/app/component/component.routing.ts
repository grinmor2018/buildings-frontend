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
import { LlistaMantenimentComponent } from './llista-manteniment/llista-manteniment.component';
import { FormMantenimentComponent } from './form-manteniment/form-manteniment.component';
import { FormAmbitsComponent } from './form-ambits/form-ambits.component';
import { LlistaAmbitsComponent } from './llista-ambits/llista-ambits.component';
import { LlistaEdificisComponent } from './llista-edificis/llista-edificis.component';
import { FormEdificisComponent } from './form-edificis/form-edificis.component';
import { LlistaPlantasComponent } from './llista-plantas/llista-plantas.component';
import { FormPlantasComponent } from './form-plantas/form-plantas.component';
import { FormSalasComponent } from './form-salas/form-salas.component';
import { LlistaSalasComponent } from './llista-salas/llista-salas.component';
import { LlistaServespesComponent } from './llista-servespes/llista-servespes.component';
import { FormServespesComponent } from './form-servespes/form-servespes.component';
import { LlistaContactesComponent } from './llista-contactes/llista-contactes.component';
import { FormContactesComponent } from './form-contactes/form-contactes.component';
import { LlistaRespostasComponent } from './llista-respostas/llista-respostas.component';
import { FormRespostasComponent } from './form-respostas/form-respostas.component';


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
				path: 'respostas',
				component: LlistaRespostasComponent,
				data: {
					title: 'Llista respostes'
        }
      },
      {
        path: 'respostas/crear',
        component: FormRespostasComponent,
        data: {
          title: 'Crear respostes',
        }
      },
      {
        path: 'respostas/editar/:id',
        component: FormRespostasComponent,
        data: {
          title: 'Editar respostes',
        }
      },
      {
				path: 'edificis',
				component: LlistaEdificisComponent,
				data: {
					title: 'Llista edificis'
        }
      },
      {
        path: 'edificis/crear',
        component: FormEdificisComponent,
        data: {
          title: 'Crear edificis',
        }
      },
      {
        path: 'edificis/editar/:id',
        component: FormEdificisComponent,
        data: {
          title: 'Editar edificis',
        }
      },
      {
        path: 'ambits',
        component: LlistaAmbitsComponent,
        data: {
          title: 'Veure àmbits',
          category: 'Àmbit',
          field: 'ambit'
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
        path: 'ambits/editar/:id',
        component: FormAmbitsComponent,
        data: {
          title: 'Editar àmbits',
          category: 'Àmbit',
          field: 'ambit'
        }
      },
      {
				path: 'plantas',
				component: LlistaPlantasComponent,
				data: {
					title: 'Llista plantes'
        }
      },
      {
        path: 'plantas/crear',
        component: FormPlantasComponent,
        data: {
          title: 'Crear plantes',
          category: 'Planta',
          field: 'floor'
        }
      },
      {
        path: 'plantas/editar/:id',
        component: FormPlantasComponent,
        data: {
          title: 'Editar plantes',
          category: 'Planta',
          field: 'floor'
        }
      },
      {
				path: 'salas',
				component: LlistaSalasComponent,
				data: {
					title: 'Llista sales'
        }
      },
      {
        path: 'salas/crear',
        component: FormSalasComponent,
        data: {
          title: `Crear sala`,
          category: `Sala`,
          field: 'waitingroom'
        }
      },
      {
        path: 'salas/editar/:id',
        component: FormSalasComponent,
        data: {
          title: `Editar sala`,
          category: `Sala`,
          field: 'waitingroom'
        }
      },
      {
				path: 'servespes',
				component: LlistaServespesComponent,
				data: {
					title: 'Llista servei o especialitat'
        }
      },
      {
        path: 'servespes/crear',
        component: FormServespesComponent,
        data: {
          title: 'Crear servei o especialitat',
          category: 'Servei o especialitat',
          field: 'servicespeciality'
        }
      },
      {
        path: 'servespes/editar/:id',
        component: FormServespesComponent,
        data: {
          title: 'Editar servei o especialitat',
          category: 'Servei o especialitat',
          field: 'servicespeciality'
        }
      },
      {
        path: 'contactes',
        component: LlistaContactesComponent,
        data: {
          title: 'Veure contactes',
          category: 'Contacte',
          field: 'contact'
        }
      },
      {
        path: 'contactes/crear',
        component: FormContactesComponent,
        data: {
          title: 'Crear contactes',
          category: 'Contacte',
          field: 'contact'
        }
      },
      {
        path: 'contactes/editar/:id',
        component: FormContactesComponent,
        data: {
          title: 'Editar contactes',
          category: 'Contacte',
          field: 'contact'
        }
      }
		]
	}
];
