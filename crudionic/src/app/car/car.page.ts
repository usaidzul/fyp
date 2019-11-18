import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-provider';
import { Router } from '@angular/router';
import { Storage } from '@ionic/Storage';

@Component({
  selector: 'app-car',
  templateUrl: './car.page.html',
  styleUrls: ['./car.page.scss'],
})
export class CarPage implements OnInit {

  anggota: any;
  name: string;
  
  car: any = [];
  limit: number = 13; // LIMIT GET PERDATA
  start: number = 0;
  constructor(
  	private router: Router,
  	private postPvdr: PostProvider,
    private storage: Storage,
    public toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.storage.get('session_storage').then((res)=>{
      this.anggota = res;
      this.name = this.anggota.name;
      console.log(res);
    });

  	this.car = [];
  	this.start = 0;
  	this.loadCar();
  }

  addCar(){
  	this.router.navigate(['/addcar']);
  }

  updateCar(id,noPlate,model){
  	this.router.navigate(['/addcar/' + id + '/' + noPlate + '/' + model ]);
  }

  showCar(id,noPlate,model){
  	this.router.navigate(['/showcar/' + id + '/' + noPlate + '/' + model ]);
  }

  doRefresh(event){
  	setTimeout(() =>{
  		this.ionViewWillEnter();
  		event.target.complete();
  	}, 500);
  }

  loadData(event:any){
  	this.start += this.limit;
  	setTimeout(() =>{
  	this.loadCar().then(()=>{
  		event.target.complete();
  	});
  	}, 500);
  }

  delCar(id){

  	let body = {
  			aksi : 'delete',
  			car_id : id
  		};

  		this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
  			this.ionViewWillEnter();
  		});

  }

  loadCar(){
  	return new Promise(resolve => {
  		let body = {
  			aksi : 'getdata',
  			limit : this.limit,
  			start : this.start,
  		};

  		this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
  			for(let car of data.result){
  				this.car.push(car);
  			}
  			resolve(true);
  		});
  	});
  }

  async prosesLogout(){
    this.storage.clear();
    this.router.navigate(['/login']);
    const toast = await this.toastCtrl.create({
        message: 'logout succesful',
        duration: 3000
      });
    toast.present();
  }

}
