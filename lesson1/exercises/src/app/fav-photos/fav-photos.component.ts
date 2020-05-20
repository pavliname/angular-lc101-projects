import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photos/Images';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSuZiMHDQ15UKGw5JX88RyK-3kkbR08HbIIQ8K_Z3yuBjSG-ldR&usqp=CAU';
  image3 = 'https://www.cukrarskala.cz/wp-content/uploads/sites/7/2017/12/cat-dorty-a-zakusky.jpg';

  constructor() { }

  ngOnInit() {
  }

}