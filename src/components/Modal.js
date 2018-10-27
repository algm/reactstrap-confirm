import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

export default class ConfirmModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalOpen: true
        };

        this.confirm = this.confirm.bind(this);
        this.cancel = this.cancel.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    toggle(result = true) {
        this.setState({
            modalOpen: !this.state.modalOpen
        });

        if (typeof this.props.onClose === 'function') {
            this.props.onClose(result);
        }
    }

    confirm() {
        this.toggle(true);
    }

    cancel() {
        this.toggle(false);
    }

    render() {
        const {
            message,
            title,
            confirmText,
            cancelText,
            confirmColor,
            cancelColor,
            className
        } = this.props;

        let modalHeader = null;
        let cancelButton = null;

        if (title) {
            modalHeader = (
                <ModalHeader toggle={() => {
                    this.toggle(false);
                }}>{title}</ModalHeader>
            );
        }

        if (cancelText) {
            cancelButton = (
                <Button color={cancelColor} onClick={this.cancel}>
                    {cancelText}
                </Button>
            );
        }

        return (
            <Modal isOpen={this.state.modalOpen} toggle={() => {
                this.toggle(false);
            }} className={className}>
                {modalHeader}
                <ModalBody>{message}</ModalBody>
                <ModalFooter>
                    {cancelButton}{' '}
                    <Button color={confirmColor} onClick={this.confirm}>
                        {confirmText}
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }
}
