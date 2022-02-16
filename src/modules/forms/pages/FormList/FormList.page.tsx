import React from 'react';
// import { useHistory } from 'react-router-dom';

// CUSTOM IMPORTS
import { Box, Button } from '@chakra-ui/react';
import {
  Typography,
  // Icon,
  // Button,
} from '../../../../shared/components/atoms';
import { Container } from './formlist.styles';
// import Card from '../../../../../shared/components/atoms/Card';
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
    <Box height={140} width={300} margin={8}>
      <Typography>{mock.title}</Typography>
      <Typography>{mock.description}</Typography>
    </Box>
  );

  return (
    <Container>
      <Typography variant="title">{mockup[0].title}</Typography>
      <Typography variant="title" style={{ marginBottom: 16 }}>
        Formulários
      </Typography>

      <Button colorScheme="blue"><Typography variant="whiteSubTitle" onClick={() => console.log('kk')}>Criar formulário</Typography></Button>

      <ScrollableList
        data={mockup}
        renderCell={renderCell}
        size={600}
      />
    </Container>
  );
};
export { FormList };
