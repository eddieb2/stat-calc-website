import React from 'react';
import styled from 'styled-components';
import { TextField, Button } from '@material-ui/core';

const FormContainer = styled.div`
	display: flex;
	justify-content: center;
`;

const FormWrapper = styled.form`
	display: flex;
	flex-direction: column;
	width: 50%;
	border: 1px solid black;
	padding: 1%;
`;

const Form = () => {
	return (
		<FormContainer>
			<FormWrapper>
				<TextField multiline label='Number Set' />
				<Button type='submit'>Submit</Button>
			</FormWrapper>
		</FormContainer>
	);
};

export default Form;
