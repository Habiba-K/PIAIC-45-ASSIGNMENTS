// using function take argument and return the object

function make_album(artistName :string ,albumTitle : string, track? :number) : {artistname : string, albumtitle : string , track?: number}{
 
    let musicAlbum = {
            artistname : artistName ,
            albumtitle :  albumTitle,
            track,
    };
    if(track !== undefined){
     musicAlbum.track = track ; 
    }
    return musicAlbum;
}

let album1 =make_album('Artist1','Album1',);
console.log(album1);

let album2 =make_album('Artist2','Album2', 10);
console.log(album2);

let album3 =make_album('Artist3','Album3');
console.log(album3);