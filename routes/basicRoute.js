import express from 'express'
import { aboutDisplay, basiCDisplay, basicDisplay, createData, readData } from '../controllers/basicController.js'

const router = express.Router()

router.get('/basic',basicDisplay)
router.get('/basiCC',basiCDisplay)
router.get('/about',aboutDisplay)
router.post('/',createData)
router.get('/',readData)


export default router