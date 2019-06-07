let expect = require('chai').expect;
let assert = require('chai').assert;

class SoftUniFy {
    constructor() {
        this.allSongs = {};
    }

    downloadSong(artist, song, lyrics) {
        if (!this.allSongs[artist]) {
            this.allSongs[artist] = {
                rate: 0,
                votes: 0,
                songs: []
            }
        }

        this.allSongs[artist]['songs'].push(`${song} - ${lyrics}`);

        return this;
    }

    playSong(song) {
        let songArtists = Object.keys(this.allSongs).reduce((acc, cur) => {

            let songs = this.allSongs[cur]['songs']
                .filter((songInfo) => songInfo
                    .split(/ - /)[0] === song);

            if (songs.length > 0) {
                acc[cur] = songs;
            }

            return acc;
        }, {});

        let arr = Object.keys(songArtists);
        let output = "";

        if (arr.length > 0) {

            arr.forEach((artist) => {
                output += `${artist}:\n`;
                output += `${songArtists[artist].join('\n')}\n`;
            });

        } else {
            output = `You have not downloaded a ${song} song yet. Use SoftUniFy's function downloadSong() to change that!`
        }

        return output;
    }

    get songsList() {
        let songs = Object.values(this.allSongs)
            .map((v) => v['songs'])
            .reduce((acc, cur) => {
                return acc.concat(cur);
            }, []);

        let output;

        if (songs.length > 0) {
            output = songs.join('\n');
        } else {
            output = 'Your song list is empty';
        }

        return output;

    }

    rateArtist() {
        let artistExist = this.allSongs[arguments[0]];
        let output;

        if (artistExist) {

            if (arguments.length === 2) {
                artistExist['rate'] += +arguments[1];
                artistExist['votes'] += 1;
            }

            let currentRate = (+(artistExist['rate'] / artistExist['votes']).toFixed(2));
            isNaN(currentRate) ? output = 0 : output = currentRate;

        } else {
            output = `The ${arguments[0]} is not on your artist list.`
        }

        return output;
    }
}

describe('SoftUniFy', function () {
    describe('Constructor test', function () {
        it('All songs initialized in empty object', function () {
            let softUniFy = new SoftUniFy();
            assert.isEmpty(softUniFy.allSongs);
        });
    });

    describe('Download song test', function () {
        it('Add artist to allSongs', function () {
            let softUniFy = new SoftUniFy();
            let artist = 'Artist';
            let song = 'Song';
            let lyrics = 'Lyrics';

            softUniFy.downloadSong(artist, song, lyrics);
            assert.isTrue(softUniFy.allSongs.hasOwnProperty(artist));
        });

        it('Add song to allSongs', function () {
            let softUniFy = new SoftUniFy();
            let artist = 'Artist';
            let song = 'Song';
            let lyrics = 'Lyrics';

            softUniFy.downloadSong(artist, song, lyrics);
            assert.equal(softUniFy.allSongs[artist]['songs'].length, 1);
        });

        it('Default rate should be 0', function () {
            let softUniFy = new SoftUniFy();
            let artist = 'Artist';
            let song = 'Song';
            let lyrics = 'Lyrics';

            softUniFy.downloadSong(artist, song, lyrics);
            assert.equal(softUniFy.allSongs[artist]['rate'], 0);
        });

        it('Default votes should be 0', function () {
            let softUniFy = new SoftUniFy();
            let artist = 'Artist';
            let song = 'Song';
            let lyrics = 'Lyrics';

            softUniFy.downloadSong(artist, song, lyrics);
            assert.equal(softUniFy.allSongs[artist]['votes'], 0);
        });

        it('Add song in correct format', function () {
            let softUniFy = new SoftUniFy();
            let artist = 'Artist';
            let song = 'Song';
            let lyrics = 'Lyrics';

            softUniFy.downloadSong(artist, song, lyrics);
            let songs = softUniFy.allSongs[artist]['songs'];
            assert.isTrue(songs.indexOf(`${song} - ${lyrics}`) !== -1);
        });

        it('Add multiple songs', function () {
            let softUniFy = new SoftUniFy();
            let artist = 'Artist';
            let song = 'Song';
            let lyrics = 'Lyrics';

            softUniFy.downloadSong(artist, song, lyrics);
            softUniFy.downloadSong(artist, song, lyrics);
            softUniFy.downloadSong(artist, song, lyrics);

            let songs = softUniFy.allSongs[artist]['songs'];
            assert.equal(songs.length, 3);
        });
    });

    describe('Play song test', function () {
        it('With no downloaded song should return message', function () {
            let softUniFy = new SoftUniFy();
            let song = 'SongName';
            let message = `You have not downloaded a ${song} song yet. Use SoftUniFy's function downloadSong() to change that!`;;
            let result = softUniFy.playSong(song);
            assert.equal(result, message);
        });

        it('With no available song should return message', function () {
            let softUniFy = new SoftUniFy();
            let artist = 'ArtistName';
            let song = 'SongName';
            let lyrics = 'Lyrics';

            let songToPlay = 'SongToPlay';
            let message = `You have not downloaded a ${songToPlay} song yet. Use SoftUniFy's function downloadSong() to change that!`;

            softUniFy.downloadSong(artist, song, lyrics);
            let result = softUniFy.playSong(songToPlay);
            assert.equal(result, message);
        });

        it('With different artists', function () {
            let softUniFy = new SoftUniFy();
            let artist = 'ArtistName';
            let song = 'SongName';
            let lyrics = 'Lyrics';

            for (let i = 0; i < 5; i++) {
                softUniFy.downloadSong(artist + `${i}`, song + `${i}`, lyrics + `${i}`);
            }

            for (let i = 0; i < 5; i++) {
                let expected = `ArtistName${i}:\nSongName${i} - Lyrics${i}\n`;
                let result = softUniFy.playSong(song + `${i}`);
                assert.equal(result, expected);
            }
        });

        it('With multiple songs from one artist', function () {
            let softUniFy = new SoftUniFy();
            let artist = 'ArtistName';
            let song = 'SongName';
            let lyrics = 'Lyrics';

            for (let i = 0; i < 5; i++) {
                softUniFy.downloadSong(artist, song + `${i}`, lyrics + `${i}`);
            }
            
            for (let i = 0; i < 5; i++) {
                let expected = `ArtistName:\nSongName${i} - Lyrics${i}\n`;
                let result = softUniFy.playSong(song + `${i}`);
                assert.equal(result, expected);
            }
        });

        it('With multiple songs from multiple artists', function () {
            let softUniFy = new SoftUniFy();
            let artist = 'ArtistName';
            let song = 'SongName';
            let lyrics = 'Lyrics';

            let expected = '';
            for (let i = 0; i < 5; i++) {
                softUniFy.downloadSong(artist + `${i}`, song, lyrics + `${i}`);
                expected += `${artist + i}:\n${song} - ${lyrics + i}\n`;
            }

            let result = softUniFy.playSong(song);
            assert.equal(result, expected);
        });
    });

    describe('songList test', function () {
        it('With empty songList expect to return message', function () {
            let softUniFy = new SoftUniFy();
            let expectedMessage = 'Your song list is empty';
            let result = softUniFy.songsList;
            assert.equal(result, expectedMessage);
        });
    });

    describe('rateArtist test', function () {
        it('With multiple rate expect to return the correct result', function () {
            let softUniFy = new SoftUniFy();
            let artist = 'ArtistName';
            let song = 'SongName';
            let lyrics = 'Lyrics';

            softUniFy.downloadSong(artist, song, lyrics);
            let rate = 20;
            let expectedRate = rate;

            softUniFy.rateArtist(artist, rate);
            softUniFy.rateArtist(artist, rate);
            softUniFy.rateArtist(artist, rate);
            let result = softUniFy.rateArtist(artist, rate);
            assert.equal(result, expectedRate);
        });
    });
});