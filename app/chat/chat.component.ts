import { Component } from '@angular/core';
import { ChatService, User, Message } from './chat.service';
 
@Component({
  selector: 'tc-chat',
  styleUrls: ['chat.component.css'],
  templateUrl: 'chat.component.html',
  providers: [ChatService]
})
export class ChatComponent {
  public me: User;
  public other: User;
  public messages: Array<Message>;
 
  constructor(private chatService: ChatService) {
    const chat = chatService.getChat();
 
    this.me = chat.participants.me;
    this.other = chat.participants.other;
    this.messages = chat.messages;
  }
}