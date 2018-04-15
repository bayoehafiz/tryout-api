import { Test } from '.'

let test

beforeEach(async () => {
  test = await Test.create({ questions: 'test', users: 'test', time_limit: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = test.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(test.id)
    expect(view.questions).toBe(test.questions)
    expect(view.users).toBe(test.users)
    expect(view.time_limit).toBe(test.time_limit)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = test.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(test.id)
    expect(view.questions).toBe(test.questions)
    expect(view.users).toBe(test.users)
    expect(view.time_limit).toBe(test.time_limit)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
