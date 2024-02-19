import express from 'express'
 import productCtrl from '../controllers/product.controller.js' 
 const router = express.Router()
 router.route('/api/products').post(productCtrl.create)
 router.route('/api/products').get(productCtrl.list)
 router.param('id', productCtrl.productByID)
 router.route('/api/products/:id').get(productCtrl.read)
 router.route('/api/products/:id').put(productCtrl.update)
 router.route('/api/products/:id').delete(productCtrl.remove)
 export default router
