export const reportStore = {
    state: () => ({
        tabs: [
            {id: 1, title: 'Всего за месяц'},
            {id: 2, title: 'Автомобили'},
            {id: 3, title: 'MAN фуры'}
        ],
        selectedTab: {},
        refills: [
            {id: 1, time: '24.02.2023', refill: 'Заправка', volume: '60', startVolume: '34', endVolume: '94', sum: '181.9', address: 'Невский проспект, Санкт-Петербург'},
            {id: 2, time: '24.02.2023', refill: 'Заправка', volume: '60', startVolume: '34', endVolume: '94', sum: '181.9', address: 'Невский проспект, Санкт-Петербург'},
            {id: 3, time: '24.02.2023', refill: 'Заправка', volume: '60', startVolume: '34', endVolume: '94', sum: '181.9', address: 'Невский проспект, Санкт-Петербург'},
            {id: 4, time: '24.02.2023', refill: 'Заправка', volume: '60', startVolume: '34', endVolume: '94', sum: '181.9', address: 'Невский проспект, Санкт-Петербург'},
        ],
        run: [50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700],
        volume: [94, 60, 30, 95, 61, 30, 1, 99, 69, 33, 98, 55, 25, 10]
    }),
    getters: {

    },
    mutations: {
        setSelectedTab(state, tab) {
            state.selectedTab = tab;
        }
    },
    actions: {

    },
    namespaced: true
}