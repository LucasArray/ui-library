import { describe, beforeAll, expect, test, vi,} from 'vitest';
import { render, screen, } from '@testing-library/react';
import Modal from './Modal'

describe('Modal', () => {
    const mockClose = vi.fn();
  
    beforeAll(() => {
      mockClose.mockReset()
    });
  
    test('renders modal with expected controls', () => {
      render(
        <Modal
            isOpen={true}
            onClose={mockClose}
            >
                <h1>Test Modal</h1>
                <p>Test Modal Content</p>
            </Modal>
      );
      expect(screen.getByRole('dialog')).toBeDefined();
      expect(screen.getByRole('heading')).toBeDefined();
      // expect(screen.getByRole('button', { name: /close/i })).toBeDefined();
    });
  
    // describe('when passed onClose handler', () => {
    //   test('calls onClose action when pressing the ESC key', () => {
    //     render( <Modal
    //       isOpen={true}
    //       onClose={mockClose}
    //       >
    //           <h1>Test Modal</h1>
    //           <p>Test Modal Content</p>
    //       </Modal>);
    //     fireEvent.keyDown(screen.getByRole('dialog'), { key: 'Escape', code: 'Escape' });
    //     expect(mockClose).toHaveBeenCalledTimes(1);
    //   });
  
    //   test('renders dismissible button that calls onClose action when clicked', async () => {
    //     const { user } = renderWithUser( <Modal
    //       isOpen={true}
    //       onClose={mockClose}
    //       >
    //           <h1>Test Modal</h1>
    //           <p>Test Modal Content</p>
    //       </Modal>);
    //     const closeButton = screen.getByRole('button', { name: /close/i });
    //     await user.click(closeButton);
    //     expect(mockClose).toHaveBeenCalledTimes(1);
    //   });
  
    //   test('calls onClose action when clicking outside of the modal', async () => {
    //     const { user } = renderWithUser( <Modal
    //       isOpen={true}
    //       onClose={mockClose}
    //       >
    //           <h1>Test Modal</h1>
    //           <p>Test Modal Content</p>
    //       </Modal>);
    //     const scrimElement = screen.getByTestId('mockId');
    //     await user.click(scrimElement);
    //     expect(mockClose).toHaveBeenCalledTimes(1);
    //   });
    // });
  });