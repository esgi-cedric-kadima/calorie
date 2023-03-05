import {defineStore} from 'pinia'

interface AlimentHistorique {
    name: string
}

export const useAlimentStore = defineStore('aliments', {
    state: () => ({
        aliments: [] as AlimentHistorique[]
    }),
    actions: {
        addAliment(aliment: AlimentHistorique) {
            this.aliments.push(aliment)
        },
        setAliments(aliments: AlimentHistorique[]) {
            this.aliments = aliments
        }
    },
    getters: {
        getAliments(): AlimentHistorique[] {
            return this.aliments
        }
    }
})
