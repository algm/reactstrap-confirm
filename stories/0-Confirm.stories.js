import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import confirm from '../src/index';
import {
    Button,
    Container,
    Card,
    CardImg,
    CardBody,
    CardText,
} from 'reactstrap';

export default {
    title: 'Confirm dialog',
};

export const basic = () => {
    const [confirmed, setConfirmed] = useState(false);

    const basicDialog = async () => {
        const result = await confirm();

        setConfirmed(result);
    };

    return (
        <Container class="py-3">
            <p>By default, the confirm function will render a basic dialog.</p>
            <Button onClick={basicDialog}>Confirm</Button>
            <p>
                <strong>Confirmed:</strong> {confirmed ? 'true' : 'false'}
            </p>
        </Container>
    );
};

export const customized = () => {
    const [confirmed, setConfirmed] = useState(false);

    const customizedDialog = async () => {
        const result = await confirm({
            title: 'I am a custom title 😍',
            message: (
                <Card>
                    <CardImg
                        top
                        width="100%"
                        src="//picsum.photos/640/480"
                        alt="Card image cap"
                    />
                    <CardBody>
                        <CardText>
                            You can customize the message using anything you
                            want!
                        </CardText>
                    </CardBody>
                </Card>
            ),
            confirmColor: 'danger',
            cancelText: "I am not sure, don't do anything",
            confirmText: 'Yes, I am sure, proceed!',
            size: 'sm',
        });

        setConfirmed(result);
    };

    return (
        <Container class="py-3">
            <p>
                You have a lot of customization options, see{' '}
                <a
                    href="https://github.com/algm/reactstrap-confirm"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Readme
                </a>{' '}
                for options.
            </p>
            <Button onClick={customizedDialog}>Confirm</Button>
            <p>
                <strong>Confirmed:</strong> {confirmed ? 'true' : 'false'}
            </p>
        </Container>
    );
};

export const Alert = () => {
    const alertDialog = async () => {
        await confirm({
            title: 'Warning!',
            message:
                'You can use the confirm function as a way to display alerts!',
            cancelText: null,
            confirmText: 'Understood!',
        });
    };

    return (
        <Container class="py-3">
            <p>
                This module can also be used for displaying alerts if you pass
                the cancelText as null (that will hide the cancel action).
            </p>
            <Button onClick={alertDialog}>Display alert</Button>
        </Container>
    );
};

export const customButtonsComponent = () => {
    const [confirmed, setConfirmed] = useState(false);

    const customButtonsDialog = async () => {
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

        const result = await confirm({
            buttonsComponent: CustomComponent,
        });

        setConfirmed(result);
    };

    return (
        <Container class="py-3">
            <p>
                You can pass a custom buttons component to customize the
                behavior even further!
            </p>
            <Button onClick={customButtonsDialog}>Confirm</Button>
            <p>
                <strong>Confirmed:</strong> {confirmed ? 'true' : 'false'}
            </p>
        </Container>
    );
};

/*import { Button } from '@storybook/react/demo';

export default {
  title: 'Button',
};

export const text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
*/
