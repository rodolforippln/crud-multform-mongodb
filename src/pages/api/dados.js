import Client from '../../models/Cliente'
import dbConnect from '../../services/db'

dbConnect()

export default async function handle (req, res) {
    const {method} = req

    switch (method) {
        case 'GET':
          // Listar todos
          try {
            const clients = await Client.find({})
            res.status(200).json({success: true, data: clients})
          } catch(err) {
              console.log(err)
              res.status(500).json({success: false, err})
          }
        
        case 'POST':
          // Agregar cadastro
          try {
            const {name, email, level, github} = req.body

            if (!name && !email) throw 'invalid data'

            const clients = await Client.create({name, email, level, github})

            res.status(201).json({success: true, data: clients})
          } catch(err) {
              console.log(err)
              res.status(500).json({success: false, err})
          }
      }
}