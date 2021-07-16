import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

const ConfirmModal = ({
    onClose,
    message,
    title,
    confirmText,
    cancelText,
    confirmColor,
    cancelColor,
    className,
    buttonsComponent,
    size,
    bodyComponent,
}) => {
    let buttonsContent = (
        <Fragment>
            {cancelText && (
                <Button color={cancelColor} onClick={() => onClose(false)}>
                    {cancelText}
                </Button>
            )}{" "}
            <Button color={confirmColor} onClick={() => onClose(true)}>
                {confirmText}
            </Button>
        </Fragment>
    );

    if (buttonsComponent) {
        const CustomComponent = buttonsComponent;
        buttonsContent = <CustomComponent onClose={onClose} />;
    }

    let BodyComponent = bodyComponent;

    return (
        <Modal
            size={size}
            isOpen
            toggle={() => onClose(false)}
            className={`reactstrap-confirm ${className}`}
        >
            {title && (
                <ModalHeader toggle={() => onClose(false)}>
                    {title || null}
                </ModalHeader>
            )}
            <ModalBody>{bodyComponent ? <BodyComponent /> : message}</ModalBody>
            <ModalFooter>{buttonsContent}</ModalFooter>
        </Modal>
    );
};

ConfirmModal.defaultProps = {
    message: "Are you sure?",
    title: "Warning!",
    confirmText: "Ok",
    cancelText: "Cancel",
    confirmColor: "primary",
    cancelColor: "",
    className: "",
    buttonsComponent: null,
    size: null,
    bodyComponent: null,
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
    size: PropTypes.string,
    buttonsComponent: PropTypes.func,
    bodyComponent: PropTypes.func,
};

export default ConfirmModal;
