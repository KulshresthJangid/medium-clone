const express=require('express')
const mongoose=require('mongoose')
const router=express.Router()
const homeController=require('../controllers/homeController')

router.get('/', homeController.home)

module.exports=router