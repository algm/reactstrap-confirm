/* global describe, it, expect */
import React from 'react';
import '../../setupTests';
import { mount } from 'enzyme';
import Dialog from '../../src/components/ConfirmModal';
import { Button } from 'reactstrap';

describe('confirm dialog component', () => {
    it('renders with defaults', () => {
        const rendered = mount(<Dialog onClose={() => {}}></Dialog>);

        expect(rendered.find(Dialog).length).toEqual(1);
    });

    describe('content customization', () => {
        it('can customize title', () => {
            const rendered = mount(
                <Dialog title="custom title" onClose={() => {}}></Dialog>
            );
            const dialog = rendered.find(Dialog);

            expect(dialog.find('.modal-title').text()).toEqual('custom title');
        });

        it('can customize message', () => {
            const rendered = mount(
                <Dialog message="custom text" onClose={() => {}}></Dialog>
            );
            const dialog = rendered.find(Dialog);

            expect(dialog.find('.modal-body').text()).toEqual('custom text');
        });

        it('can customize size', () => {
            const rendered = mount(
                <Dialog size="lg" onClose={() => {}}></Dialog>
            );
            const dialog = rendered.find(Dialog);

            expect(dialog.find('.modal-lg').length).toEqual(1);
        });
    });

    describe('button customization', () => {
        it('can customize colors', () => {
            const rendered = mount(
                <Dialog
                    confirmColor="confirmColor"
                    cancelColor="cancelColor"
                    onClose={() => {}}
                ></Dialog>
            );
            const dialog = rendered.find(Dialog);

            expect(dialog.find('.btn-confirmColor').length).toEqual(1);
            expect(dialog.find('.btn-cancelColor').length).toEqual(1);
        });

        it('can customize text', () => {
            const rendered = mount(
                <Dialog
                    confirmColor="confirmText"
                    cancelColor="cancelText"
                    confirmText="confirmText"
                    cancelText="cancelText"
                    onClose={() => {}}
                ></Dialog>
            );
            const dialog = rendered.find(Dialog);

            expect(dialog.find('.btn-confirmText').text()).toEqual(
                'confirmText'
            );

            expect(dialog.find('.btn-cancelText').text()).toEqual('cancelText');
        });

        it('can customize buttons component', () => {
            const CustomButtons = ({ onClose }) => (
                <div className="custom-buttons">
                    <Button
                        onClick={() => onClose(true)}
                        className="my-custom-button"
                    >
                        i am a custom button
                    </Button>
                </div>
            );

            const rendered = mount(
                <Dialog
                    buttonsComponent={CustomButtons}
                    onClose={() => {}}
                ></Dialog>
            );

            const dialog = rendered.find(Dialog);

            expect(dialog.find('.custom-buttons').length).toEqual(1);
        });
    });
});
