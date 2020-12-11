import React, { useState, useEffect } from 'react'
import Layout from './components/layout'
import Card from './components/card'

const Movies = () => {
    
    const [movie, setMovie] = useState('');
    const [datos, setDatos] = useState([]);

    const apiKey = '8e4bb1a7';
    const Movieurl = ` http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&s=${movie}&type=movie`;

    const getName = (event) => {
        setMovie(event.target.value);
    }

    const getMovie = async (event) => {
        event.preventDefault();
        await fetch(Movieurl)
            .then(res => res.json())
            .then(dato => {
                setDatos(dato.Search);
                console.log(datos);
            });
    }

    return (
        <Layout>
            <Card>
                <h1 className="display-2 text-center font-weight-bold">Movies</h1>

                <form>
                    <div className="input-group mb-2 mr-sm-2">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                                    <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                                </svg>
                            </div>
                        </div>
                        <input type="text" className="form-control" value={movie} onChange={getName} />
                        <button type="submit" onClick={getMovie} className="btn btn-primary">Search</button>
                    </div>
                </form>

                <div className="container my-5">
                    <div className="row">
                        {datos.map((movie) => (
                            <div className="col-md-6" key={movie.imdbID}>
                                <div className="card mb-3">
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img className="img-fluid" src={movie.Poster} alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">Title: {movie.Title} </h5>
                                                <p className="card-text"> Year: {movie.Year} </p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </Card>
        </Layout>
    )
}

export default Movies
