import { NgModule } from '@angular/core';

import { AuthComponent } from './auth.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [AuthComponent],
    declarations: [AuthComponent],
    providers: [],
})
export class AuthModule { }
