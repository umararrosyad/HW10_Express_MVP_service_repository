const {User} = require('../models')
class Users_repository{

    static async getAll(args){
        try{
            const data = await User.findAll(args)
            return data
        }catch(error){
            throw error
        }
    }

    static async register(args){
        try{
            const data = await User.create(args)
            return data
        }catch(error){
            throw error
        }
    }

    static async getOne(email){
        
        const data = await User.findOne({where : {email}})
        return data
    }
}

module.exports = Users_repository