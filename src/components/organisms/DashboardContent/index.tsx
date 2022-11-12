import React, { useEffect } from 'react';
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
          <div>수면 요약</div>
        </S.Summary>
        <S.ThreeContainer>
          <S.MiniContainer>
            <div>수면 시간</div>
            <div>8:15</div>
          </S.MiniContainer>
          <S.MiniContainer>
            <div>REM 수면 시간</div>
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
                    backgroundColor: '#00DEA3',
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
                    backgroundColor: '#00DEA3',
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
                    backgroundColor: '#00DEA3',
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
