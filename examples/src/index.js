import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Button, Container } from 'reactstrap';
import confirm from '../../src/index';

const Example = () => {
    const handleBasic = async () => {
        let result = await confirm();

        alert(`Confirm result: ${result}`);
    };

    const handleCustom = async () => {
        let result = await confirm({
            title: (
                <>
                    Content can have <strong>JSX</strong>!
                </>
            ),
            message: 'This is a custom message',
            confirmText: 'Custom confirm message',
            confirmColor: 'primary',
            cancelColor: 'link text-danger'
        });

        alert(`Confirm result: ${result}`);
    };

    const handleAlert = async () => {
        let result = await confirm({
            title: null,
            message: 'I can use this component to display alerts!',
            confirmText: 'Understood!',
            confirmColor: 'primary',
            cancelText: null
        });

        alert(`Confirm result: ${result}`);
    };

    return (
        <Container>
            <Button block onClick={handleBasic}>
                Basic confirm
            </Button>

            <Button block onClick={handleCustom}>
                Custom confirm
            </Button>

            <Button block onClick={handleAlert}>
                Alert style
            </Button>
        </Container>
    );
};

render(<Example />, document.getElementById('app'));
