import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  majors = [
    new Major('publish', '我的发布', '/assets/icon/news.svg'),
    new Major('like','我喜欢的', '/assets/icon/like.svg'),
    new Major('history', '历史记录', '/assets/icon/address-book.svg'),
    new Major('collection', '我的收藏', '/assets/icon/folder.svg')
  ]
}

class Major {
  constructor(
    public name: string,
    public title: string,
    public imgUrl: string) { }
}
