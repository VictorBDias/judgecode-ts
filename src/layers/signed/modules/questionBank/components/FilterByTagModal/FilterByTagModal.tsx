import React, { useState } from 'react';
import { TagGroup } from 'shared/components/atoms';
import { Modal } from 'shared/components/molecules';

// import { Container } from './styles';

const tagMock = [
  {
    label: 'Código',
    selected: false,
  },
  {
    label: 'Ordenar',
    selected: true,
  },
];

const FilterByTagModal = ({ show, onClose }: any) => {
  const [filters, setFilters] = useState<string[]>([]);
  return (
    <Modal
      show={show}
      onClose={onClose}
      title="Filtrar por TAGS"
      onSubmit={() => console.log(filters)}
    >
      <TagGroup data={tagMock} />
    </Modal>
  );
};

export default FilterByTagModal;
