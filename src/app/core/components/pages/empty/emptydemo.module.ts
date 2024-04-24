import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyDemoRoutingModule } from './emptydemo-routing.module';
import { EmptyDemoComponent } from './emptydemo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        EmptyDemoRoutingModule
    ],
    declarations: [EmptyDemoComponent]
})
export class EmptyDemoModule { }
