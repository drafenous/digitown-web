import { Tooltip } from '@bootstrap-styled/v4';
import { useRouter } from 'next/router';
import { useCallback, useState } from "react";
import { DisableFullScreenIcon, FullScreenIcon, HeaderColumn, InvisibleButton, LogoutIcon, Wrapper } from "./header.styled";

interface IProps {
    handleChangeFullScreen: (value: boolean) => any
}

export const HeaderComponent = ({handleChangeFullScreen}: IProps) => {
    const router = useRouter()
    const [tooltipState, setTooltipState] = useState({ logoutIsOpen: false, fullScreenIsOpen: false })
    const [fullScreen, setFullScreen] = useState(true);

    const handleFullScreen = useCallback(() => {
        setFullScreen(!fullScreen);
        handleChangeFullScreen(fullScreen);
    }, [fullScreen, handleChangeFullScreen])

    const handleLogout = () => {
        router.push('/user/login', undefined, { shallow: true })
    }
    return (<>
        <Wrapper>
            <HeaderColumn>Logo</HeaderColumn>
            <HeaderColumn alignContent="right">
                <InvisibleButton onClick={handleFullScreen} id="fullScreenButton">
                    {fullScreen ? <DisableFullScreenIcon /> : <FullScreenIcon />}
                </InvisibleButton>
                <InvisibleButton onClick={handleLogout} id="logoutButton">
                    <LogoutIcon />
                </InvisibleButton>
            </HeaderColumn>
        </Wrapper>
        <Tooltip isOpen={tooltipState.logoutIsOpen} target="logoutButton" toggle={() => setTooltipState({ ...tooltipState, logoutIsOpen: !tooltipState.logoutIsOpen })}>
            Deslogar-se
        </Tooltip>
        <Tooltip isOpen={tooltipState.fullScreenIsOpen} target="fullScreenButton" toggle={() => setTooltipState({ ...tooltipState, fullScreenIsOpen: !tooltipState.fullScreenIsOpen })}>
            {fullScreen ? 'Visualização compacta' : 'Visualização em tela cheia'}
        </Tooltip>
    </>
    )
}
