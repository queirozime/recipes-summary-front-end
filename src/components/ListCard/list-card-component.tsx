import React from 'react';
import { CheckboxContainer, Container, ListDescription, ListInfo } from './list-card.styles';
import { AccessTime } from '@material-ui/icons';
import { Checkbox } from '@material-ui/core';
import { useNavigate, useSearchParams } from 'react-router-dom';

const ListCard: React.FC<any> = ({ list, checked, onChangeCheck }) => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <Container onClick={(e) => {
            e.stopPropagation();
            navigate('/list-view')
            setSearchParams({ listId: list.id })
        }}>
            <CheckboxContainer onClick={(e) => e.stopPropagation()}>
                <Checkbox checked={checked} onChange={(e) => {
                    onChangeCheck(list)
                    e.stopPropagation();
                }} />
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