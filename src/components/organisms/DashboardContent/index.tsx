import React, { useEffect, useState } from 'react';
import ApexChart from 'react-apexcharts';
import { useMediaQuery } from 'react-responsive';
import {
  Chart as ChartJS,
  CategoryScale,
  BarElement,
  BarController,
  ChartDataset,
  LinearScale,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { FaHeartbeat, FaLungs, FaAngleRight } from 'react-icons/fa';
import { SiOxygen } from 'react-icons/si';

ChartJS.register(CategoryScale, BarElement, BarController, LinearScale);

import * as I from '../../../interfaces';
import * as S from './styled';
import { MEDIA } from '../../../constants';

const { minWidth } = MEDIA;
const labels = ['일', '월', '화', '수', '목', '금', '토'];
const deactivate = '#D9D9D999';
const activate = '#00DEA3';

type Props = {
  weekHealth: I.Activity[];
  heart: I.Heart;
  oxygen: I.Oxygen;
  respiratory: I.Respiratory;
};

export default function DashboardContent({ weekHealth, heart, oxygen, respiratory }: Props) {
  const isDesktop = useMediaQuery({ minWidth });

  return isDesktop ? (
    <Desktop weekHealth={weekHealth} heart={heart} oxygen={oxygen} respiratory={respiratory} />
  ) : (
    <Mobile />
  );
}

function Desktop({ weekHealth, heart, oxygen, respiratory }: Props) {
  const [energyBurnData, setEnergyBurnData] = useState<ChartDataset<'bar', number[]>[]>([]);
  const [exerciseData, setExerciseData] = useState<ChartDataset<'bar', number[]>[]>([]);
  const [standData, setStandData] = useState<ChartDataset<'bar', number[]>[]>([]);
  const [energyBurnScore, setEnergyBurnScore] = useState<number>(0);
  const [exerciseScore, setExerciseScore] = useState<number>(0);
  const [standScore, setStandScore] = useState<number>(0);
  const [chatBackground, setChartBackground] = useState<string[]>([
    deactivate,
    deactivate,
    deactivate,
    deactivate,
    deactivate,
    deactivate,
    deactivate,
  ]);

  useEffect(() => {
    if (weekHealth) {
      const energyBurn = [];
      const exercise = [];
      const stand = [];
      for (const data of weekHealth) {
        const {
          activeEnergyBurnedInKcal,
          activeEnergyBurnedGoalInKcal,
          exerciseTimeInMinutes,
          exerciseTimeGoalInMinutes,
          standHours,
          standHoursGoal,
        } = data;

        energyBurn.push((activeEnergyBurnedInKcal / activeEnergyBurnedGoalInKcal) * 100);
        exercise.push((exerciseTimeInMinutes / exerciseTimeGoalInMinutes) * 100);
        stand.push((standHours / standHoursGoal) * 100);
      }

      setEnergyBurnData(energyBurn);
      setExerciseData(exercise);
      setStandData(stand);
      setEnergyBurnScore(parseInt((energyBurn.reduce((a, b) => a + b, 0) / 7).toString()));
      setExerciseScore(parseInt((exercise.reduce((a, b) => a + b, 0) / 7).toString()));
      setStandScore(parseInt((stand.reduce((a, b) => a + b, 0) / 7).toString()));
      setChartBackground(
        [0, 1, 2, 3, 4, 5, 6].map(_ => {
          return new Date().getDay() === _ ? activate : deactivate;
        }),
      );
    }
  }, [weekHealth]);

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
          {heart && (
            <React.Fragment>
              <div>분당 심박수 / 혈중 산소 / 분당 호흡수</div>
              <div>
                <div>
                  <FaHeartbeat size={24} color='#fff' />
                </div>
                <div>분당 심박수</div>
                <div>{parseInt(heart[0].valueInCountPerMinute)}회</div>
                <div>
                  {parseInt(heart[0].valueInCountPerMinute) -
                    parseInt(heart[1].valueInCountPerMinute)}
                  pt
                </div>
                <div>
                  <FaAngleRight color='#535353' />
                </div>
              </div>
              <div>
                <div>
                  <SiOxygen size={24} color='#fff' />
                </div>
                <div>혈중 산소</div>
                <div>{parseInt((Number(oxygen[0].valueInRatio) * 100).toString())}%</div>
                <div>
                  +{Number(oxygen[0].valueInRatio) * 100 - Number(oxygen[1].valueInRatio) * 100}pt
                </div>
                <div>
                  <FaAngleRight color='#535353' />
                </div>
              </div>
              <div>
                <div>
                  <FaLungs size={24} color='#fff' />
                </div>
                <div>분당 호흡수</div>
                <div>{parseInt(respiratory[0].valueInCountPerMinute)}회</div>
                <div>
                  +
                  {parseInt(respiratory[0].valueInCountPerMinute) -
                    parseInt(respiratory[1].valueInCountPerMinute)}
                  pt
                </div>
                <div>
                  <FaAngleRight color='#535353' />
                </div>
              </div>
            </React.Fragment>
          )}
        </S.Activity>
      </S.LeftContainer>
      {weekHealth && (
        <S.RightContainer>
          <S.BarGraphContainer>
            <div>
              <div>
                <div>움직이기</div>
                <div>{energyBurnScore}</div>
                <div>점</div>
              </div>
              <div>2022-10-30 ~ 2022-11-05</div>
            </div>
            <div>
              <Chart
                type='bar'
                options={{
                  plugins: { legend: { display: false } },
                  scales: {
                    xAxes: { grid: { display: false } },
                    yAxes: { ticks: { stepSize: 25 } },
                  },
                }}
                data={{
                  labels,
                  datasets: [
                    {
                      type: 'bar',
                      backgroundColor: chatBackground,
                      data: energyBurnData,
                      barThickness: 15,
                    },
                  ],
                }}
              />
            </div>
          </S.BarGraphContainer>
          <S.BarGraphContainer>
            <div>
              <div>
                <div>운동하기</div>
                <div>{exerciseScore}</div>
                <div>점</div>
              </div>
              <div>2022-10-30 ~ 2022-11-05</div>
            </div>
            <div>
              <Chart
                type='bar'
                options={{
                  plugins: { legend: { display: false } },
                  scales: {
                    xAxes: { grid: { display: false } },
                    yAxes: { ticks: { stepSize: 25 } },
                  },
                }}
                data={{
                  labels,
                  datasets: [
                    {
                      type: 'bar',
                      backgroundColor: chatBackground,
                      data: exerciseData,
                      barThickness: 15,
                    },
                  ],
                }}
              />
            </div>
          </S.BarGraphContainer>
          <S.BarGraphContainer>
            <div>
              <div>
                <div>일어서기</div>
                <div>{standScore}</div>
                <div>점</div>
              </div>
              <div>2022-10-30 ~ 2022-11-05</div>
            </div>
            <div>
              <Chart
                type='bar'
                options={{
                  plugins: { legend: { display: false } },
                  scales: {
                    xAxes: { grid: { display: false } },
                    yAxes: { ticks: { stepSize: 25 } },
                  },
                }}
                data={{
                  labels,
                  datasets: [
                    {
                      type: 'bar',
                      backgroundColor: chatBackground,
                      data: standData,
                      barThickness: 15,
                    },
                  ],
                }}
              />
            </div>
          </S.BarGraphContainer>
        </S.RightContainer>
      )}
    </S.Container>
  );
}

function Mobile() {
  return <div>Mobile</div>;
}
