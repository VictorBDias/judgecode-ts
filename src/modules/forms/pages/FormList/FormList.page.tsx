import React from 'react';
import { useNavigate } from 'react-router-dom';

// CUSTOM IMPORTS
import { Box } from '@chakra-ui/react';
import {
  Typography,
  Card,
  // Icon,
  Button,
} from '../../../../shared/components/atoms';
import { Container } from './formlist.styles';
import {
  ScrollableList,
  SearchBar,
} from '../../../../shared/components/molecules';
import { Icon } from '../../../../shared/components/atoms/Icon';

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

type MockType = {
  id: number;
  title: string;
  description: string;
};
const FormList = () => {
  // STATES
  const navigate = useNavigate();

  // FUNCTIONS
  const renderCell = (mock: any) => (
    <Card
      margin={8}
      onEdit={() => console.log('Edit')}
      onDelete={() => console.log('Delete')}
    >
      <Typography>{mock.title}</Typography>
      <Typography>{mock.description}</Typography>
    </Card>
  );

  return (
    <Container>
      <Typography variant="title" style={{ marginBottom: 16, marginTop: 40 }}>
        Formulários
      </Typography>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <SearchBar
          placeholder="Busque um formulário"
          style={{ maxWidth: 400 }}
        />

        <Button
          leftIcon={<Icon name="plus" variant="white" />}
          onClick={() => navigate('/forms/create')}
          size="md"
          style={{ marginLeft: 24 }}
        >
          Criar formulário
        </Button>
      </div>

      <ScrollableList
        style={{ marginLeft: -4, marginBottom: 40, marginTop: 16 }}
        data={mockup}
        renderCell={renderCell}
        size={800}
      />
    </Container>
  );
};
export { FormList };
