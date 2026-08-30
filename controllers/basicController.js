import Basic from "../cofig/db.js"


export const basicDisplay = async(req,res)=>{
    res.send("Small change.")
}
export const basiCDisplay = async(req,res)=>{
    res.send("tiny change one more.")
}
export const aboutDisplay = async(req,res)=>{
    res.send("About.")
}

export const createData = async(req,res)=>{
    try{
        const data = await Basic.create(req.body)
        res.status(201).json(data)
    }catch(error){
        res.status(500).json({message: error.message})
    }
    
}

export const readData = async(req,res)=>{
    try{
        const datas = await Basic.find()
        res.status(200).json(datas)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}