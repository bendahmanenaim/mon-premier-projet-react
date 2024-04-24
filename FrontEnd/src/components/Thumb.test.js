import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 

import { BrowserRouter } from 'react-router-dom';
import Thumb from './Thumb';

describe('Thumb component', () => {
    // Teste le rendu correct du composant Thumb avec les props fournies
  it('renders correctly with provided props', () => {
     // Définition des données de test pour les props du composant Thumb
    const testData = {
      link: '123',
      cover: 'https://example.com/cover.jpg',
      title: 'Appartement Test'
    };
// Rendu du composant Thumb avec les données de test utilisant React Testing Library
    render(
      <BrowserRouter>
        <Thumb link={testData.link} cover={testData.cover} title={testData.title} />
      </BrowserRouter>
    );

    // Utilisez getByText pour trouver le texte spécifique dans l'élément rendu
    const linkElement = screen.getByText(testData.title);
    expect(linkElement).toBeInTheDocument();// Vérifie que l'élément texte est présent dans le DOM

    // Recherche de l'élément 'a' (ancre) le plus proche autour de l'élément texte
    const anchorElement = linkElement.closest('a');
    expect(anchorElement).toHaveAttribute('href', `/logement/${testData.link}`); // Vérifie le lien de l'ancre
    
     // Recherche de l'élément 'img' (image) à l'intérieur de l'ancre
    const imageElement = anchorElement.querySelector('img');
    expect(imageElement).toBeInTheDocument(); // Vérifie que l'élément image est présent dans le DOM
    expect(imageElement).toHaveAttribute('src', testData.cover); // Vérifie l'attribut src de l'image
    expect(imageElement).toHaveAttribute('alt', 'Miniature de l\'appartement');// Vérifie l'attribut alt de l'image
  });
});