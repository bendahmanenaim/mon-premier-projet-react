import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 

import { BrowserRouter } from 'react-router-dom';
import Thumb from './Thumb';

describe('Thumb component', () => {
  it('renders correctly with provided props', () => {
    const testData = {
      link: '123',
      cover: 'https://example.com/cover.jpg',
      title: 'Appartement Test'
    };

    render(
      <BrowserRouter>
        <Thumb link={testData.link} cover={testData.cover} title={testData.title} />
      </BrowserRouter>
    );

    // Utilisez getByText pour trouver le texte spécifique dans l'élément rendu
    const linkElement = screen.getByText(testData.title);
    expect(linkElement).toBeInTheDocument();

    // Vérifiez également le lien et l'image
    const anchorElement = linkElement.closest('a');
    expect(anchorElement).toHaveAttribute('href', `/logement/${testData.link}`);

    const imageElement = anchorElement.querySelector('img');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', testData.cover);
    expect(imageElement).toHaveAttribute('alt', 'Miniature de l\'appartement');
  });
});