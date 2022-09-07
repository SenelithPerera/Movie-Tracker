import React from 'react'
import PropTypes from 'prop-types';

import { Modal } from 'react-bootstrap';

export const CommonModal = (props) => {
    const { className, show, closeModal, size, enforceFocus, title, centered, header } = props;
    return (
        <Modal
            dialogClassName={className}
            show={show}
            onHide={closeModal}
            size={size}
            enforceFocus={enforceFocus}
            centered={centered}
        >
            {header && (
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
            )}
            <Modal.Body className="clearfix">{props.children}</Modal.Body>
        </Modal>
    )
}

CommonModal.propTypes = {
   className: PropTypes.string, 
   show: PropTypes.bool, 
   closeModal: PropTypes.func, 
   size: PropTypes.string, 
   enforceFocus: PropTypes.bool, 
   title: PropTypes.string, 
   centered: PropTypes.bool, 
   header: PropTypes.bool
};

CommonModal.defaultProps = {
    className: '', 
    show: false, 
    closeModal: () => {}, 
    size: 'lg', 
    enforceFocus: true, 
    title: '', 
    centered: true, 
    header: true 
};

