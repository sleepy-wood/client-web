import React, { useCallback, useEffect, useState } from 'react';
import ApexChart from 'react-apexcharts';
import { useSelector } from 'react-redux';
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
import { FaHeartbeat, FaLungs, FaDna } from 'react-icons/fa';
import { SiOxygen } from 'react-icons/si';
import { CgProfile } from 'react-icons/cg';
import {
  HiArrowTrendingUp,
  HiArrowTrendingDown,
  HiCalendarDays,
  HiOutlineChevronRight,
} from 'react-icons/hi2';
import { IoBodyOutline, IoClose } from 'react-icons/io5';
import { BsDot } from 'react-icons/bs';

import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

function SleepCalendar() {
  return (
    <div>
      <Calendar
        localizer={localizer}
        toolbar={false}
        startAccessor='start'
        endAccessor='end'
        style={{ height: 740 }}
        eventPropGetter={(event, start, end, isSelected) => {
          const splitTitle = event.title.split(' ');
          const category = splitTitle[0];

          let color = '#475569';
          let backgroundColor = '#E0E0E0';

          switch (category) {
            case 'T':
              color = '#475569';
              backgroundColor = '#E0E0E0';
              break;

            case 'R':
              color = '#FF0080';
              backgroundColor = 'rgba(255, 0, 128, 0.21)';
              break;

            case 'S':
              color = '#2563EB';
              backgroundColor = '#DBEAFE';
              break;

            case 'D':
              color = '#00DEA3';
              backgroundColor = 'rgba(0, 222, 163, 0.2)';
              break;

            default:
              color = '#475569';
              backgroundColor = '#E0E0E0';
              break;
          }

          return {
            style: {
              color,
              backgroundColor,
              textAlign: 'center',
              height: '20px',
              marginBottom: '4px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: 400,
              fontSize: '14px',
            },
          };
        }}
        components={{
          event: ({ event }) => {
            const splitTitle = event.title.split(' ');
            const time = splitTitle[1];

            return (
              <div>
                <div>
                  <span>{time}</span>
                </div>
              </div>
            );
          },
        }}
        events={[
          {
            title: 'T 8:15',
            start: new Date(),
            end: new Date(),
          },
          {
            title: 'R 2:10',
            start: new Date(),
            end: new Date(),
          },
          {
            title: 'S 4:25',
            start: new Date(),
            end: new Date(),
          },
          {
            title: 'D 1:40',
            start: new Date(),
            end: new Date(),
          },
        ]}
      />
    </div>
  );
}

ChartJS.register(CategoryScale, BarElement, BarController, LinearScale);

import * as I from '../../../interfaces';
import * as S from './styled';
import { MEDIA } from '../../../constants';
import { RootState } from '../../../reducers';

const { minWidth } = MEDIA;
const labels = ['일', '월', '화', '수', '목', '금', '토'];
const deactivate = '#D9D9D999';
const activate = '#FF0080';

type Props = {
  weekHealth: I.Activity[];
  heart: I.Heart[];
  oxygen: I.Oxygen[];
  respiratory: I.Respiratory[];
  sleeps: I.Sleep[];
};

export default function DashboardContent({
  weekHealth,
  heart,
  oxygen,
  respiratory,
  sleeps,
}: Props) {
  const isDesktop = useMediaQuery({ minWidth });

  return isDesktop ? (
    <Desktop
      weekHealth={weekHealth}
      heart={heart}
      oxygen={oxygen}
      respiratory={respiratory}
      sleeps={sleeps}
    />
  ) : (
    <Mobile />
  );
}

function Desktop({ weekHealth, heart, oxygen, respiratory, sleeps }: Props) {
  const { user } = useSelector((state: RootState) => state.user);

  const [showModal, setShowModal] = useState<boolean>(false);

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

  const notReady = useCallback((e: React.MouseEvent) => {
    alert('준비중입니다.');
  }, []);

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

  if (!user) {
    return <div>Loading</div>;
  }

  return (
    <React.Fragment>
      {showModal && (
        <S.Modal
          onClick={() => {
            setShowModal(false);
          }}>
          <S.ModalBackground
            onClick={e => {
              e.preventDefault();
              e.stopPropagation();
            }}>
            <S.ModalTextContainer>
              <div>
                <div>수면 흐름 캘린더</div>
                <div>
                  <div className='flex items-center'>
                    <div>
                      <BsDot />
                    </div>
                    <div>총 수면 시간</div>
                  </div>
                  <div className='flex items-center'>
                    <div>
                      <BsDot />
                    </div>
                    <div>렘 수면</div>
                  </div>
                  <div className='flex items-center'>
                    <div>
                      <BsDot />
                    </div>
                    <div>얕은 수면</div>
                  </div>
                  <div className='flex items-center'>
                    <div>
                      <BsDot />
                    </div>
                    <div>깊은 수면</div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <S.DayCategory active>Month</S.DayCategory>
                </div>
                <div>
                  <S.DayCategory>Week</S.DayCategory>
                </div>
                <div>
                  <S.DayCategory>Day</S.DayCategory>
                </div>
                <div
                  onClick={() => {
                    setShowModal(false);
                  }}>
                  <IoClose size={32} />
                </div>
              </div>
            </S.ModalTextContainer>
            <div>
              <SleepCalendar />
            </div>
          </S.ModalBackground>
        </S.Modal>
      )}

      <S.Banner>
        <img src={user.bannerImg} alt='Banner' />
      </S.Banner>
      <S.Profile>
        <div>
          <div>
            <img src={user.profileImg} alt='user-profile' />
          </div>
          <div>
            <div>{user.nickname}</div>
            <div>
              <div className='flex items-center'>
                <div className='mr-2'>
                  <CgProfile size={20} />
                </div>
                <div>생년월일 2001년 10월 6일(22세)</div>
              </div>
              <div className='flex'>
                <div className='mr-2 rotate-45'>
                  <FaDna size={16} />
                </div>
                <div>혈액형 A형</div>
              </div>
              <div className='flex'>
                <div className='mr-2'>
                  <IoBodyOutline size={20} />
                </div>
                <div>키 몸무게 162cm / 52kg</div>
              </div>
            </div>
          </div>
        </div>
        <div>편집하기</div>
      </S.Profile>
      <S.Container>
        <S.LeftContainer>
          <S.Summary>
            <div className='flex items-center justify-between'>
              <div>수면 흐름 분석</div>
              <div
                style={{ marginRight: '16px', cursor: 'pointer' }}
                onClick={() => {
                  setShowModal(true);
                }}>
                <HiOutlineChevronRight color='#535353' />
              </div>
            </div>
            <div>기상</div>
            <div>
              <ApexChart
                series={[
                  {
                    data: [
                      {
                        fillColor: '#FF0080',
                        x: '렘 수면',
                        y: [
                          new Date(2022, 11, 10, 0, 30).getTime(),
                          new Date(2022, 11, 10, 0, 40).getTime(),
                        ],
                      },
                    ],
                  },
                  {
                    data: [
                      {
                        fillColor: '#FF0080',
                        x: '렘 수면',
                        y: [
                          new Date(2022, 11, 10, 2, 30).getTime(),
                          new Date(2022, 11, 10, 2, 40).getTime(),
                        ],
                      },
                    ],
                  },
                  {
                    data: [
                      {
                        fillColor: '#344767',
                        x: '얕은 수면',
                        y: [
                          new Date(2022, 11, 10, 1, 30).getTime(),
                          new Date(2022, 11, 10, 1, 40).getTime(),
                        ],
                      },
                    ],
                  },
                  {
                    data: [
                      {
                        fillColor: '#344767',
                        x: '얕은 수면',
                        y: [
                          new Date(2022, 11, 10, 4, 30).getTime(),
                          new Date(2022, 11, 10, 5, 40).getTime(),
                        ],
                      },
                    ],
                  },
                  {
                    data: [
                      {
                        fillColor: '#00DEA3',
                        x: '깊은 수면',
                        y: [
                          new Date(2022, 11, 10, 1, 30).getTime(),
                          new Date(2022, 11, 10, 1, 40).getTime(),
                        ],
                      },
                    ],
                  },
                  {
                    data: [
                      {
                        fillColor: '#00DEA3',
                        x: '깊은 수면',
                        y: [
                          new Date(2022, 11, 10, 1, 45).getTime(),
                          new Date(2022, 11, 10, 1, 55).getTime(),
                        ],
                      },
                    ],
                  },
                  {
                    data: [
                      {
                        fillColor: '#00DEA3',
                        x: '깊은 수면',
                        y: [
                          new Date(2022, 11, 10, 2, 45).getTime(),
                          new Date(2022, 11, 10, 3, 55).getTime(),
                        ],
                      },
                    ],
                  },
                ]}
                options={{
                  plotOptions: {
                    bar: {
                      horizontal: true,
                      barHeight: '90%',
                      rangeBarGroupRows: true,
                    },
                  },
                  chart: { toolbar: { show: false } },
                  fill: { type: 'solid' },
                  xaxis: { type: 'datetime' },
                  yaxis: {
                    labels: {
                      offsetY: 38,
                    },
                  },
                  legend: { show: false },
                  grid: {
                    strokeDashArray: 5,
                  },
                }}
                type='rangeBar'
                height={300}
                width={800}
              />
            </div>
          </S.Summary>
          <S.ThreeContainer>
            <S.MiniContainer>
              <div>
                <div>총 수면 시간</div>
                <div onClick={notReady}>
                  <HiOutlineChevronRight color='#535353' />
                </div>
              </div>
              <div>8시간 15분</div>
              <div>
                <HiArrowTrendingUp size={18} color={'#00dea3'} />
                <div style={{ color: '#00dea3' }}>총 수면 시간 0분 증가</div>
              </div>
            </S.MiniContainer>
            <S.MiniContainer>
              <div>
                <div>렘 수면 시간</div>
                <div onClick={notReady}>
                  <HiOutlineChevronRight color='#535353' />
                </div>
              </div>
              <div>2시간 10분</div>
              <div>
                <HiArrowTrendingDown size={18} color={'#F23985'} />
                <div style={{ color: '#F23985' }}>렘 수면 시간 0분 감소</div>
              </div>
            </S.MiniContainer>
            <S.MiniContainer>
              <div>
                <div>깊은 수면 시간</div>
                <div onClick={notReady}>
                  <HiOutlineChevronRight color='#535353' />
                </div>
              </div>
              <div>1시간 27분</div>
              <div>
                <HiArrowTrendingUp size={18} color={'#00dea3'} />
                <div style={{ color: '#00dea3' }}>깊은 수면 시간 0분 증가</div>
              </div>
            </S.MiniContainer>
          </S.ThreeContainer>
          <S.Activity>
            {heart && (
              <React.Fragment>
                <div>건강 요약</div>
                <div>
                  <div>
                    <FaHeartbeat size={24} color='#fff' />
                  </div>
                  <div>분당 심박수</div>
                  <div>{parseInt(heart[0].valueInCountPerMinute.toString())}회</div>
                  <div>
                    {parseInt(heart[0].valueInCountPerMinute.toString()) -
                      parseInt(heart[1].valueInCountPerMinute.toString())}
                    pt
                  </div>
                  <div onClick={notReady}>
                    <HiOutlineChevronRight color='#535353' />
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
                  <div onClick={notReady}>
                    <HiOutlineChevronRight color='#535353' />
                  </div>
                </div>
                <div>
                  <div>
                    <FaLungs size={24} color='#fff' />
                  </div>
                  <div>분당 호흡수</div>
                  <div>{parseInt(respiratory[0].valueInCountPerMinute.toString())}회</div>
                  <div>
                    +
                    {parseInt(respiratory[0].valueInCountPerMinute.toString()) -
                      parseInt(respiratory[1].valueInCountPerMinute.toString())}
                    pt
                  </div>
                  <div onClick={notReady}>
                    <HiOutlineChevronRight color='#535353' />
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
                <div>
                  <div>
                    <HiCalendarDays size={14} />
                  </div>
                  <div>2022-10-30 ~ 2022-11-05</div>
                </div>
              </div>
              <div>
                <Chart
                  type='bar'
                  options={{
                    plugins: { legend: { display: false } },
                    scales: {
                      xAxes: { grid: { display: false } },
                      yAxes: {
                        ticks: { stepSize: 25 },
                        position: 'right',
                        grid: {
                          borderDash: [3],
                          borderColor: '#E9EAEB',
                        },
                      },
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
                <div>
                  <div>
                    <HiCalendarDays size={14} />
                  </div>
                  <div>2022-10-30 ~ 2022-11-05</div>
                </div>
              </div>
              <div>
                <Chart
                  type='bar'
                  options={{
                    plugins: { legend: { display: false } },
                    scales: {
                      xAxes: { grid: { display: false } },
                      yAxes: {
                        ticks: { stepSize: 25 },
                        position: 'right',
                        grid: {
                          borderDash: [3],
                          borderColor: '#E9EAEB',
                        },
                      },
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
                <div>
                  <div>
                    <HiCalendarDays size={14} />
                  </div>
                  <div>2022-10-30 ~ 2022-11-05</div>
                </div>
              </div>
              <div>
                <Chart
                  type='bar'
                  options={{
                    plugins: { legend: { display: false } },
                    scales: {
                      xAxes: { grid: { display: false } },
                      yAxes: {
                        ticks: { stepSize: 25 },
                        position: 'right',
                        grid: {
                          borderDash: [3],
                          borderColor: '#E9EAEB',
                        },
                      },
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
    </React.Fragment>
  );
}

function Mobile() {
  return <div>Mobile</div>;
}
