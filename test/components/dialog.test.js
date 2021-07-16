/**
 * @jest-environment jsdom
 */

/* global describe, it, expect */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Dialog from '../../src/components/ConfirmModal';
import { Button } from 'reactstrap';

describe('confirm dialog component', () => {
  it('renders with defaults', () => {
    render(<Dialog onClose={() => {}}></Dialog>);

    expect(screen.findByRole('dialog')).toBeDefined();
  });

  describe('content customization', () => {
    it('can customize title', () => {
      render(<Dialog title="custom title" onClose={() => {}}></Dialog>);
      const found = screen.findByText('custom title');

      expect(found).toBeDefined();
    });

    it('can customize message', () => {
      render(<Dialog message="custom text" onClose={() => {}}></Dialog>);
      const found = screen.findByText('custom text');
      expect(found).toBeDefined();
    });

    it('can customize size', () => {
      render(<Dialog size="lg" onClose={() => {}}></Dialog>);
      const dialog = screen.getByRole('dialog');

      const classes = dialog.getElementsByClassName('modal-lg');

      expect(classes.length).toEqual(1);
    });
  });

  describe('button customization', () => {
    it('can customize colors', () => {
      render(
        <Dialog
          confirmColor="confirmColor"
          cancelColor="cancelColor"
          onClose={() => {}}
        ></Dialog>
      );
      const dialog = screen.getByRole('dialog');

      expect(dialog.getElementsByClassName('btn-confirmColor').length).toEqual(
        1
      );
      expect(dialog.getElementsByClassName('btn-cancelColor').length).toEqual(
        1
      );
    });

    it('can customize text', () => {
      render(
        <Dialog
          confirmColor="confirmText"
          cancelColor="cancelText"
          confirmText="confirmText"
          cancelText="cancelText"
          onClose={() => {}}
        ></Dialog>
      );

      expect(screen.getByText('confirmText')).toBeDefined();
      expect(screen.getByText('cancelText')).toBeDefined();
    });

    it('can customize buttons component', () => {
      const CustomButtons = ({ onClose }) => (
        <div className="custom-buttons">
          <Button onClick={() => onClose(true)} className="my-custom-button">
            i am a custom button
          </Button>
        </div>
      );

      render(
        <Dialog buttonsComponent={CustomButtons} onClose={() => {}}></Dialog>
      );

      const dialog = screen.getByRole('dialog');

      expect(dialog.getElementsByClassName('custom-buttons').length).toEqual(1);
    });
  });
});
