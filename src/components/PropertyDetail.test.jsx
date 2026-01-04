import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import PropertyDetail from './PropertyDetail';

// Mock data
const mockProperty = {
  id: "prop1",
  type: "House",
  bedrooms: 3,
  price: 750000,
  tenure: "Freehold",
  description: "Test description",
  location: "Test Location",
  images: ["img1.jpg", "img2.jpg", "img3.jpg"],
  floorPlan: "floorplan.jpg",
  added: { month: "October", day: 12, year: 2022 },
};

const mockOnBack = jest.fn();
const mockOnAddFavourite = jest.fn();

describe('PropertyDetail Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // Mock scrollIntoView
    window.HTMLElement.prototype.scrollIntoView = jest.fn();
  });

  test('1. Renders property details correctly', () => {
    render(
      <PropertyDetail 
        property={mockProperty} 
        onBack={mockOnBack} 
        onAddFavourite={mockOnAddFavourite} 
        isFavourite={false} 
      />
    );

    expect(screen.getByText(/£750,000/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Location/i)).toBeInTheDocument();
    expect(screen.getByText(/3 Bedrooms/i)).toBeInTheDocument();
    expect(screen.getByText(/Freehold/i)).toBeInTheDocument();
    expect(screen.getByText(/Test description/i)).toBeInTheDocument();
  });

  test('2. Navigates through images', () => {
    render(
      <PropertyDetail 
        property={mockProperty} 
        onBack={mockOnBack} 
        onAddFavourite={mockOnAddFavourite} 
        isFavourite={false} 
      />
    );

    // Initial image
    const mainImage = screen.getByAltText('Property view 1');
    expect(mainImage).toHaveAttribute('src', 'img1.jpg');
    expect(screen.getByText('1 / 3')).toBeInTheDocument();

    // Click next
    const nextButton = screen.getByLabelText('Next image');
    fireEvent.click(nextButton);

    expect(screen.getByAltText('Property view 2')).toHaveAttribute('src', 'img2.jpg');
    expect(screen.getByText('2 / 3')).toBeInTheDocument();

    // Click prev (should go back to 1)
    const prevButton = screen.getByLabelText('Previous image');
    fireEvent.click(prevButton);

    expect(screen.getByAltText('Property view 1')).toHaveAttribute('src', 'img1.jpg');
  });

  test('3. Switches tabs correctly', () => {
    render(
      <PropertyDetail 
        property={mockProperty} 
        onBack={mockOnBack} 
        onAddFavourite={mockOnAddFavourite} 
        isFavourite={false} 
      />
    );

    // Default tab is Description
    expect(screen.getByRole('tab', { name: /Description/i })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText(/Test description/i)).toBeInTheDocument();

    // Switch to Floor Plan
    const floorPlanTab = screen.getByRole('tab', { name: /Floor Plan/i });
    fireEvent.click(floorPlanTab);

    expect(floorPlanTab).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByAltText(/Property floor plan/i)).toBeInTheDocument();
    expect(screen.queryByText(/Test description/i)).not.toBeInTheDocument();

    // Switch to Map
    const mapTab = screen.getByRole('tab', { name: /Map/i });
    fireEvent.click(mapTab);

    expect(mapTab).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByTitle(/Property Location/i)).toBeInTheDocument();
  });

  test('4. Handles back button click', async () => {
    render(
      <PropertyDetail 
        property={mockProperty} 
        onBack={mockOnBack} 
        onAddFavourite={mockOnAddFavourite} 
        isFavourite={false} 
      />
    );

    const backButton = screen.getByRole('button', { name: /Back to search results/i });
    fireEvent.click(backButton);

    expect(mockOnBack).toHaveBeenCalledTimes(1);
  });

  test('5. Opens and closes lightbox', () => {
    render(
      <PropertyDetail 
        property={mockProperty} 
        onBack={mockOnBack} 
        onAddFavourite={mockOnAddFavourite} 
        isFavourite={false} 
      />
    );

    // Click main image to open lightbox
    const mainImage = screen.getByAltText('Property view 1');
    fireEvent.click(mainImage);

    // Check if lightbox is open
    const lightbox = screen.getByRole('dialog', { name: /Image lightbox/i });
    expect(lightbox).toBeInTheDocument();
    
    // Check image in lightbox
    const lightboxImage = screen.getByAltText('Full size view 1');
    expect(lightboxImage).toBeInTheDocument();

    // Close lightbox (there are two close buttons, let's pick the first one)
    const closeButtons = screen.getAllByLabelText('Close lightbox');
    fireEvent.click(closeButtons[0]);

    expect(screen.queryByRole('dialog', { name: /Image lightbox/i })).not.toBeInTheDocument();
  });
});
