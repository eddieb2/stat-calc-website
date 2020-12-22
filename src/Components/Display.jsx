import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

// const DisplayWrapper = styled.div`
// 	display: flex;
// 	justify-content: center;
// `;

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: '2%',
		flexGrow: 1,
		border: '1px solid black',
	},
	gridPosition: {
		display: 'flex',
		justifyContent: 'center',
		border: '1px solid black',
	},
	demo: {
		backgroundColor: theme.palette.background.paper,
	},
	title: {
		margin: theme.spacing(4, 0, 2),
	},
}));

function generate(element) {
	return [0, 1, 2, 3].map((value) =>
		React.cloneElement(element, {
			key: value,
		})
	);
}

const Display = () => {
	const classes = useStyles();
	const [secondary, setSecondary] = React.useState(true);

	return (
		<div className={classes.root}>
			<Grid
				container
				spacing={2}
				className={classes.gridPosition}
			>
				<Grid item xs={12} md={6}>
					<Typography
						variant='h6'
						className={classes.title}
					>
						Results
					</Typography>
					<div className={classes.demo}>
						<List>
							{generate(
								<ListItem>
									<ListItemText
										primary='Single-line item'
										secondary={
											secondary
												? 'Secondary text'
												: null
										}
									/>
								</ListItem>
							)}
						</List>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default Display;
