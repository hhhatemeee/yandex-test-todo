const Router = require('express');
const cardController = require('../controllers/cardController');

const router = new Router();

router.get('/cards', cardController.getCards);
router.get('/cards/filter', cardController.filterCards);
router.get('/cards/:id', cardController.getCard);
router.post('/cards', cardController.addCard);
router.put('/cards/:id', cardController.setNameCard);
router.put('/cards/complete/:id', cardController.setCompleted);
router.put('/cards/complete/all/:boolean', cardController.toggleCompleteAll);
router.delete('/cards/:id', cardController.deleteCard);
router.delete('/cards/', cardController.deleteAll);
router.delete('/cards/complete/all', cardController.deleteComplete);

module.exports = router;
