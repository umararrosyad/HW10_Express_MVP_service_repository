const Movies_repository = require('../repositories/movies_repository')
class Movies_service{

    static async getAll(req){
        try{
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const offset = (page - 1) * limit;
            const data = Movies_repository.getAll({limit,offset})
            return data
        }catch(error){
            throw error
        }
        
    }
    static async getOne(id){
        try{
            const data = await Movies_repository.getOne(id)
            if(!data){
                throw ({name : "notFound"})
            }
            return data
        }catch(error){
            throw error
        }
    }

    static async update(movie, args){
        try{
            const {title, genres, year} = args
            const data = await Movies_repository.update(movie, {title, genres, year, updatedAt : new Date()})
            return data
        }catch(error){
            throw error
        }
    }

    static async create(args){
        try{
            const {title, genres, year} = args
            if(!title || !genres || !year){
                throw ({name : 'nullParameter'})
            }
            const data = await Movies_repository.create(
                {
                    title,
                    genres,
                    year,
                    createdAt : new Date(),
                    updatedAt : new Date()
                }
            )
            return data
        }catch(error){
            throw error
        }
    }

    static async delete(movie, id){
        try{
            const data = await Movies_repository.delete(movie,id)
            return data
        }catch(error){
            throw error
        }
    }


    static async handleUpload(movie, req){
        try{
            if(!req.file){
                throw ({name : "fileNotFound"})
            }    
            const {filename} = req.file;
            const fileUrl = `${req.protocol}://${req.get('host')}/static/${filename}`
            const data = await Movies_repository.handleUpload(movie,fileUrl)
            return data
        }catch(error){
            throw error
        }
    }
    
}


module.exports = Movies_service