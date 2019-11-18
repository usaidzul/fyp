import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addservice',
  templateUrl: './addservice.page.html',
  styleUrls: ['./addservice.page.scss'],
})
export class AddservicePage implements OnInit {
  type: string = "";
  //model: string = "";
  car_id = "";
  //desc_customer: string = "";
  id: number;
  constructor(
  	private postPvdr: PostProvider,
  	private router: Router,
  	private actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  	this.actRoute.params.subscribe((data: any) =>{
		this.id = data.id;
		this.type = data.type;
		//this.model = data.name;
		this.car_id = sessionStorage.getItem('id');
  		//this.desc_customer = data.desc;
  		console.log(data);
  	});
  }

  createdProses(){
  	return new Promise(resolve => {
  		let body = {
			aksi : 'add',
			type : this.type,
			//model : this.model,
			car_id: sessionStorage.getItem('id'), 
  			//desc_customer : this.desc_customer,
  		};

  		this.postPvdr.postData(body, 'proses-api2.php').subscribe(data => {
			  this.router.navigate(['/service']);
			  console.log(body)
  			console.log('OK');
  		});
  	});

  }

  updateProses(){
  	return new Promise(resolve => {
  		let body = {
  			aksi : 'update',
			  car_id : this.id,
			  type : this.type,
  			//model : this.model,
  			//desc_customer : this.desc_customer,
  		};

  		this.postPvdr.postData(body, 'proses-api2.php').subscribe(data => {
  			this.router.navigate(['/service']);
  			console.log('OK');
  		});
  	});

  }

}
