const User_repository = require('../repositories/users_repository')
const bcrypt  = require('bcrypt')
const jwt = require('jsonwebtoken') 
class User_service{

    static async getAll(req){
        try{
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const offset = (page - 1) * limit;
            const data = User_repository.getAll({limit,offset})
            return data
        }catch(error){
            throw error
        }
        
    }

    static async register(args){
        try{
            const {email, gender, password, role} = args

            if(!email || !gender || !password || !role){
                throw ({name : 'nullParameter'})
            }
            const hashpassword = await bcrypt.hash(password,10)
            const data = await User_repository.register(
                {
                    email,
                    gender,
                    password : hashpassword,
                    role
                }
            )
            return data
        }catch(error){
            throw error
        }
    }

    static async login(args){
        try{
            const {email, password} = args
            if(!email || !password){
                throw ({name : 'nullParameter'})
            }
            const user = await User_repository.getOne(email)
            if(!user){
                throw ({name : 'invalidCaredential' })
            }
            const passwordMatch = await bcrypt.compare(password,user.password)
            if(!passwordMatch){
                throw ({name : 'invalidCaredential' })
            }
            const token = jwt.sign(
                {
                    id : user.id,
                    email : user.email
                },
                'secret'
            )
            return token
        }catch(error){
            throw error
        }
    }
}


module.exports = User_service