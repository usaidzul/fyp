import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-showcar',
  templateUrl: './showcar.page.html',
  styleUrls: ['./showcar.page.scss'],
})
export class ShowcarPage implements OnInit {
  noPlate: string;
  model: string;
  id: number;
  constructor(
  	private router: Router,
  	private postPvdr: PostProvider,
  	private actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  	this.actRoute.params.subscribe((data: any) =>{
      this.id = data.id;
      this.noPlate = data.noPlate;
  		this.model = data.model;
  		console.log(data);
  	});
  }

}
