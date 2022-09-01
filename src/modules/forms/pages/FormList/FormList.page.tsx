import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Typography, Card, Button } from 'shared/components/atoms';
import { ScrollableList, SearchBar } from 'shared/components/molecules';
import { Icon } from 'shared/components/atoms/Icon';
import { useForms } from 'modules/forms/hooks/useForms';
import { IForm } from 'modules/forms/interfaces/forms.interfaces';
import { Container } from './formlist.styles';

const FormList = () => {
  const {
    createForm,
    deleteForm,
    forms,
    lastPage,
    page,
    status,
    listForms,
    updateForm,
  } = useForms();
  const navigate = useNavigate();

  //* FUNCTIONS
  const listFormsFunc = useCallback((page = 1) => {
    listForms({ page: 1 });
  }, []);

  useEffect(() => {
    listFormsFunc();
  }, []);

  const renderCell = (data: IForm) => (
    <Card
      margin={8}
      onEdit={() => console.log('Edit')}
      onDelete={() => deleteForm({ id: data.id })}
    >
      <Typography>{data.name}</Typography>
      <Typography>{data.description}</Typography>
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
        data={forms}
        renderCell={renderCell}
        size={800}
      />
    </Container>
  );
};
export { FormList };
