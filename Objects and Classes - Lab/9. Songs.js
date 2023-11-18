function findSong(arr){
    class Song {
        constructor(type,name,time){
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }
    let n = arr.shift();
    let type = arr.pop();
    let songs = [];
    for(let i = 0; i < n; i++){
        let [type,name,time] = arr[i].split("_");
        songs.push(new Song(type,name,time));
        
    }
    if(type === `all`){
        songs.forEach(s =>{
            console.log(s.name);
        })
    } else {
        songs.filter( s => s.type === type).forEach(s =>{
            console.log(s.name);
        })
    }
}

findSong([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    
    );