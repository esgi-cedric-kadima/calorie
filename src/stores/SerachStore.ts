import { defineStore } from 'pinia'

export const useInputStore = defineStore({
    id: 'input',
    state: () => ({
        inputValue: '',
    }),
    getters: {
        getInputValue():any {
            return this.inputValue
        },
    },
    actions: {
        setInputValue(value: string) {
            this.inputValue = value
            console.log('inputValue', this.inputValue)
        },
    },
})
