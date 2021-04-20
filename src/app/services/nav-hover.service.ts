import { Injectable, InjectionToken } from '@angular/core';
import { Subject } from 'rxjs';
import { Button } from '../interfaces/button';

export const BUTTONS = new InjectionToken<Subject<Button>>('Button');

export const BUTTONS_PROVIDER = {
  provide: BUTTONS,
  useFactory: () => {
    return new Subject<Button>();
  }
};
