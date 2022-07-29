import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Select from 'react-select';
import { Options } from "./../constants/options"
import { useTheme } from '@emotion/react'
import { Event } from "./../constants/events"

interface Props { }

export const NavBar: React.FC<Props> = (props) => {

    const theme = useTheme()
    const [optimization, setOptimization] = useState(Options[0])
    const [isDarkMode, setIsDarkMode] = React.useState(false);

    const handleMode = (event: React.FormEvent<HTMLInputElement>) => {
        setIsDarkMode(!isDarkMode);
        console.log(event)
    };

    useEffect(() => {
        dispatchEvent(new CustomEvent(Event.DARK_MODE, { detail: isDarkMode }));
    }, [isDarkMode]);

    useEffect(() => {
        dispatchEvent(new CustomEvent(Event.SET_THEME, { detail: optimization }));
    }, [optimization]);

    const onSelect = (event: any) => {
        console.log("DO SOMETHING")
        let index = parseInt(event.value)
        setOptimization(Options[index])
        // let selection = weightedTargets(index)
        // let map = new SwatchMapModel(selection) // need to pass in the full weightedTargets, not just the rows..
        // displaySwatches(map)
    }

    const Wrapper = styled.div`
        background-color: ${theme.color.paperNeutralLight};
        border-bottom: 1px solid ${theme.color.separatorNeutralBright};;
        width: 100%;
        height: 88px;
        padding-bottom: 22px;
`;

    const Container = styled.div`
        display: grid;
        width: 100%;
        height: 100%;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;
        align-self: center;
        align-items: center;
        justify-content: center;
`;

    const ContainerLeft = styled.div`
        grid-row: 1 / 4;
        grid-column: 1 / 2;
        display: flex;
        justify-content: left;
        align-items: center;
        padding-left: 44px;
`;

    const ContainerCenter = styled.div`
        grid-row: 1 / 4;
        grid-column: 2 / 3;
        display: flex;
        justify-content: center;
        align-items: center;
`;

    const ContainerRight = styled.div`
        grid-row: 1 / 4;
        grid-column: 3 / 4;
        display: flex;
        justify-content: right;
        align-items: center;
        padding-right: 44px;
`;

    const DropdownContainer = styled.div`
        width: 220px;
        padding-left: 24px;
        text-align: left;
        display: flex;
        align-items: center;

`;

    return (

        <Wrapper>
            <Container>
                <ContainerLeft>
                    <DropdownContainer>
                        <Select
                            value={optimization}
                            onChange={onSelect}
                            options={Options}
                        />
                    </DropdownContainer>

                    <div>
                        <label>
                            <input type="checkbox" checked={isDarkMode} onChange={ handleMode } />
                            Dark Mode
                        </label>
                    </div>

                </ContainerLeft>
                <ContainerCenter></ContainerCenter>
                <ContainerRight>  </ContainerRight>
            </Container>
        </Wrapper>
    )

}

export default NavBar;