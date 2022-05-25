
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router} from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-testrout',
  templateUrl: './testrout.component.html',
  styleUrls: ['./testrout.component.css']
})
export class TestroutComponent implements OnInit {

  constructor(private router: Router ) { }
  goToPage(pagename: string): void {
    this.router.navigate([`${pagename}`]);
  }

  ngOnInit(): void {

  }
  slideArray: any = [
    {
      img: "../assets/img/pfp1.jpg",
      name: "Maged",
      date: "13.05.2020",
      content: "I like that I feel like I am making a difference in someone's life. My student feels like he is learning and more able to meet his goals. I also love that the schedule is flexible."
    },
    {
      img: "../assets/img/pfp2.jpg",
      name: "Adham",
      date: "18.06.2021",
      content: "I like that I feel like I am making a difference in someone's life. My student feels like he is learning and more able to meet his goals. I also love that the schedule is flexible."
    }, {
      img: "../assets/img/pfp3.jpg",
      name: "Hazem",
      date: "11.05.2021",
      content: "I like that I feel like I am making a difference in someone's life. My student feels like he is learning and more able to meet his goals. I also love that the schedule is flexible."
    }, {
      img: "../assets/img/pfp4.jpg",
      name: "Ibrahim",
      date: "12.08.2022",
      content: "I like that I feel like I am making a difference in someone's life. My student feels like he is learning and more able to meet his goals. I also love that the schedule is flexible."
    }, {
      img: "../assets/img/pfp5.jpg",
      name: "Maha",
      date: "1.12.2021",
      content: "I like that I feel like I am making a difference in someone's life. My student feels like he is learning and more able to meet his goals. I also love that the schedule is flexible."
    }, {
      img: "../assets/img/pfp6.jpg",
      name: "Fares",
      date: "1.03.2021",
      content: "I like that I feel like I am making a difference in someone's life. My student feels like he is learning and more able to meet his goals. I also love that the schedule is flexible."
    }]
  @ViewChild('slide') slide: any;
  arrIndex = this.slideArray.length - 1;
  cardHight = 0;
  next() {
    if (this.arrIndex != 0) {
      this.arrIndex--;
      this.cardHight = this.cardHight - 240;
      this.slide.nativeElement.style.top = this.cardHight + "px";
    }
  }
  back() {
    if (this.arrIndex != this.slideArray.length - 1) {
      this.arrIndex++;
      this.cardHight = this.cardHight + 240;
      this.slide.nativeElement.style.top = this.cardHight + "px";
    }
  }

}