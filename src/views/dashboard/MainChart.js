import React, { useEffect, useRef } from 'react'

import { CChartLine } from '@coreui/react-chartjs'
import { getStyle } from '@coreui/utils'

const random = () => Math.round(Math.random() * 6200)
export const data_main_charts = [
  0,
  0,
  0,
  0,
  random(200, 2000),
  random(500, 2000),
  random(500, 2500),
  random(1000, 2500),
  random(1000, 3000),
  random(2000, 4000),
  random(3000, 5000),
  6200,
]

export const data_widget_einkauf = data_main_charts.slice(4, -1)

export const labels_main_charts = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'Oktober',
  'November',
  'December',
]

export const label_widget_einkauf = labels_main_charts.slice(4, -1)

const MainChart = () => {
  const chartRef = useRef(null)

  useEffect(() => {
    document.documentElement.addEventListener('ColorSchemeChange', () => {
      if (chartRef.current) {
        setTimeout(() => {
          chartRef.current.options.scales.x.grid.borderColor = getStyle(
            '--cui-border-color-translucent',
          )
          chartRef.current.options.scales.x.grid.color = getStyle('--cui-border-color-translucent')
          chartRef.current.options.scales.x.ticks.color = getStyle('--cui-body-color')
          chartRef.current.options.scales.y.grid.borderColor = getStyle(
            '--cui-border-color-translucent',
          )
          chartRef.current.options.scales.y.grid.color = getStyle('--cui-border-color-translucent')
          chartRef.current.options.scales.y.ticks.color = getStyle('--cui-body-color')
          chartRef.current.update()
        })
      }
    })
  }, [chartRef])

  return (
    <>
      <CChartLine
        ref={chartRef}
        style={{ height: '300px', marginTop: '40px' }}
        data={{
          labels: labels_main_charts,
          datasets: [
            {
              label: 'Total Verkauf',
              backgroundColor: `rgba(${getStyle('--cui-info-rgb')}, .1)`,
              borderColor: getStyle('--cui-info'),
              pointHoverBackgroundColor: getStyle('--cui-info'),
              borderWidth: 2,
              data: [
                0,
                0,
                0,
                0,
                random(200, 2000),
                random(500, 2000),
                random(500, 2500),
                random(1000, 2500),
                random(1000, 3000),
                random(2000, 4000),
                random(3000, 5000),
                6200,
              ],
              fill: true,
              options: {
                tooltips: {
                  callbacks: {
                    label: (tooltipItems, data) => {
                      console.log('tooltipItems', tooltipItems)
                      console.log('data', data)
                      return (
                        data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] + ' €'
                      )
                    },
                  },
                },
              },
            },
            // {
            //   label: 'My Second dataset',
            //   backgroundColor: 'transparent',
            //   borderColor: getStyle('--cui-success'),
            //   pointHoverBackgroundColor: getStyle('--cui-success'),
            //   borderWidth: 2,
            //   data: [
            //     random(50, 200),
            //     random(50, 200),
            //     random(50, 200),
            //     random(50, 200),
            //     random(50, 200),
            //     random(50, 200),
            //     random(50, 200),
            //   ],
            // },
            // {
            //   label: 'My Third dataset',
            //   backgroundColor: 'transparent',
            //   borderColor: getStyle('--cui-danger'),
            //   pointHoverBackgroundColor: getStyle('--cui-danger'),
            //   borderWidth: 1,
            //   borderDash: [8, 5],
            //   data: [65, 65, 65, 65, 65, 65, 65],
            // },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              grid: {
                color: getStyle('--cui-border-color-translucent'),
                drawOnChartArea: false,
              },
              ticks: {
                color: getStyle('--cui-body-color'),
              },
            },
            y: {
              beginAtZero: true,
              border: {
                color: getStyle('--cui-border-color-translucent'),
              },
              grid: {
                color: getStyle('--cui-border-color-translucent'),
              },
              max: 6400,
              ticks: {
                color: getStyle('--cui-body-color'),
                maxTicksLimit: 5,
                stepSize: Math.ceil(6400 / 50),
              },
            },
          },
          elements: {
            line: {
              tension: 0.4,
            },
            point: {
              radius: 0,
              hitRadius: 10,
              hoverRadius: 4,
              hoverBorderWidth: 3,
            },
          },
        }}
      />
    </>
  )
}

export default MainChart
