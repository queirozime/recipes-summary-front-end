import React from 'react';
import { CheckboxContainer, Container, ListDescription, ListInfo } from './list-card.styles';
import { AccessTime } from '@material-ui/icons';
import { Checkbox } from '@material-ui/core';
import { useNavigate, useSearchParams } from 'react-router-dom';

const ListCard: React.FC<any> = ({ list, checked, onChangeCheck }) => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const date = new Date(list.lastAlterationDate._seconds*1000)
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    return (
        <Container onClick={(e) => {
            e.stopPropagation();
            navigate('/list-view')
            setSearchParams({ listId: list.shoplistId })
        }}>
            <CheckboxContainer onClick={(e) => e.stopPropagation()}>
                <Checkbox checked={checked} onChange={(e) => {
                    onChangeCheck(list)
                    e.stopPropagation();
                }} />
            </CheckboxContainer>
            <ListDescription>{list.title}</ListDescription>
            <ListInfo>
                <AccessTime />
                {`${day}/${month+1}/${year}`}
            </ListInfo>
        </Container>
    )
}

export default ListCard;