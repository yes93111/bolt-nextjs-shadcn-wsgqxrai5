'use client';

import { useState, useEffect } from 'react';
import { Address } from '@/lib/types';
import { fetchAddresses, deleteAddress, updateAddress } from '@/lib/api/addresses';

export function useAddresses() {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadAddresses();
  }, []);

  const loadAddresses = async () => {
    try {
      const data = await fetchAddresses();
      setAddresses(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load addresses');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteAddress(id);
      setAddresses(addresses.filter(address => address.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete address');
    }
  };

  const handleUpdate = async (id: string, data: Partial<Address>) => {
    try {
      const updated = await updateAddress(id, data);
      setAddresses(addresses.map(address => address.id === id ? updated : address));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update address');
    }
  };

  return { addresses, loading, error, handleDelete, handleUpdate, refresh: loadAddresses };
}