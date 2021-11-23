import { ReactChild, useState } from "react";
import { HeaderComponent } from "..";
import { Container } from '@bootstrap-styled/v4';

interface IProps {
    children: ReactChild
}

export const Layout = ({ children }: IProps) => {
    const [isFullScreen, setIsFullScreen] = useState(false)
    return (
        <>
            <HeaderComponent handleChangeFullScreen={(value) => setIsFullScreen(value)}></HeaderComponent>
            <Container fluid={!isFullScreen}>{children}</Container>
        </>
    )
}
