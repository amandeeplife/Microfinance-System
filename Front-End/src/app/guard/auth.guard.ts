import {Injectable}from '@angular/core'
import {CanActivate,Router} from '@angular/router'
import {AuthService} from '../services/auth.service'
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
 
@Injectable()
export class AuthGuard implements CanActivate{
constructor(
    private router:Router,
    private authService: AuthService
){}
canActivate(){
     {
         console.log(this.authService.getToken()+"my tokendd")
        if(this.authService.getToken()==undefined){
            this.router.navigate(['/login'])
            return false;
        }
        else {
            return true;
        }
    }
}
}
