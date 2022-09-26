// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map( eachElement => eachElement.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    
    if (moviesArray.length === 0) {
        return 0;
    }

    let arrayOfMovies = moviesArray.filter( (eachElement) => {
        return eachElement.director === "Steven Spielberg" && eachElement.genre.includes("Drama");
    });

    return arrayOfMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (moviesArray.length === 0) {
        return 0;
    }

    // ? Este bucle daba 4 valores por consola, entiendo que porque cuando se encuentra un undefined
    // ? hace un return del acc
    let sumScores = moviesArray.reduce( (acc, eachElement) => {
        if (eachElement.score === undefined) {
            return acc;
        } else {
            return acc + eachElement.score;
        }
    }, 0);

    let avgScores = sumScores / moviesArray.length;

    // ? Nos ha salido porque nos ha dado por poner Number al final, pero no sé por qué no se podía usar
    // ? acc + Number(eachElement.score) dentro del bucle por ejemplo...
    return Number( avgScores.toFixed(2) );
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    let filteredDramaMovies = moviesArray.filter( (eachMovie) => {
        return eachMovie.genre.includes("Drama");
    })

    // ? Si después de este if metía todo lo de sumScores en un else, no me salía
    if (filteredDramaMovies.length === 0) {
        return 0; 
    } 

    let sumScores = filteredDramaMovies.reduce( (acc, eachElement) => {
        if (eachElement.score === undefined) {
            return acc;
        } else {
            return acc + eachElement.score;
        }
    }, 0);

    let avgScores = sumScores / filteredDramaMovies.length;

    return Number( avgScores.toFixed(2) );
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let clonedArr = structuredClone(moviesArray);

    let newOrderedArr = clonedArr.sort( (movie1, movie2) => {
        if (movie1.year < movie2.year) {
            return -1;
        } else if (movie1.year > movie2.year) {
            return 1;
        } else {
            let upperLetterMovie1 = movie1.title.toUpperCase();
            let upperLetterMovie2 = movie2.title.toUpperCase();

            if (upperLetterMovie1 < upperLetterMovie2) {
                return -1;
            } else if (upperLetterMovie1 > upperLetterMovie2) {
                return 1;
            } else {
                return 0;
            }
        }
    })

    return newOrderedArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    let titlesArray = moviesArray.map( (eachElement) => {
        return eachElement.title;
    });

    let alphabeticalOrderedTitlesArray = titlesArray.sort( (movie1, movie2) => {
        let upperLetterMovie1 = movie1.toUpperCase();
        let upperLetterMovie2 = movie2.toUpperCase();

        if (movie1 < movie2) {
            return -1;
        } else if (movie1 > movie2) {
            return 1;
        } else {
            return 0;
        }
    });

    // ? no sé qué pasaría si el array tiene length menor que 20, entiendo que slice para antes de llegar a 20
    // ? y es preferible esta sintaxis a hacerle un bucle en función de la longitud...
    let shorterOrderedArray = alphabeticalOrderedTitlesArray.slice(0, 20);

    return shorterOrderedArray;
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let clonedArray = structuredClone(moviesArray)
    
    clonedArray.forEach( eachElement => {
        eachElement.duration = Number(eachElement.duration[0]) * 60 + Number(eachElement.duration.slice(3,5))
    });

    return clonedArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    
}
