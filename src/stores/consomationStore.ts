import {defineStore} from 'pinia'

interface AlimentConsomation {
    id: string
}

export const useConsomationStore = defineStore('alimentsConsomation', {
    state: () => ({
        alimentsConsomation: [] as AlimentConsomation[]
    }),
    actions: {
        addAConsomation(consomation: AlimentConsomation) {
            this.alimentsConsomation.push(consomation)
        },
        setConsomation(alimentsConsomation: AlimentConsomation[]) {
            this.alimentsConsomation = alimentsConsomation
        }
    },
    getters: {
        getAlimentsConsomation(): AlimentConsomation[] {
            return this.alimentsConsomation
        }
    }
})
