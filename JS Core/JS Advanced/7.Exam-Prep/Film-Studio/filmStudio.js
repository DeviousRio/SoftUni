let expect = require('chai').expect;
let assert = require('chai').assert;

class FilmStudio {

    constructor(studioName) {
        this.name = studioName;
        this.films = [];
    }

    casting(actor, role) {
        let isTheActorIsUnemployed = true;
        let output;

        if (this.films.length) {

            for (let f of this.films) {

                let roles = f.filmRoles.filter((r) => r.role === role);

                if (roles.length) {
                    let filmIndex = this.films.indexOf(f);
                    let wantedRole = this.films[filmIndex].filmRoles.filter((fR) => fR.role === role)[0];
                    let roleIndex = this.films[filmIndex].filmRoles.indexOf(wantedRole);

                    this.films[filmIndex].filmRoles[roleIndex].actor = actor;
                    isTheActorIsUnemployed = false;
                    output = `You got the job! Mr. ${actor} you are next ${role} in the ${f.filmName}. Congratz!`;
                    break;
                }
            }

            if (isTheActorIsUnemployed) {
                output = `${actor}, we cannot find a ${role} role...`;
            }

        } else {
            output = `There are no films yet in ${this.name}.`;
        }

        return output;
    }

    makeMovie(filmName, roles) {

        if (arguments.length === 2) {

            let firstArgIsString = typeof arguments[0] === 'string';
            let secondArgIsArray = arguments[1] instanceof Array;

            if (firstArgIsString && secondArgIsArray) {
                let findedFilms = this.films.filter((f) => f.filmName.includes(filmName));

                let filmRoles = roles.reduce((acc, cur) => {
                    let curFilmRole = {
                        role: cur,
                        actor: false
                    };
                    acc.push(curFilmRole);
                    return acc;
                }, []);

                let film = {
                    filmName,
                    filmRoles
                };

                if (findedFilms.length > 0) {
                    film.filmName += ` ${++findedFilms.length}`;
                }

                this.films.push(film);
                return film;
            } else {
                throw ('Invalid arguments')
            }

        } else {
            throw ('Invalid arguments count')
        }
    }

    lookForProducer(film) {

        let f = this.films.filter((f) => f.filmName === film)[0];
        let output;

        if (f) {
            output = `Film name: ${f.filmName}\n`;
            output += 'Cast:\n';
            Object.keys(f.filmRoles).forEach((role) => {
                output += `${f.filmRoles[role].actor} as ${f.filmRoles[role].role}\n`;
            });
        } else {
            throw new Error(`${film} do not exist yet, but we need the money...`)
        }

        return output;
    }
}




describe('Film studio test', function () {
    describe('Constructor test', function () {
        it('Should contain string parameter representing film studio name', function () {
            let filmStudio = new FilmStudio('SU-Studio');
            expect(filmStudio.name).to.equal('SU-Studio');
        });

        it('Should contain empty array', function () {
            let filmStudio = new FilmStudio('SU-Studio');
            assert.isEmpty(filmStudio.films);
        });

        it('Should return undefined with no input', function () {
            let filmStudio = new FilmStudio();
            expect(filmStudio.name).to.equal(undefined);
        });
    });

    describe('Function makeMovie() test', function () {
        it('With no parameters should throw error', function () {
            let filmStudio = new FilmStudio();
            assert.throw(() => filmStudio.makeMovie(), 'Invalid arguments count');
        });

        it('With only first parameter should throw error', function () {
            let filmStudio = new FilmStudio();
            assert.throw(() => filmStudio.makeMovie('The Avengers'), 'Invalid arguments count');
        });

        it('With only second parameter should throw error', function () {
            let filmStudio = new FilmStudio();
            assert.throw(() => filmStudio.makeMovie(['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']), 'Invalid arguments count');
        });

        it('With invalid first parameter should throw error', function () {
            let filmStudio = new FilmStudio();
            assert.throw(() => filmStudio.makeMovie(5, ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']), 'Invalid arguments');
            assert.throw(() => filmStudio.makeMovie(5.5, ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']), 'Invalid arguments');
            assert.throw(() => filmStudio.makeMovie(true, ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']), 'Invalid arguments');
            assert.throw(() => filmStudio.makeMovie(false, ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']), 'Invalid arguments');
            assert.throw(() => filmStudio.makeMovie([], ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']), 'Invalid arguments');
            assert.throw(() => filmStudio.makeMovie({}, ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']), 'Invalid arguments');
        });

        it('With invalid second parameter should throw error', function () {
            let filmStudio = new FilmStudio();
            assert.throw(() => filmStudio.makeMovie('The Avengers', 5), 'Invalid arguments');
            assert.throw(() => filmStudio.makeMovie('The Avengers', 5.5), 'Invalid arguments');
            assert.throw(() => filmStudio.makeMovie('The Avengers', true), 'Invalid arguments');
            assert.throw(() => filmStudio.makeMovie('The Avengers', false), 'Invalid arguments');
            assert.throw(() => filmStudio.makeMovie('The Avengers', {}), 'Invalid arguments');
            assert.throw(() => filmStudio.makeMovie('The Avengers', 'Pesho'), 'Invalid arguments');
        });
    });

    describe('Function casting() test', function () {
        it('With no movie added should return message', function () {
            let filmStudio = new FilmStudio('SU-Studio');
            expect(filmStudio.casting('Pesho', 'Hulk')).to.equal(`There are no films yet in SU-Studio.`);
        });

        it('With added movie but no wanted role', function () {
            let filmStudio = new FilmStudio('SU-Studio');
            filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']);
            expect(filmStudio.casting('Pesho', 'Spider')).to.equal(`Pesho, we cannot find a Spider role...`);
        });

        it('With added movie and wanted role', function () {
            let filmStudio = new FilmStudio('SU-Studio');
            filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Spider', 'Arrow guy']);
            expect(filmStudio.casting('Pesho', 'Spider')).to.equal('You got the job! Mr. Pesho you are next Spider in the The Avengers. Congratz!');
        });

        it('With added movie but with no actor and role', function () {
            let filmStudio = new FilmStudio('SU-Studio');
            filmStudio.makeMovie('The Avengers', ['Thor']);
            expect(filmStudio.casting()).to.equal('undefined, we cannot find a undefined role...');
        });
    });

    describe('Function lookForProducer() test', function () {
        it('With no added films should throw error', function () {
            let filmStudio = new FilmStudio('SU-Studio');
            assert.throw(() => filmStudio.lookForProducer('Beer movie'), 'Beer movie do not exist yet, but we need the money...')
        });

        it('Return and print correct result', function () {
            let filmStudio = new FilmStudio('SU-Studio');
            filmStudio.makeMovie('The Avengers', ['Thor']);
            let result = 'Film name: The Avengers\nCast:\nfalse as Thor\n';
            expect(filmStudio.lookForProducer('The Avengers')).to.equal(result);
        });
    });
});