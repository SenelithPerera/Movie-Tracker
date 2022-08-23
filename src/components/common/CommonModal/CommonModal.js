import React from 'react'
import { Modal } from 'react-bootstrap';

export const CommonModal = (props) => {
    const { className, show, closeModal, size, enforceFocus, title } = props;
    return (
        <Modal
            dialogClassName={className}
            show={show}
            onHide={closeModal}
            size={size}
            enforceFocus={enforceFocus}
        >
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="clearfix">{props.children}</Modal.Body>
        </Modal>
    )
}
