import { Component, OnInit } from '@angular/core';
import { Game } from 'assets/service/Game';
import * as moment from 'moment';

@Component({
    selector: 'icons-cmp',
    moduleId: module.id,
    templateUrl: 'games.component.html'
})

export class GameComponent implements OnInit {
    lstGame: Game[];
    ngOnInit(): void {
        this.lstGame = [
            {
                id: "1",
                name: "LOL",
                releaseDate: "28-05-2022",
                price: 14,
                platform: "window 10",
                developers: "Riot",
                publisher: "Riot",
                type: "Moba"
            },
            {
                id: "2",
                name: "Dota",
                releaseDate: "28-05-2022",
                price: 14,
                platform: "window 10",
                developers: "Riot",
                publisher: "Riot",
                type: "Moba"
            },
            {
                id: "3",
                name: "Warcraft",
                releaseDate: "28-05-2022",
                price: 14,
                platform: "window 10",
                developers: "Riot",
                publisher: "Riot",
                type: "Moba"
            },
        ]
    }

}
