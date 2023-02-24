export const reportsStore = {
    state: () => ({
        reports: [
            {id: 1, title: 'Отчет по расходу топлива 1', subtitle: 'Сформирован 24.02.2023'},
            {id: 2, title: 'Отчет по расходу топлива 2', subtitle: 'Сформирован 24.02.2023'},
            {id: 3, title: 'Отчет по расходу топлива 3', subtitle: 'Сформирован 24.02.2023'},
            {id: 4, title: 'Отчет по расходу топлива 4', subtitle: 'Сформирован 24.02.2023'},
            {id: 5, title: 'Отчет по расходу топлива 5', subtitle: 'Сформирован 24.02.2023'},
            {id: 6, title: 'Отчет по расходу топлива 6', subtitle: 'Сформирован 24.02.2023'},
            {id: 7, title: 'Отчет по расходу топлива 7', subtitle: 'Сформирован 24.02.2023'},
            {id: 8, title: 'Отчет по расходу топлива 8', subtitle: 'Сформирован 24.02.2023'},
            {id: 9, title: 'Отчет по расходу топлива 9', subtitle: 'Сформирован 24.02.2023'},
            {id: 10, title: 'Отчет по расходу топлива 10', subtitle: 'Сформирован 24.02.2023'},
            {id: 11, title: 'Отчет по расходу топлива 11', subtitle: 'Сформирован 24.02.2023'},
            {id: 12, title: 'Отчет по расходу топлива 12', subtitle: 'Сформирован 24.02.2023'},
            {id: 13, title: 'Отчет по расходу топлива 13', subtitle: 'Сформирован 24.02.2023'},
        ],
        selectedReport: {}
    }),
    getters: {

    },
    mutations: {
        setSelectedReport(state, report) {
            state.selectedReport = report;
        }
    },
    actions: {
    
    },
    namespaced: true
}