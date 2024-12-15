'use client';

import { useState, useEffect } from 'react';
import { Agent } from '@/lib/types';
import { fetchAgents, deleteAgent, updateAgent } from '@/lib/api/agents';

export function useAgents() {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadAgents();
  }, []);

  const loadAgents = async () => {
    try {
      const data = await fetchAgents();
      setAgents(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load agents');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteAgent(id);
      setAgents(agents.filter(agent => agent.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete agent');
    }
  };

  const handleUpdate = async (id: string, data: Partial<Agent>) => {
    try {
      const updated = await updateAgent(id, data);
      setAgents(agents.map(agent => agent.id === id ? updated : agent));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update agent');
    }
  };

  return { agents, loading, error, handleDelete, handleUpdate, refresh: loadAgents };
}