import React from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Header from './components/Header';
import ProTip from './ProTip';
import MainContent from './components/MainContent';
import RepoList from './containers/RepoList';
import DevelopersList from './containers/DevelopersList';

const queryClient = new QueryClient();

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Router>
				<Container maxWidth={false} disableGutters={true}>
					<Box my={4} padding="0">
						<Header />
						<MainContent />
						<Switch>
							<Route path="/repositories">
								<RepoList />
							</Route>
							<Route path="/developers">
								<DevelopersList />
							</Route>
							<Redirect from="*" to="/repositories" />
						</Switch>
					</Box>
				</Container>
			</Router>
		</QueryClientProvider>
	);
}
