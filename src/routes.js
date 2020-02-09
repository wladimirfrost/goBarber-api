import {Router} from 'express'


const routes = new Router()

routes.get('/', (req,res) => {
  return res.json({msg:'bla bla bless3r3r3e'})
})


export default routes