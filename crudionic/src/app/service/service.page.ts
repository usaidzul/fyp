import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-provider';
import { Router } from '@angular/router';
import { Storage } from '@ionic/Storage';

@Component({
  selector: 'app-service',
  templateUrl: './service.page.html',
  styleUrls: ['./service.page.scss'],
})
export class ServicePage implements OnInit {
  anggota: any;
  name: string;
  
  service: any = [];
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

  	this.service = [];
  	this.start = 0;
  	this.loadService();
  }

  addService(){
  	this.router.navigate(['/addservice']);
  }

  updateService(id,date,type){
  	this.router.navigate(['/addservice/' + id + '/' + date + '/' + type ]);
  }

  showService(id,date,type){
  	this.router.navigate(['/showservice/' + id + '/' + date + '/' + type ]);
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
  	this.loadService().then(()=>{
  		event.target.complete();
  	});
  	}, 500);
  }

  delService(id){

  	let body = {
  			aksi : 'delete',
  			service_id : id
  		};

  		this.postPvdr.postData(body, 'proses-api2.php').subscribe(data => {
  			this.ionViewWillEnter();
  		});

  }

  loadService(){
  	return new Promise(resolve => {
  		let body = {
  			aksi : 'getdata',
  			limit : this.limit,
  			start : this.start,
  		};

  		this.postPvdr.postData(body, 'proses-api2.php').subscribe(data => {
  			for(let service of data.result){
  				this.service.push(service);
  			}
  			resolve(true);
  		});
  	});
  }
}
