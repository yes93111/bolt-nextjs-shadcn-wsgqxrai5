import { Address } from '@/lib/types';

export async function fetchAddresses(): Promise<Address[]> {
  const response = await fetch('/api/addresses');
  if (!response.ok) {
    throw new Error('Failed to fetch addresses');
  }
  return response.json();
}

export async function createAddress(data: Omit<Address, 'id'>): Promise<Address> {
  const response = await fetch('/api/addresses', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('Failed to create address');
  }
  return response.json();
}

export async function updateAddress(id: string, data: Partial<Address>): Promise<Address> {
  const response = await fetch(`/api/addresses/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('Failed to update address');
  }
  return response.json();
}

export async function deleteAddress(id: string): Promise<void> {
  const response = await fetch(`/api/addresses/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete address');
  }
}