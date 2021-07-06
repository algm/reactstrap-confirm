import 'core-js/stable';
import 'regenerator-runtime';
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

    const handleCustomButtons = async () => {
        const CustomComponent = ({ onClose }) => (
            <div>
                <p>I added a custom component for buttons!!</p>
                <Button
                    className="custom-button"
                    onClick={() => onClose(true)}
                    color="secondary"
                >
                    This is a custom component
                </Button>
            </div>
        );

        let result = await confirm({
            buttonsComponent: CustomComponent
        });

        alert(`Confirm result: ${result}`);
    };

    const handleCustomBodyComponent = async () => {
        const CustomComponent = () => (
            <div>
                this is <b>custom component</b> as a body
            </div>
        );

        let result = await confirm({
            bodyComponent: CustomComponent,
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

        alert(`Confirm Body component rendered: ${result}`);
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

            <Button block onClick={handleCustomButtons}>
                Custom Buttons Component
            </Button>
            
            <Button block onClick={handleCustomBodyComponent}>
                Custom Body Component
            </Button>
            
        </Container>
    );
};

render(<Example />, document.getElementById('app'));
