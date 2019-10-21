export interface MovieInterface {
    title: string,
    releaseYear: string,
    duration: string,
    rating: string,
    genre: string,
    director: string,
    writer: string,
    Actors?: string[],
    plot?: string,
    awards?: string,
    imageUrl: string,
    cover: string

}
// export interface MovieListInterface {
//     [{
//         title: string,
//         releaseYear: string,
//         duration: string,
//         rating: number,
//         imageUrl: string,
//     }]
//}
