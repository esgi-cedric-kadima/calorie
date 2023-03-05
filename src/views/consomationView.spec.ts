import { shallowMount } from '@vue/test-utils';
import { useConsomationStore } from '@/store/consomation';
import tableNutrientComponent from '@/components/tableNutrientComponent.vue';
import totalNutrients from './ConsomationView.vue';

describe('NutrientTable.vue', () => {
  it('calcule correctement les nutriments totaux', async () => {
    // Création d'un mock de la méthode `getters.getAlimentsConsomation` de la store `useConsomationStore`
    const mockConsomation = [
      {
        id: '1',
        foodNutrients: [
          { nutrientName: 'Energy', value: 100 },
          { nutrientName: 'Protein', value: 10 },
          { nutrientName: 'Total lipid (fat)', value: 5 },
          { nutrientName: 'Sugars, total including NLEA', value: 15 },
          { nutrientName: 'Calcium, Ca', value: 50 },
        ],
      },
      {
        id: '2',
        foodNutrients: [
          { nutrientName: 'Energy', value: 200 },
          { nutrientName: 'Protein', value: 20 },
          { nutrientName: 'Total lipid (fat)', value: 10 },
          { nutrientName: 'Sugars, total including NLEA', value: 20 },
          { nutrientName: 'Calcium, Ca', value: 100 },
        ],
      },
    ];
    const consomationStore = useConsomationStore();
    consomationStore.getAlimentsConsomation = jest.fn(() => mockConsomation);

    // Création d'une instance du composant `NutrientTable`
    const wrapper = shallowMount(tableNutrientComponent, {
      global: {
        plugins: [consomationStore],
      },
    });

    // Appel de la méthode `totalNutrients`
    await wrapper.vm.totalNutrients();

    // Vérification que les nutriments totaux ont été calculés correctement
    expect(wrapper.vm.total).toEqual([
      { nutrientName: 'Energy', value: 300 },
      { nutrientName: 'Protein', value: 30 },
      { nutrientName: 'Total lipid (fat)', value: 15 },
      { nutrientName: 'Sugars, total including NLEA', value: 35 },
      { nutrientName: 'Calcium, Ca', value: 150 },
    ]);
  });
});
