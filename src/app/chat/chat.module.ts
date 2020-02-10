import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';
import { RouterModule } from '@angular/router'
import { ChatService } from './chat.service';

import { FormsModule } from '@angular/forms';
import { MainSecComponent } from '../components/main-sec/main-sec.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: MainSecComponent}
    ])
  ],
  declarations: [
    ChatDialogComponent
  ],
  exports: [ ChatDialogComponent ],
  providers: [ChatService]
})
export class ChatModule { }
