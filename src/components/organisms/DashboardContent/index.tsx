import React from 'react';
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

import * as S from './styled';

import { MEDIA } from '../../../constants';

const { minWidth } = MEDIA;

export default function DashboardContent() {
  const isDesktop = useMediaQuery({ minWidth });

  return isDesktop ? <Desktop /> : <Mobile />;
}

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

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      type: 'line' as const,
      label: 'Dataset 1',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 2,
      fill: false,
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    },
    {
      type: 'bar' as const,
      label: 'Dataset 2',
      backgroundColor: 'rgb(75, 192, 192)',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'white',
      borderWidth: 2,
    },
    {
      type: 'bar' as const,
      label: 'Dataset 3',
      backgroundColor: 'rgb(53, 162, 235)',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    },
  ],
};

function Desktop() {
  return (
    <S.Container>
      <S.LeftContainer>
        <S.Summary></S.Summary>
        <S.ThreeContainer>
          <S.MiniContainer></S.MiniContainer>
          <S.MiniContainer></S.MiniContainer>
          <S.MiniContainer></S.MiniContainer>
        </S.ThreeContainer>
        <S.Activity></S.Activity>
      </S.LeftContainer>
      <S.RightContainer>
        <S.BarGraphContainer></S.BarGraphContainer>
        <S.BarGraphContainer></S.BarGraphContainer>
        <S.BarGraphContainer></S.BarGraphContainer>
      </S.RightContainer>
    </S.Container>
  );
}

function Mobile() {
  return <div>Mobile</div>;
}
