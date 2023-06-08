import React from 'react';
import { CheckboxContainer, Container, ListDescription, ListInfo, FavIcon } from './list-card.styles';
import { AccessTime } from '@material-ui/icons';
import { Checkbox } from '@material-ui/core';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Icon } from "@material-ui/core";
import { Check, StarBorder, Star, Create, Search } from "@material-ui/icons";

const ListCard: React.FC<any> = ({ list, checked, onChangeCheck, hasCheck=true }) => {
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
          
            {hasCheck && (
                <FavIcon
                onClick={(e) => {
                  onChangeCheck(list)
                  e.stopPropagation();
                }}
              >
                {checked ? (
                  <Icon
                    component={Star}
                    style={{ color: "#ECDD58", fontSize: 30 }}
                  />
                ) : (
                  <Icon
                    component={StarBorder}
                    style={{ color: "black", fontSize:30 }}
                  />
                )}
              </FavIcon>
            )}
            <ListDescription>{list.title}</ListDescription>
            <Icon
                    component={Search}
                    style={{ color: "black", fontSize:30 }}
            />
            <ListInfo>
            
                <AccessTime />
                {`${day}/${month+1}/${year}`}
            </ListInfo>
        </Container>
    )
}

export default ListCard;