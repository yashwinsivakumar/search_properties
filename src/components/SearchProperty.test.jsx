import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchProperty from './SearchProperty';

// Mock the onViewProperty prop
const mockOnViewProperty = jest.fn();

describe('SearchProperty Component', () => {
  beforeEach(() => {
    mockOnViewProperty.mockClear();
  });

  test('1. Renders SearchProperty component with search form and results', () => {
    render(<SearchProperty onViewProperty={mockOnViewProperty} />);
    
    // Check for header - there are multiple "Chooze|T" texts (header and footer)
    const brandElements = screen.getAllByText(/Chooze\|T/i);
    expect(brandElements.length).toBeGreaterThan(0);
    
    const taglineElements = screen.getAllByText(/Find your dream home/i);
    expect(taglineElements.length).toBeGreaterThan(0);
    
    // Check for search form elements using aria-labels
    expect(screen.getByLabelText("Property Type")).toBeInTheDocument();
    expect(screen.getByLabelText("Minimum Price")).toBeInTheDocument();
    expect(screen.getByLabelText("Maximum Price")).toBeInTheDocument();
    
    // Check for initial results (should be 7 based on data)
    const propertyCards = screen.getAllByRole('article', { name: /Property at/i });
    expect(propertyCards.length).toBeGreaterThan(0);
  });

  test('2. Filters properties by type', async () => {
    render(<SearchProperty onViewProperty={mockOnViewProperty} />);
    
    const typeSelect = screen.getByLabelText("Property Type");
    fireEvent.change(typeSelect, { target: { value: 'house' } });
    
    const searchButton = screen.getByRole('button', { name: /Search/i });
    fireEvent.click(searchButton);
    
    // Check results - should only see Houses
    const propertyCards = screen.getAllByRole('article', { name: /Property at/i });
    // We know there are houses in the data
    expect(propertyCards.length).toBeGreaterThan(0);
    
    // Verify no flats are shown (checking text content of badges or descriptions if accessible, 
    // but here we can check if the number of items is less than total)
    // Total is 7. Let's assume there are some flats.
    expect(propertyCards.length).toBeLessThan(7); 
  });

  test('3. Filters properties by price', () => {
    render(<SearchProperty onViewProperty={mockOnViewProperty} />);
    
    const maxPriceInput = screen.getByLabelText("Maximum Price");
    fireEvent.change(maxPriceInput, { target: { value: '300000' } });
    
    const searchButton = screen.getByRole('button', { name: /Search/i });
    fireEvent.click(searchButton);
    
    const propertyCards = screen.getAllByRole('article', { name: /Property at/i });
    
    // There is at least one property under 300k (prop4 is 285k)
    expect(propertyCards.length).toBeGreaterThan(0);
    
    // There are expensive properties (prop1 is 750k) so count should be less than total
    expect(propertyCards.length).toBeLessThan(7);
  });

  test('4. Adds property to favourites', async () => {
    render(<SearchProperty onViewProperty={mockOnViewProperty} />);
    
    // Find the first heart button (add to favourites)
    const addToFavButtons = screen.getAllByLabelText(/Add to favourites/i);
    const firstButton = addToFavButtons[0];
    
    fireEvent.click(firstButton);
    
    // Check if it appears in favourites sidebar
    const favouritesSidebar = screen.getByLabelText('Favourites');
    expect(favouritesSidebar).toBeInTheDocument();
    
    // Should have at least one item in favourites now
    const favItems = screen.getAllByRole('article', { name: /Favourite:/i });
    expect(favItems.length).toBe(1);
  });

  test('5. Removes property from favourites', async () => {
    render(<SearchProperty onViewProperty={mockOnViewProperty} />);
    
    // Add to favourites first
    const addToFavButtons = screen.getAllByLabelText(/Add to favourites/i);
    fireEvent.click(addToFavButtons[0]);
    
    // Verify it's added
    let favItems = screen.getAllByRole('article', { name: /Favourite:/i });
    expect(favItems.length).toBe(1);
    
    // Now remove it. The button in the sidebar says "Remove from favourites"
    // Or we can click the heart button again which toggles it.
    // Let's use the sidebar button "Remove from favourites"
    const removeButtons = screen.getAllByText(/Remove from favourites/i);
    // Note: The main card button also changes aria-label to "Remove from favourites"
    // We want the one in the sidebar. The sidebar item has class 'fav-remove-btn'
    
    // Let's target the button inside the favourite item
    const favItem = favItems[0];
    const removeBtn = within(favItem).getByText(/Remove from favourites/i);
    
    fireEvent.click(removeBtn);
    
    // Verify it's gone
    const emptyMessage = screen.getByText(/Drag properties here or click the heart icon/i);
    expect(emptyMessage).toBeInTheDocument();
  });
});

// Helper to scope queries
import { within } from '@testing-library/dom';
