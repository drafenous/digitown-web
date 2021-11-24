import { FaUserCircle } from 'react-icons/fa'
import styled from 'styled-components'
import Image from 'next/image'

export const LoginWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`

export const LoginBox = styled.div`
    background-color: #ffffff;
    border-bottom: 3px solid #2c3e50;
    border-radius: 3px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    width: 600px;
`

export const FormWrapper = styled.div`
    width: 300px;
`

export const Logo = styled(Image).attrs({
    src: '/logo.png',
    layout: 'fixed',
    width: 200,
    height: 200,
})`
    margin-right: 3rem;
    width: 100%;
`