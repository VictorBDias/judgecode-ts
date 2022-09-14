import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Typography, Card, Button } from 'shared/components/atoms';
import { ScrollableList, SearchBar } from 'shared/components/molecules';
import { Icon } from 'shared/components/atoms/Icon';
import { useForms } from 'layers/signed/modules/forms/hooks/useForms';
import { IForm } from 'layers/signed/modules/forms/interfaces/forms.interfaces';
import { Container } from './formlist.styles';

const FormList = () => {
  const { deleteForm, forms, lastPage, page, status, listForms } = useForms();
  const navigate = useNavigate();

  //* FUNCTIONS
  const listFormsFunc = useCallback((page = 1) => {
    listForms({ page });
  }, []);

  useEffect(() => {
    listFormsFunc();
  }, []);

  const handlePaginate = useCallback((value) => {
    listForms({ page: page + value });
  }, []);

  const handleSearch = useCallback((value) => {
    listForms({ page: 1, search: value });
  }, []);

  const renderCell = (data: IForm) => (
    <Card
      margin={8}
      onEdit={() => navigate(`/forms/edit/${data.id}`)}
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
          placeholder="Busque uma questão"
          style={{ maxWidth: 400 }}
          onChange={(value: string) => handleSearch(value)}
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
        currentPage={page}
        lastPage={lastPage}
        handlePaginate={handlePaginate}
        renderCell={renderCell}
        size={800}
      />
    </Container>
  );
};
export { FormList };
