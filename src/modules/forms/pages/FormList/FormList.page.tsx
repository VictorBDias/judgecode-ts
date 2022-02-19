import React from 'react';
// import { useHistory } from 'react-router-dom';

// CUSTOM IMPORTS
import { Box } from '@chakra-ui/react';
import {
  Typography,
  Card,
  // Icon,
  Button,
} from '../../../../shared/components/atoms';
import { Container } from './formlist.styles';
import { ScrollableList } from '../../../../shared/components/molecules';
import { ScrollableListProps } from '../../../../shared/components/molecules/ScrollableList/scrollableList.interfaces';

const mockup = [
  {
    id: 1,
    title: 'Form 1',
    description: 'Eng. Software 2021',
  },
  {
    id: 2,
    title: 'Form 2',
    description: 'Eng. Software 2021',
  },
  {
    id: 3,
    title: 'Form 3',
    description: 'Eng. Comp 2022',
  },
  {
    id: 4,
    title: 'Form 4',
    description: 'Ads',
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor a la simet lorem ipsim',
    description: 'Eng. Software 2021',
  },
  {
    id: 1,
    title: 'Form 1',
    description: 'Eng. Software 2021',
  },
  {
    id: 2,
    title: 'Form 2',
    description: 'Eng. Software 2021',
  },
  {
    id: 3,
    title: 'Form 3',
    description: 'Eng. Comp 2022',
  },
  {
    id: 4,
    title: 'Form 4',
    description: 'Ads',
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor a la simet lorem ipsim',
    description: 'Eng. Software 2021',
  },
  {
    id: 1,
    title: 'Form 1',
    description: 'Eng. Software 2021',
  },
  {
    id: 2,
    title: 'Form 2',
    description: 'Eng. Software 2021',
  },
  {
    id: 3,
    title: 'Form 3',
    description: 'Eng. Comp 2022',
  },
  {
    id: 4,
    title: 'Form 4',
    description: 'Ads',
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor a la simet lorem ipsim',
    description: 'Eng. Software 2021',
  },
  {
    id: 1,
    title: 'Form 1',
    description: 'Eng. Software 2021',
  },
  {
    id: 2,
    title: 'Form 2',
    description: 'Eng. Software 2021',
  },
  {
    id: 3,
    title: 'Form 3',
    description: 'Eng. Comp 2022',
  },
  {
    id: 4,
    title: 'Form 4',
    description: 'Ads',
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor a la simet lorem ipsim',
    description: 'Eng. Software 2021',
  },
  {
    id: 1,
    title: 'Form 1',
    description: 'Eng. Software 2021',
  },
  {
    id: 2,
    title: 'Form 2',
    description: 'Eng. Software 2021',
  },
  {
    id: 3,
    title: 'Form 3',
    description: 'Eng. Comp 2022',
  },
  {
    id: 4,
    title: 'Form 4',
    description: 'Ads',
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor a la simet lorem ipsim',
    description: 'Eng. Software 2021',
  },
];

type MockType ={
  id: number,
  title: string,
  description: string,
}
const FormList = () => {
// STATES
// const history = useHistory();

  // FUNCTIONS
  const renderCell = (mock : any) => (
    <Card margin={8}>
      <Typography>{mock.title}</Typography>
      <Typography>{mock.description}</Typography>
    </Card>
  );

  return (
    <Container>
      <Typography variant="title">{mockup[0].title}</Typography>
      <Typography variant="title" style={{ marginBottom: 16 }}>
        Formulários
      </Typography>

      <Button color="lightSecondary" onClick={() => {}} style={{ marginBottom: 8 }}>Criar formulário</Button>

      <ScrollableList
        style={{ marginLeft: -4, marginBottom: 40 }}
        data={mockup}
        renderCell={renderCell}
        size={800}
      />
    </Container>
  );
};
export { FormList };
