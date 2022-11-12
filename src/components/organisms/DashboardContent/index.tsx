import React, { useEffect } from 'react';
import ApexChart from 'react-apexcharts';
import { useMediaQuery } from 'react-responsive';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { FaHeartbeat, FaLungs, FaAngleRight } from 'react-icons/fa';
import { SiOxygen } from 'react-icons/si';

import * as S from './styled';

import { MEDIA } from '../../../constants';

const { minWidth } = MEDIA;

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
);

const labels = ['일', '월', '화', '수', '목', '금', '토'];
const sleepLabels = ['기상', '램 수면', '얕은 수면', '깊은 수면'];

export default function DashboardContent() {
  const isDesktop = useMediaQuery({ minWidth });

  return isDesktop ? <Desktop /> : <Mobile />;
}

function Desktop() {
  useEffect(() => {}, []);

  return (
    <S.Container>
      <S.LeftContainer>
        <S.Summary>
          <div>수면 흐름 분석</div>
          <div>
            <ApexChart
              series={[
                {
                  data: [
                    {
                      x: '기상',
                      y: [new Date(1789, 3, 30).getTime(), new Date(1797, 2, 4).getTime()],
                    },
                  ],
                },
                {
                  data: [
                    {
                      x: '램 수면',
                      y: [new Date(1801, 2, 4).getTime(), new Date(1805, 2, 4).getTime()],
                    },
                  ],
                },
                {
                  data: [
                    {
                      x: '램 수면',
                      y: [new Date(1805, 2, 4).getTime(), new Date(1812, 3, 20).getTime()],
                    },
                  ],
                },
                {
                  data: [
                    {
                      x: '얕은 수면',
                      y: [new Date(1794, 0, 2).getTime(), new Date(1795, 7, 20).getTime()],
                    },
                  ],
                },
                {
                  data: [
                    {
                      x: '얕은 수면',
                      y: [new Date(1795, 7, 20).getTime(), new Date(1800, 4, 12).getTime()],
                    },
                  ],
                },
                {
                  data: [
                    {
                      x: '깊은 수면',
                      y: [new Date(1800, 4, 13).getTime(), new Date(1800, 5, 5).getTime()],
                    },
                  ],
                },
                {
                  data: [
                    {
                      x: '깊은 수면',
                      y: [new Date(1800, 5, 13).getTime(), new Date(1801, 2, 4).getTime()],
                    },
                  ],
                },
              ]}
              options={{
                plotOptions: {
                  bar: {
                    horizontal: true,
                    barHeight: '25%',
                    rangeBarGroupRows: true,
                  },
                },
                chart: { toolbar: { show: false } },
                colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#3F51B5'],
                fill: { type: 'solid' },
                xaxis: { type: 'datetime' },
                legend: { show: false },
              }}
              type='rangeBar'
              height={300}
              width={800}
            />
          </div>
        </S.Summary>
        <S.ThreeContainer>
          <S.MiniContainer>
            <div>수면 시간</div>
            <div>8:15</div>
          </S.MiniContainer>
          <S.MiniContainer>
            <div>램 수면 시간</div>
            <div>2:10</div>
          </S.MiniContainer>
          <S.MiniContainer>
            <div>숙면 시간</div>
            <div>1:27</div>
          </S.MiniContainer>
        </S.ThreeContainer>
        <S.Activity>
          <div>분당 심박수 / 혈중 산소 / 분당 호흡수</div>
          <div>
            <div>
              <FaHeartbeat size={24} color='#fff' />
            </div>
            <div>분당 심박수</div>
            <div>72회</div>
            <div>-10pt</div>
            <div>
              <FaAngleRight color='#535353' />
            </div>
          </div>
          <div>
            <div>
              <SiOxygen size={24} color='#fff' />
            </div>
            <div>혈중 산소</div>
            <div>96%</div>
            <div>+15pt</div>
            <div>
              <FaAngleRight color='#535353' />
            </div>
          </div>
          <div>
            <div>
              <FaLungs size={24} color='#fff' />
            </div>
            <div>분당 호흡수</div>
            <div>20회</div>
            <div>-10pt</div>
            <div>
              <FaAngleRight color='#535353' />
            </div>
          </div>
        </S.Activity>
      </S.LeftContainer>
      <S.RightContainer>
        <S.BarGraphContainer>
          <div>
            <div>움직이기</div>
            <div>88</div>
            <div>점</div>
          </div>
          <div>
            <Chart
              type='bar'
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  xAxes: {
                    grid: {
                      display: false,
                    },
                  },
                  yAxes: {
                    ticks: {
                      stepSize: 25,
                    },
                  },
                },
              }}
              data={{
                labels,
                datasets: [
                  {
                    type: 'bar' as const,
                    backgroundColor: [
                      '#D9D9D999',
                      '#00DEA3',
                      '#D9D9D999',
                      '#D9D9D999',
                      '#D9D9D999',
                      '#D9D9D999',
                      '#D9D9D999',
                    ],
                    data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
                    barThickness: 15,
                  },
                ],
              }}
            />
          </div>
        </S.BarGraphContainer>
        <S.BarGraphContainer>
          <div>
            <div>운동하기</div>
            <div>88</div>
            <div>점</div>
          </div>
          <div>
            <Chart
              type='bar'
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  xAxes: {
                    grid: {
                      display: false,
                    },
                  },
                  yAxes: {
                    ticks: {
                      stepSize: 25,
                    },
                  },
                },
              }}
              data={{
                labels,
                datasets: [
                  {
                    type: 'bar' as const,
                    backgroundColor: [
                      '#D9D9D999',
                      '#00DEA3',
                      '#D9D9D999',
                      '#D9D9D999',
                      '#D9D9D999',
                      '#D9D9D999',
                      '#D9D9D999',
                    ],
                    data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
                    barThickness: 15,
                  },
                ],
              }}
            />
          </div>
        </S.BarGraphContainer>
        <S.BarGraphContainer>
          <div>
            <div>일어서기</div>
            <div>88</div>
            <div>점</div>
          </div>
          <div>
            <Chart
              type='bar'
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  xAxes: {
                    grid: {
                      display: false,
                    },
                  },
                  yAxes: {
                    ticks: {
                      stepSize: 25,
                    },
                  },
                },
              }}
              data={{
                labels,
                datasets: [
                  {
                    type: 'bar' as const,
                    backgroundColor: [
                      '#D9D9D999',
                      '#00DEA3',
                      '#D9D9D999',
                      '#D9D9D999',
                      '#D9D9D999',
                      '#D9D9D999',
                      '#D9D9D999',
                    ],
                    data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
                    barThickness: 15,
                  },
                ],
              }}
            />
          </div>
        </S.BarGraphContainer>
      </S.RightContainer>
    </S.Container>
  );
}

function Mobile() {
  return <div>Mobile</div>;
}
