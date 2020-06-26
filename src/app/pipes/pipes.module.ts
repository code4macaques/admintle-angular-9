import { NgModule } from '@angular/core';

// Pipes
import { CapitalizePipe } from './capitalize.pipe';
import { ObjectKeysToArrayPipe } from './object-keys-to-array.pipe';
import { DomsecurityPipe } from './domsecurity.pipe';
import { PasswordPipe } from './password.pipe';


@NgModule({
  declarations: [
    CapitalizePipe,
    ObjectKeysToArrayPipe,
    DomsecurityPipe,
    PasswordPipe
  ],
  exports: [
    CapitalizePipe,
    ObjectKeysToArrayPipe,
    DomsecurityPipe,
    PasswordPipe
  ]
})
export class PipesModule { }
