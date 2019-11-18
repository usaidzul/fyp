import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.page.html',
  styleUrls: ['./addcar.page.scss'],
})
export class AddcarPage implements OnInit {
  noPlate: string = "";
  model: string = "";
  user_id = "";
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
		this.noPlate = data.noPlate;
		this.model = data.name;
		this.user_id = sessionStorage.getItem('id');
  		//this.desc_customer = data.desc;
  		console.log(data);
  	});
  }

  createdProses(){
  	return new Promise(resolve => {
  		let body = {
			aksi : 'add',
			noPlate : this.noPlate,
			model : this.model,
			user_id: sessionStorage.getItem('id'), 
  			//desc_customer : this.desc_customer,
  		};

  		this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
			  this.router.navigate(['/car']);
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
			noPlate : this.noPlate,
  			model : this.model,
  			//desc_customer : this.desc_customer,
  		};

  		this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
  			this.router.navigate(['/car']);
  			console.log('OK');
  		});
  	});

  }

}
