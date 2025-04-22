import styled from "@emotion/styled";
import { css } from '@emotion/css'

interface ModalProps {
  // Core Props
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;

  // Style Props
  className?: string;
  variant?: "default" | "info" | "alert";
  size?: "sm" | "md" | "lg";

  // Options
  closeOnOverlayClick?:boolean;
  closeOnEsc?: boolean;

  //Accessibility
  ariaLabel?: string;
  ref?: React.RefObject<HTMLDivElement>
}

const ModalOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: 'rgba (0, 0, 0, 0.7)';
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: 1;
  visibility: visible;
  display:flex;

  ${props => !props.isOpen && css`
  opacity: 0;
  visibility: invisible;
  `}
`;

const ModalContent = styled.div<Pick<ModalProps, 'size' | 'variant'>>`
  position: relative;
  background-color: white; 
  z-index: 1001;
  border-radius: 15px; 
  transform: scale(0.95);
  transition: transform 1s ease-in-out;
  overflow-y: auto;
  max-height:90vh;
  max-width: 90vw;
  box-shadow: 4px 5px 10px rgba(0, 0, 0, 0.15);
  padding: 1.5rem;


  ${props => { 
    switch (props.size){
        case 'sm':
            return css`
              width:400px;
              padding: 1rem;
              `;
        case 'lg':
            return css`
              width:800px;
              padding: 1.5rem;
              `;
        default:
            return css`
            width: 600px;
            padding: 1.5rem;
            `;
    }
  }}

  ${props => {
    switch (props.variant){
        // Alert Modal styles
        case 'alert':
            return css`
            border-top: 3px solid red;
            `;
        // Info Modal styles
        case 'info':
            return css`
            border-top: 3px solid blue;
            `;
        // Default Modal styles
        default:
            return css`
            border-top: 3px solid black;
            `;
    }
  }}

  &[data-open="true"]{
  transform:scale(1);
  }
`;

// #TODO Add a close button
// const CloseButton = styled.div`

// `


const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  variant = "default",
  size = "md",
  ariaLabel,
  className= '',
  closeOnOverlayClick = true,
  closeOnEsc = true,
  ref
}) => {

    const handleEscDown = (event: React.KeyboardEvent) => {
        if (closeOnEsc && event.key === 'Escape'){
            onClose();
        }
    }

    const handleOverlayClick = (event: React.MouseEvent) => {
        if (closeOnOverlayClick && event.target === event.currentTarget){
            onClose();
        }
    }
    


  return (
    <ModalOverlay
        isOpen={isOpen}
        onClick={handleOverlayClick}
        data-open={isOpen}
        >
      <ModalContent 
        className={className}
        variant={variant}
        role="dialog"
        ref={ref}
        aria-label={ariaLabel || 'Modal Content'}
        aria-modal='true'
        tabIndex={-1}
        size={size}
        onKeyDown={handleEscDown}
        data-open={isOpen}
        >
            {children}
        </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;