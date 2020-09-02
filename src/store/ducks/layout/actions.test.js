import { Types } from './index'

describe('Layout Actions', () => {
    describe('Actions Types', () => {
        test('deve retornar a action type SHOW_MESSAGE', () => {
            expect(Types.SHOW_MESSAGE).toEqual('SHOW_MESSAGE')
        })

        test('deve retornar a action type HIDE_MESSAGE', () => {
            expect(Types.HIDE_MESSAGE).toEqual('HIDE_MESSAGE')
        })
    })
})