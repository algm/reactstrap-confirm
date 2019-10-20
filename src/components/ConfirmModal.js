import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const ConfirmModal = ({
    onClose,
    message,
    title,
    confirmText,
    cancelText,
    confirmColor,
    cancelColor,
    className,
    buttonsComponent
}) => {
    let buttonsContent = (
        <>
            {cancelText && (
                <Button color={cancelColor} onClick={() => onClose(false)}>
                    {cancelText}
                </Button>
            )}{' '}
            <Button color={confirmColor} onClick={() => onClose(true)}>
                {confirmText}
            </Button>
        </>
    );

    if (buttonsComponent) {
        const CustomComponent = buttonsComponent;
        buttonsContent = <CustomComponent onClose={onClose} />;
    }

    return (
        <Modal
            isOpen
            toggle={() => onClose(false)}
            className={`reactstrap-confirm ${className}`}
        >
            {title && (
                <ModalHeader toggle={() => onClose(false)}>
                    {title || null}
                </ModalHeader>
            )}
            <ModalBody>{message}</ModalBody>
            <ModalFooter>{buttonsContent}</ModalFooter>
        </Modal>
    );
};

ConfirmModal.defaultProps = {
    message: 'Are you sure?',
    title: 'Warning!',
    confirmText: 'Ok',
    cancelText: 'Cancel',
    confirmColor: 'primary',
    cancelColor: '',
    className: '',
    buttonsComponent: null
};

ConfirmModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    message: PropTypes.node,
    title: PropTypes.node,
    confirmText: PropTypes.node,
    cancelText: PropTypes.node,
    confirmColor: PropTypes.string,
    cancelColor: PropTypes.string,
    className: PropTypes.string,
    buttonsComponent: PropTypes.func
};

export default ConfirmModal;
