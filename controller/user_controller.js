const User_service = require('../services/users_service')

class UserController {
    static async getAll(req,res,next){
        try{
            const users = await User_service.getAll(req)
            res.status(200).json(users)
        }
        catch(error){
            next(error)
        }
    }

    static async register(req,res,next){
        try{
            const newUser = await User_service.register(req.body) 
            res.status(200).json(newUser)
        }
        catch(error){
            next(error)
        }
    } 

    static async login(req,res,next){
        try{
            const token = await User_service.login(req.body)
            res.status(200).json({token})
        }
        catch(error){
            next(error)
        }
    }
}
module.exports = UserController