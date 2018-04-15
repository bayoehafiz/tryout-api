import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { token } from '../../services/passport'
import { create, index, show, showParticipant, update, submitTestResult, destroy } from './controller'
import { schema } from './model'
export Test, { schema } from './model'

const router = new Router()
const { questions, users, time_limit } = schema.tree

/**
 * @api {post} /tests Create test
 * @apiName CreateTest
 * @apiGroup Test
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiParam questions Test's questions.
 * @apiParam users Test's users.
 * @apiParam time_limit Test's time_limit.
 * @apiSuccess {Object} test Test's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Test not found.
 * @apiError 401 admin access only.
 */

router.post('/',
  token({ required: true, roles: ['admin'] }),
  body({ questions, users, time_limit }),
  create)

/**
 * @api {get} /tests Retrieve tests
 * @apiName RetrieveTests
 * @apiGroup Test
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of tests.
 * @apiSuccess {Object[]} rows List of tests.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 admin access only.
 */

router.get('/',
  token({ required: true, roles: ['admin'] }),
  query(),
  index)

/**
 * @api {get} /tests/:id Retrieve test
 * @apiName RetrieveTest
 * @apiGroup Test
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiSuccess {Object} test Test's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Test not found.
 * @apiError 401 user access only.
 */
router.get('/:id',
  token({ required: true }),
  show)

/**
 * @api {get} /tests/:id/users Retrieve test participants
 * @apiName RetrieveTestUsers
 * @apiGroup Test
 * @apiHeader {String} access_token user access token.
 * @apiSuccess {Object} test Test Participant's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Test not found.
 * @apiError 401 user access only.
 */
router.get('/:id/participants',
  token({ required: true, roles: ['admin'] }),
  showParticipant)

/**
 * @api {put} /tests/:id Update test
 * @apiName UpdateTest
 * @apiGroup Test
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiParam questions Test's questions.
 * @apiParam users Test's users.
 * @apiParam time_limit Test's time_limit.
 * @apiSuccess {Object} test Test's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Test not found.
 * @apiError 401 admin access only.
 */
router.put('/:id',
  token({ required: true, roles: ['admin'] }),
  body({ questions, users, time_limit }),
  update)

/**
 * @api {put} /tests/:id Update test
 * @apiName UpdateTest
 * @apiGroup Test
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiParam questions Test's questions.
 * @apiParam users Test's users.
 * @apiParam time_limit Test's time_limit.
 * @apiSuccess {Object} test Test's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Test not found.
 * @apiError 401 admin access only.
 */
router.put('/:id',
  token({ required: true, roles: ['admin'] }),
  body({ questions, users, time_limit }),
  update)

/**
 * @api {delete} /tests/:id Delete test
 * @apiName DeleteTest
 * @apiGroup Test
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Test not found.
 * @apiError 401 admin access only.
 */
router.delete('/:id',
  token({ required: true, roles: ['admin'] }),
  destroy)

export default router
