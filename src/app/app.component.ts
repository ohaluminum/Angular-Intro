import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {
  query: string;
  artists: any[];
  currentArtist: any;

  showArtist(artist: any) {
    this.query = artist.name;
    this.currentArtist = artist;
  }
  
  constructor(private http: HttpClient) {
    this.query = '';
    this.artists = [];
  }

  ngOnInit(): void {
    this.http.get<any[]>('../assets/data.json').subscribe(
      data => {
        this.artists = data;
      }
    )
  }
}
