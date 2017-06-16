import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { toggleMenu } from '../actions';
import { PageContainer, Portrait } from '../components';
import { devices } from '../styles';

const PicWrapper = styled.div`
	width: 50%;
	margin: 0 auto;
	margin-top: 30px;
`

const NameTitle = styled.h1`
	position: relative;	
	margin: -20px;
	text-align: center;
	font-size: 8vw;
	font-weight: 300;
	height: 90px;
	line-height: 90px;
	color: ${props => props.theme.primary};
	${devices.small`
        margin: -10px;
    `}
	${devices.tablet`
        margin: 20px;
    `}
`;

const Subtitle = styled.div`
	margin: -20px;
	text-align: center;
	font-size: 3.5vw;
	font-weight: 100;
	height: 40px;
	line-height: 40px;
	${devices.small`
        margin: -10px;
    `}
	${devices.tablet`
        margin: 20px;
    `}
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