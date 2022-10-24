import {animate, state, style, transition, trigger} from "@angular/animations";

export const flyIn = trigger('flyIn',[
  state('in', style({})),
  transition(':enter',[
    style({backgroundColor:'red', transform: 'translateX(0)'}),
    animate('2s 100ms ease-out')
  ])
])