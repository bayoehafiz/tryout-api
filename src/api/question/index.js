import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { token } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Question, { schema } from './model'

const router = new Router()
const { text, options, answer } = schema.tree

/**
 * @api {post} /questions Create question
 * @apiName CreateQuestion
 * @apiGroup Question
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiParam text Question's text.
 * @apiParam options Question's options.
 * @apiParam answer Question's answer.
 * @apiSuccess {Object} question Question's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Question not found.
 * @apiError 401 admin access only.
 */
router.post('/',
  token({ required: true, roles: ['admin'] }),
  body({ text, options, answer }),
  create)

/**
 * @api {get} /questions Retrieve questions
 * @apiName RetrieveQuestions
 * @apiGroup Question
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of questions.
 * @apiSuccess {Object[]} rows List of questions.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 admin access only.
 */
router.get('/',
  token({ required: true, roles: ['admin'] }),
  query(),
  index)

/**
 * @api {get} /questions/:id Retrieve question
 * @apiName RetrieveQuestion
 * @apiGroup Question
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiSuccess {Object} question Question's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Question not found.
 * @apiError 401 admin access only.
 */
router.get('/:id',
  token({ required: true }),
  show)

/**
 * @api {put} /questions/:id Update question
 * @apiName UpdateQuestion
 * @apiGroup Question
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiParam text Question's text.
 * @apiParam options Question's options.
 * @apiParam answer Question's answer.
 * @apiSuccess {Object} question Question's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Question not found.
 * @apiError 401 admin access only.
 */
router.put('/:id',
  token({ required: true, roles: ['admin'] }),
  body({ text, options, answer }),
  update)

/**
 * @api {delete} /questions/:id Delete question
 * @apiName DeleteQuestion
 * @apiGroup Question
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Question not found.
 * @apiError 401 admin access only.
 */
router.delete('/:id',
  token({ required: true, roles: ['admin'] }),
  destroy)

export default router
