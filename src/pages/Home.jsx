import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { toggleMenu } from '../actions';
import { PageContainer, Portrait } from '../components';

const PicWrapper = styled.div`
	width: 50%;
	margin: 0 auto;
	margin-top: 30px;
`

const NameTitle = styled.h1`
	position: relative;	
	margin: 20px;
	text-align: center;
	font-size: 120px;
	font-weight: 300;
	height: 90px;
	line-height: 90px;
	color: ${props => props.theme.black};
`;

const Subtitle = styled.div`
	margin: 20px;
	text-align: center;
	font-size: 50px;
	font-weight: 100;
	height: 40px;
	line-height: 40px;
`;

class Home extends React.Component {
	componentDidMount() {
		if(this.props.menu){
			this.props.dispatch(toggleMenu(false));
		}
	}

	render(){
		return (
				<PageContainer>
					<PicWrapper>
						<Portrait/>
					</PicWrapper>
					<NameTitle> 
						Mariano Montori 
						<Subtitle> web developer </Subtitle>
					</NameTitle>
				</PageContainer>
		)
	}
}

function mapStateToProps(state) {
		var { menu } = state.menu;
		return{
			menu
		}
}

export default connect(mapStateToProps)(Home)