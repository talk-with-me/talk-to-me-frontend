import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LandingComponent} from './landing/landing.component';
import {ChatComponent} from './chat/chat.component';
import { MsgItemComponent } from './chat/msg-item/msg-item.component';
import { SendChatComponent } from './chat/send-chat/send-chat.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ChatComponent,
    MsgItemComponent,
    SendChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
