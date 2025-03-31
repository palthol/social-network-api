const router = require('express').Router();
const thoughtController = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/')
    .get(thoughtController.getAllThoughts)
    .post(thoughtController.createThought);

// /api/thoughts/:id
router.route('/:id')
    .get(thoughtController.getThoughtById)
    .put(thoughtController.updateThought)
    .delete(thoughtController.deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
    .post(thoughtController.createReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId')
    .delete(thoughtController.deleteReaction);

module.exports = router;