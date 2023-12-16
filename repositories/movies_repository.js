const {Movies} = require('../models')
class Movies_repository{

    static async getAll(args){
        try{
            const data = await Movies.findAll(args)
            return data
        }catch(error){
            throw error
        }
    }

    static async create(args){
        try{
            const data = await Movies.create(args)
            return data
        }catch(error){
            throw error
        }
    }

    static async getOne(id){
        try{
            const data = await Movies.findByPk(id)
            return data
        }catch(error){
            throw error
        }
    }

    static async update(movie, args){
        try{
            const data = await movie.update(args)
            return data 
        }catch(error){
            throw error
        }
    }

    static async delete(movie, id){
        try{
            const data = await movie.destroy({where : {id}})
            return data
        }catch(error){
            throw error
        }
    }

    static async handleUpload(movie, fileUrl){
        try{
            const data = await movie.update({foto: fileUrl, updatedAt : new Date()})
            return data
        }catch(error){
            throw error
        }
    }
}

module.exports = Movies_repository