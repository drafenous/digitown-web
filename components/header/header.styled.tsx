import styled from 'styled-components';
import { FaPowerOff, FaExpandArrowsAlt, FaCompressArrowsAlt } from 'react-icons/fa'


interface IHeaderColumnProps {
    alignContent?: 'left' | 'right';
}

export const Wrapper = styled.header`
    background-color: #2c3e50;
    color: #ecf0f1;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
`

export const HeaderColumn = styled.div`
    width: 300px;
    display: flex;
    justify-content: ${(props: IHeaderColumnProps) => props.alignContent === 'right' ? 'flex-end' : 'flex-start'};
`

export const InvisibleButton = styled.button`
    background-color: #34495e00;
    border: none;
    cursor: pointer;
    transition: all 200ms ease-in-out;
    padding: 1rem;
    height: 64px;
    min-width: 64px;
    &:hover {
        background-color: #34495e;
    }
`

export const LogoutIcon = styled(FaPowerOff)`
    color: #c0392b;
    font-size: 1.5rem;
`

export const FullScreenIcon = styled(FaExpandArrowsAlt)`
    color: #fff;
    font-size: 1.5rem;
`

export const DisableFullScreenIcon = styled(FaCompressArrowsAlt)`
    color: #fff;
    font-size: 1.5rem;
`