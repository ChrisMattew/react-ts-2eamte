import React from 'react';
import './style';
import Kpi from '../Kpi';
import {
  faCheckCircle,
  faPerson,
  faRedo,
  faBanSmoking,
  faBoxOpen,
  faPeopleGroup,
} from '@fortawesome/free-solid-svg-icons';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons/faExclamationTriangle';
import classnames from 'classnames';

const kpis = [
  {
    id: 1,
    title: 'Total Projects',
    value: 1,
    icon: faBoxOpen,
  },
  {
    id: 2,
    icon: faCheckCircle,
    title: 'Completed',
    value: 2,
  },
  {
    id: 3,
    icon: faRedo,
    title: 'Ongoing',
    value: 3,
  },
  {
    id: 4,
    icon: faExclamationTriangle,
    error: true,
    title: 'Delayed',
    value: 4,
  },
  {
    id: 5,
    icon: faPeopleGroup,
    title: 'Employes',
    value: 5,
  },
];
type Props = {
  className?: string;
};
const KpiContainer = ({ className }: Props) => {
  return (
    <section className={classnames('kpi-container', className)}>
      {kpis.map((kpi) => (
        <Kpi key={kpi.id} {...kpi} />
      ))}
    </section>
  );
};

export default KpiContainer;
