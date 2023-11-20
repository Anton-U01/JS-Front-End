function solve(arr){
    let movies = [];
    arr.forEach(element => {
        if(element.includes(`addMovie`)){
            let name = element.split(`addMovie `)[1];
            let movie = {
                name
            };
            movies.push(movie);
        } else if (element.includes(`directedBy`)){
            let name = element.split(` directedBy `)[0];
            
            let movie = movies.find( (m) => m.name === name);
            let director = element.split(` directedBy `)[1];
            if(movie){
                movie[`director`] = director;
            }
        } else if (element.includes(`onDate`)){
            let name = element.split(` onDate `)[0];
            
            let movie = movies.find( (m) => m.name === name);
            let date = element.split(` onDate `)[1];
            if(movie){
                movie[`date`] = date;
            } 
        }
    });
    movies.forEach( m => {
        if(m.name && m.director && m.date){
            console.log(JSON.stringify(m));
        }
    })
}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    );