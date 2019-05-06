import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'test-angular';
  active_index = 1;
  testimony = [
    {
      name: "Gohan Parningotan",
      university: "Universitas Indonesia",
      content: "CICIL Jobs membantu saya untuk mendapatkan penghasilan tambahan, karena biaya cicilan saya besar jadi komisi yang diberikan oleh CICIL Jobs sangat berarti buat saya.",
      photo_URL: "https://i.pravatar.cc/100"
    },
    {
      name: "Andika Wiguna",
      university: "Universitas Gunadarma",
      content: "Dulu saya harus super hemat dalam mengelola keuangan bulanan saya, sekarang bisa lebih longgar dan mandiri.",
      photo_URL: "https://i.pravatar.cc/110"
    },
    {
      name: "Ricardo Saputra",
      university: "Universitas Telkom",
      content: "Tidak enak jika kita selalu bergantung dengan uang dari orang tua, CICIL Jobs membuat saya menjadi mahasiswa yang independen dalam hal uang. Saya mencicil dan membayarnya dengan uang jeri payah saya sendiri",
      photo_URL: "https://i.pravatar.cc/120"
    }
  ];


  counter_testimony(counter) {
    if(counter == -1){
      if(this.active_index == 0) {
        this.active_index = this.testimony.length - 1;
      } else {
        this.active_index += -1;
      }
    } else {
      if(this.active_index == this.testimony.length - 1) {
        this.active_index = 0;
      } else {
        this.active_index += 1;
      }
    }
  }
}
