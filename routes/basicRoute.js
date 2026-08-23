import express from 'express'
import { basicDisplay } from '../controllers/basicController.js'

const router = express.Router()

router.get('/basic',basicDisplay)


export default router