import { Component, OnInit } from '@angular/core';

interface Country {
  id: number;
  country: string;
  language: string;
  capital: string;
  knownFor: string[];
}

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss'],
})
export class RandomComponent implements OnInit {
  item!: Country;

  constructor() {}

  ngOnInit(): void {
    this.getIdVal();
  }

  getIdVal() {
    this.item = this.items[Math.floor(Math.random() * this.items.length)];
    // alert(JSON.stringify(this.item ))
    return this.item;
  }



  items = [
    {
      id: 1,
      country: 'England',
      language: 'english',
      capital: 'London',
      knownFor: [
        'David Beckham',
        'Fish and Chips',
        'Big Ben',
        'Red Buses',
        'black cabs',
        'The Beatles',
        'tea',
      ],
    },
    {
      id: 2,
      country: 'Romania',
      language: 'romanian',
      capital: 'Bucuresti',
      knownFor: [
        'The Carpathian mountains',
        'Constantin Brancusi',
        'wine',
        'salt mines',
        'George Enescu',
        'medieval fortresses',
        'Dacia cars',
        'Dracula',
        'stuffed cabbage leaves',
        'Nadia Comaneci',
        'The Black Sea',
        'Gheorghe Hagi',
        'sunflower fields',
      ],
    },
    {
      id: 3,
      country: 'Denmark',
      language: 'danish',
      capital: 'Copenhagen',
      knownFor: [
        'Salty Licorice',
        'Hans Christian Andersen',
        'Lego',
        'Bicycle Culture',
        'Hot Dogs',
        'The Royal Family',
        'Tivoli Gardens',
      ],
    },
    {
      id: 4,
      country: 'Spain',
      language: 'spanish',
      capital: 'Madrid',
      knownFor: [
        'Paella',
        'Pintxo',
        'Tapas',
        'The Sagrada Familia',
        'Flamenco',
        'Soccer',
        'Siestas',
      ],
    },
    {
      id: 5,
      country: 'USA',
      language: 'english',
      capital: 'Washinton D.C.',
      knownFor: [
        'The Grand Canyon',
        'Hollywood',
        'Baseball',
        'rock-n-roll',
        'Silicon Valley',
        'Walt Disney',
        'Niagara Falls',
        'The Statue of Liberty',
        'Las Vegas',
        'Wall Street',
        'The Golden Gate Bridge',
        'Dunkin doughnuts coffee',
        'KFC',
        'Apple',
        'Starbucks',
        'The White House',
        ' Apple Pie',
        'Peanut Butter and Jelly',
        'The CIA',
        'Black Friday',
        '4th of July',
      ],
    },
    {
      id: 6,
      country: 'Sweden',
      language: 'swedish',
      capital: 'Stockholm',
      knownFor: [
        'ABBA Museum - Stockholm',
        'Swedish meatballs',
        'Spotify',
        'Göteborg',
        'Volvo',
        'IKEA',
        'Roxette',
        'H&M',
        'Ice Hotels',
        'Alfred Nobel',
        'Minecraft',
      ],
    },
    {
      id: 7,
      country: 'Norway',
      language: 'norvegian',
      capital: 'Oslo',
      knownFor: [
        'fjords',
        'oil production',
        'Laerdal Tunnel',
        'Trolltunga',
        'The Northern Lights',
        'Beerenberg Volcano',
        'The Bouvet Island',
        'Ostehøvel',
        'Rosemaling',
        'Norwegian salmon',
        'Edvard Munch',
      ],
    },
    {
      id: 8,
      country: 'Moldova',
      language: 'romanian',
      capital: 'Chisinau',
      knownFor: [
        'Exceptional wine',
        'Orheiul Vechi open-air monastic complex',
        'Transnistria',
        'Traditional cuisine',
        'Cognac',
        'The Castle Mimi architectural masterpiece',
        'Dendrarium Park',
        'Soroca Fortress',
        'Botanical Garden Of The Academy Of Sciences Of Moldova',
      ],
    },
    {
      id: 9,
      country: 'Bulgaria',
      language: 'bulgarian',
      capital: 'Sofia',
      knownFor: [
        'Lavender',
        'Cyrillic alphabet',
        'Thracian tribes',
        'Rose oil',
        'UNESCO World Heritage Sites',
        'Banitsa- spiral-shaped pastry',
        'Confusing head gestures' 
      ],
    },
    {
      id: 10,
      country: 'Andorra',
      language: 'catalan',
      capital: 'Andorra la Vella',
      knownFor: [
        'excellent ski resorts',
        'The highest capital in Europe',
        'co-principality',
        'Longevity - the 8th highest life expectancy in the world',
        'Oldest Parliament in Europe - since 1419',
        'Ecological Nation - Andorra is 90% natural',
        'World Heritage Sites - About 10% of Andorra',
        'No Armies - Andorra does not believe in war.'
      ],
    },
  ];

}
