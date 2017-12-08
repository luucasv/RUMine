import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AuthProvider from '../lib/AuthProvider';
import Paper from 'material-ui/Paper';
import { orange400 } from 'material-ui/styles/colors';
import '../css/LoginForm.css';

const orangeTheme = getMuiTheme({
  palette: {
    primary1Color: orange400
  }
});

class Buy extends Component {
  constructor(props) {
    super(props);
    // Quantidade de refeicões a serem adquiridas
    this.state = {
      quantCafe: '',
      quantAlmoco: '',
      quantJantar: '',
    }
    console.log('ans',this.state.ans)
  }

  handleqCafeChange(event) {
    this.setState({
        quantCafe: event.target.value
    });
  }

  handleqAlmocoChange(event) {
    this.setState({
      quantAlmoco: event.target.value
    });
  }

  handleqJantarChange(event) {
    this.setState({
      quantJantar: event.target.value
    });
  }

  render() {
    return (
      <div className='whole-page'>

        {/* Logo da pagina de compras */}
        <div className='logo-img2'></div>

        {/* Formulario para preencher as quantidades */}
        <form>
          <MuiThemeProvider muiTheme={orangeTheme}>
          <div style={{marginLeft: 'auto', textAlign:'center'}}>
            <br />

            {/* Quantitade de cafe da manha */}
            <TextField 
            floatingLabelText={'Quantos cafés da manhã?'}
            floatingLabelStyle={{color: 'white'}}
            inputStyle={{color: 'white'}}
            value={this.state.quantCafe}
            onChange={this.handleqCafeChange.bind(this)}
            />

            {/* Quantitade de almoço */}
            <TextField 
            floatingLabelText={'Quantos almoços?'}
            floatingLabelStyle={{color: 'white'}}
            inputStyle={{color: 'white'}}
            value={this.state.quantAlmoco}
            onChange={this.handleqAlmocoChange.bind(this)}
            />

            {/* Quantitade de jantar */}
            <TextField 
            floatingLabelText={'Quantos jantares?'}
            floatingLabelStyle={{color: 'white'}}
            inputStyle={{color: 'white'}}
            value={this.state.quantJantar}
            onChange={this.handleqJantarChange.bind(this)}
            />
          </div>
          </MuiThemeProvider>

          {/* Um calculo é feito da seguinte forma:
              Sejam x, y e z a quantitade respectiva de cafe, 
              almoço e jantar a serem adquiridos.
              Total a ser pago = R$5.00*(cafe da manha) +
                                 R$3.00*(almoço + jantar) */}
          <Paper style={{display:'inline-block', width:'80%', marginTop:'5%', marginLeft:'10%', textAlign:'center'}}>
                <p>Total= R${5*this.state.quantCafe + 3*this.state.quantAlmoco + 3*this.state.quantJantar}</p>
          </Paper>
          

          {/* Botoes */}
          <MuiThemeProvider muiTheme={orangeTheme}>
          <div style={{display:'inline-block', textAlign:'center', marginTop:'3%', marginLeft: '22%'}}>
            <RaisedButton primary={true} 
                          label={'Comprar'} style={{margin: 8}}/>
            <Link to='/home'>
              <RaisedButton label={'Voltar'} />
            </Link>
          </div>
        </MuiThemeProvider>
          </form>
      </div>
    );
  }
}

const Form = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
`;

export default Buy;