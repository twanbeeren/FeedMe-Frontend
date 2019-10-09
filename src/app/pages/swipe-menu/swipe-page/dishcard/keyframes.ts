import {keyframes, style} from '@angular/animations';

export const swing = [
    style({transform: 'rotate3d(0, 0, 1, 15deg)', offset: .2}),
    style({transform: 'rotate3d(0, 0, 1, -10deg)', offset: .4}),
    style({transform: 'rotate3d(0, 0, 1, 5deg)', offset: .6}),
    style({transform: 'rotate3d(0, 0, 1, -5deg)', offset: .8}),
    style({transform: 'none', offset: 1})
];

export const slideOutLeft = [
    style({transform: 'translate3d(0, 0, 0)'}),
    style({visibility: 'hidden', transform: 'translate3d(-100%, 0, 0)'})
];
