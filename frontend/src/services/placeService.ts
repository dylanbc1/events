// services/placeService.ts
export const createPlace = async (placeData: any) => {
    const response = await fetch('/api/places', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(placeData)
    });
  
    if (!response.ok) {
      throw new Error('Failed to create place');
    }
  
    return response.json();
  };
  
  export const getPlaceById = async (id: string | string[]) => {
    const response = await fetch(`/api/places/${id}`);
  
    if (!response.ok) {
      throw new Error('Failed to fetch place');
    }
  
    return response.json();
  };
  
  export const updatePlace = async (id: string | string[], placeData: any) => {
    const response = await fetch(`/api/places/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(placeData)
    });
  
    if (!response.ok) {
      throw new Error('Failed to update place');
    }
  };
  
  export const deletePlace = async (id: string | string[]) => {
    const response = await fetch(`/api/places/${id}`, {
      method: 'DELETE'
    });
  
    if (!response.ok) {
      throw new Error('Failed to delete place');
    }
  };
  
``
