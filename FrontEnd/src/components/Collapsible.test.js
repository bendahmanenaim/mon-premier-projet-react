import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Collapsible from '../components/Collapse';


describe('Collapsible component', () => {
    it('renders closed collapsible correctly', () => {
      const title = 'Test Title';
      const description = 'Test Description';
  
      render(<Collapsible title={title} description={description} />);
  
      // Vérifie que le titre est affiché correctement
      expect(screen.getByText(title)).toBeInTheDocument();
  
      // Vérifie que la description n'est pas présente initialement
      expect(screen.queryByText(description)).not.toBeInTheDocument();
  
      // Clic sur le header du collapsible pour l'ouvrir
      fireEvent.click(screen.getByText(title));
  
      // Vérifie que la description est affichée après le clic
      expect(screen.getByText(description)).toBeInTheDocument();
    });
  });