import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    
    justify-content: center;
    align-items: center;
`;

export const InputFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`;

export const RegistrationContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 500px;
    border-radius: 10px;
    border: 3px solid ${({theme}) => theme.colors.purple};
    align-items: center;
    padding: 30px 20px;
`;