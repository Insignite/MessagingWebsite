import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { MessageService } from 'src/app/services/message.service';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import io from 'socket.io-client';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  receiverName: string;
  user: any;
  message: string;
  receiverData: any;
  messageArray = [];
  firstNAME: string;
  lastNAME: string;
  socket: any;

  constructor(
    private tokenService: TokenService,
    private msgService: MessageService,
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {
    this.socket = io('http://localhost:3000');
  }

  ngOnInit() {
    // most crucial for the current payload
    this.user = this.tokenService.GetPayload();
    this.route.params.subscribe(params => {
      this.receiverName = params.name;
      this.GetUserById(this.receiverName);
      this.socket.on('refreshPage', () => {
        this.GetUserById(this.receiverName);
      });
    });
  }

  GetUserById(id) {
    this.usersService.GetUserByID(id).subscribe(
      data => {
        this.receiverData = data.result;
        this.firstNAME = data.result.firstname;
        this.lastNAME = data.result.lastname;

        this.GetMessages(this.user._id, data.result._id);
      },
      err => console.log(err)
    );
  }

  GetMessages(senderId, receiverId) {
    this.msgService.GetAllMessages(senderId, receiverId).subscribe(data => {
      this.messageArray = data.messages.message;
    });
  }

  SendMessage() {
    if (this.message) {
      this.msgService
        .SendMessage(this.user._id, this.receiverData._id, this.receiverData.username, this.message)
        .subscribe(data => {
          this.socket.emit('refresh', {});
          this.message = '';
        });
    }
  }
}
