import { Agent } from '@/lib/types';

export async function fetchAgents(): Promise<Agent[]> {
  const response = await fetch('/api/agents');
  if (!response.ok) {
    throw new Error('Failed to fetch agents');
  }
  return response.json();
}

export async function createAgent(data: Omit<Agent, 'id'>): Promise<Agent> {
  const response = await fetch('/api/agents', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('Failed to create agent');
  }
  return response.json();
}

export async function updateAgent(id: string, data: Partial<Agent>): Promise<Agent> {
  const response = await fetch(`/api/agents/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('Failed to update agent');
  }
  return response.json();
}

export async function deleteAgent(id: string): Promise<void> {
  const response = await fetch(`/api/agents/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete agent');
  }
}