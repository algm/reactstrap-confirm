import 'babel-polyfill';
import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Button, Container } from 'reactstrap';
import confirm from '../../src/index';

class Example extends Component {
    async handleBasic() {
        let result = await confirm();

        alert(`Confirm result: ${result}`);
    }

    async handleCustom() {
        let result = await confirm({
            title: (
                <Fragment>
                    Content can have <strong>JSX</strong>!
                </Fragment>
            ),
            message: 'This is a custom message',
            confirmText: 'Custom confirm message',
            confirmColor: 'primary',
            cancelColor: 'link text-danger'
        });

        alert(`Confirm result: ${result}`);
    }

    async handleAlert() {
        let result = await confirm({
            title: null,
            message: 'I can use this component to display alerts!',
            confirmText: 'Understood!',
            confirmColor: 'primary',
            cancelText: null
        });

        alert(`Confirm result: ${result}`);
    }

    render() {
        return (
            <Container>
                <Button block onClick={this.handleBasic.bind(this)}>
                    Basic confirm
                </Button>

                <Button block onClick={this.handleCustom.bind(this)}>
                    Custom confirm
                </Button>

                <Button block onClick={this.handleAlert.bind(this)}>
                    Alert style
                </Button>
            </Container>
        );
    }
}

ReactDOM.render(<Example />, document.getElementById('app'));
