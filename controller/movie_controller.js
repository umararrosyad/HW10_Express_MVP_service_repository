const Movies_service = require('../services/movies_service')

class MovieController {
    static async getAll(req,res,next){
        try{
            const Movie = await Movies_service.getAll(req)
            res.status(200).json(Movie)
        }
        catch(error){
            next(error)
        }
    }

    static async getOne(req,res,next){
        try{
            const {id} = req.params
            const movie = await Movies_service.getOne(id)
            res.status(200).json(movie)
        }
        catch(error){
            next(error)
        }
    }

    static async create(req,res,next){
        try{
           
            const newMovie = await Movies_service.create(req.body)
            res.status(201).json(newMovie)
        }
        catch (error){
            next(error)
        }
    }

    static async update(req,res,next){
        try{
            const {id} = req.params
            const Movie = await Movies_service.getOne(id)
            const updateMovie = await Movies_service.update(Movie,req.body)
            res.status(200).json(updateMovie)
        }
        catch(error){
            next(error)
        }
    }

    static async delete(req,res,next){
        try{
            const {id} = req.params
            const Movie = await Movies_service.getOne(id)
            await Movies_service.delete(Movie,id)
            res.status(200).json({massage : 'Berhasil menghapus Movie'})
        }
        catch(error){
            next(error)
        }
    }
    static async handleUpload(req,res,next){
        try{
            const {id} = req.params
            const Movie = await Movies_service.getOne(id)
            
            const updateMovie = await Movies_service.handleUpload(Movie, req)
            res.status(200).json(updateMovie)
        }
        catch(error){
            next(error)
        }
    }
}


module.exports = MovieController