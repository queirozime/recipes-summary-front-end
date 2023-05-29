import React from 'react';
import { CheckboxContainer, Container, ListDescription, ListInfo } from './list-card.styles';
import { AccessTime } from '@material-ui/icons';
import { Checkbox } from '@material-ui/core';

const ListCard: React.FC<any> = ({ list, checked, onChangeCheck }) => {
    return (
        <Container>
            <CheckboxContainer>
                <Checkbox checked={checked} onChange={(e) => onChangeCheck(list)} />
            </CheckboxContainer>
            <ListDescription>{list.name}</ListDescription>
            <ListInfo>
                <AccessTime />
                22/2/2
            </ListInfo>
        </Container>
    )
}

export default ListCard;