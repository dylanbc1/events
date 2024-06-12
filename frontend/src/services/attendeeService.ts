// services/attendeeService.ts
export const createAttendee = async (attendeeData: any) => {
    const response = await fetch('/api/attendees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(attendeeData)
    });
  
    if (!response.ok) {
      throw new Error('Failed to create attendee');
    }
  
    return response.json();
  };
  
  export const getAttendees = async () => {
    const response = await fetch('/api/attendees');
  
    if (!response.ok) {
      throw new Error('Failed to fetch attendees');
    }
  
    return response.json();
  };
  
  export const getAttendeeById = async (id: string | string[]) => {
    const response = await fetch(`/api/attendees/${id}`);
  
    if (!response.ok) {
      throw new Error('Failed to fetch attendee');
    }
  
    return response.json();
  };
  
  export const updateAttendee = async (id: string | string[], attendeeData: any) => {
    const response = await fetch(`/api/attendees/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(attendeeData)
    });
  
    if (!response.ok) {
      throw new Error('Failed to update attendee');
    }
  };
  
  export const deleteAttendee = async (id: string | string[]) => {
    const response = await fetch(`/api/attendees/${id}`, {
      method: 'DELETE'
    });
  
    if (!response.ok) {
      throw new Error('Failed to delete attendee');
    }
  };
  