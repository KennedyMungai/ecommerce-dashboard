interface IChartData
{
    labels: string[]
    datasets: IChartDataset[]
}

interface IChartDataset
{
    label: string
    data: number[]
    borderColor: string
    backgroundColor: string
}

interface IChartOptions
{
    plugins: IOptionsData,
    maintainAspectRatio: boolean,
    responsive: boolean
}

interface IOptionsData
{
    legend: {position: string},
    title: {display: boolean, text: string}
}