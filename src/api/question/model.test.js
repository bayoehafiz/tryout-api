import { Question } from '.'

let question

beforeEach(async () => {
  question = await Question.create({ text: 'test', options: 'test', answer: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = question.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(question.id)
    expect(view.text).toBe(question.text)
    expect(view.options).toBe(question.options)
    expect(view.answer).toBe(question.answer)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = question.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(question.id)
    expect(view.text).toBe(question.text)
    expect(view.options).toBe(question.options)
    expect(view.answer).toBe(question.answer)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
