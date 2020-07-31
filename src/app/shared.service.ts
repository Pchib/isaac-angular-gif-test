import {Injectable} from '@angular/core'
import {BehaviorSubject}from 'rxjs'



@Injectable()
export class SharedService {
    private message = new BehaviorSubject('Gifs');
    sharedMessage = this.message.asObservable();
    constructor(){

    }

nextMessage(message){
    this.message.next(message)
}
}