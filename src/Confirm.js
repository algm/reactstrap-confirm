import defaults from 'lodash.defaults';
import { render } from 'react-dom';
import React from 'react';
import Modal from './components/Modal';

export default class Confirm {
    constructor(options) {
        this.options = defaults(options, {
            message: 'Are you sure?',
            title: 'Warning!',
            confirmText: 'Ok',
            cancelText: 'Cancel',
            confirmColor: 'primary',
            cancelColor: ''
        });

        this.el = document.createElement('div');
    }

    open() {
        let confirmPromise = new Promise(resolve => {
            render(
                <Modal
                    {...this.options}
                    onClose={result => {
                        resolve(result);
                    }}
                />,
                this.el
            );
        });

        return confirmPromise;
    }
}
