import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-provider';
import { Router } from '@angular/router';
import { Storage } from '@ionic/Storage';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  name: string = "";
  password: string = "";
  confirm_password: string = "";
  phoneNo: string = "";
  address: string = "";
  email: string = "";
  constructor(
  	private router: Router,
  	private postPvdr: PostProvider,
  	private storage: Storage,
  	public toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  async prosesRegister(){
    // validation done
    if(this.name==""){
        const toast = await this.toastCtrl.create({
          message: 'Username is required',
          duration: 3000
        });
        toast.present();
    }else if(this.password==""){
        const toast = await this.toastCtrl.create({
          message: 'Password is required',
          duration: 3000
        });
        toast.present();
    }else if(this.password!=this.confirm_password){
        const toast = await this.toastCtrl.create({
          message: 'Invalid password',
          duration: 3000
        });
        toast.present();
    }else if(this.phoneNo==""){
        const toast = await this.toastCtrl.create({
          message: 'Phone Number is required',
          duration: 3000
        });
        toast.present();    
    }else if(this.address==""){
        const toast = await this.toastCtrl.create({
          message: 'Address is required',
          duration: 3000
        });
        toast.present(); 
    }else if(this.email==""){
        const toast = await this.toastCtrl.create({
          message: 'Email is required',
          duration: 3000
        });
        toast.present();  
  }else{

      let body = {
        name: this.name,
        password: this.password,
        phoneNo: this.phoneNo,
        address: this.address,
        email: this.email,
        aksi: 'register'
      };

      this.postPvdr.postData(body, 'proses-api.php').subscribe(async data =>{
        var alertpesan = data.msg;
        if(data.success){
          this.router.navigate(['/login']);
          const toast = await this.toastCtrl.create({
            message: 'Register succesful',
            duration: 3000
          });
          toast.present();
        }else{
          const toast = await this.toastCtrl.create({
            message: alertpesan,
            duration: 3000
          });
          toast.present();
        }
      });

    }
  
  }

  formLogin(){
  	this.router.navigate(['/login']);
  }

}
