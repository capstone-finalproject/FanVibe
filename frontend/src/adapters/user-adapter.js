import { fetchHandler, getPostOptions, getPatchOptions } from "../utils";

const baseUrl = '/api/user';
const baseAuthUrl = '/api/auth';

export const createUser = async ({ username, password }) => (
  fetchHandler(`${baseUrl}/create`, getPostOptions({ username, password }))
);

// eating errors here for simplicity
export const getAllUsers = async () => {
  const [users] = await fetchHandler(baseUrl);
  return users || [];
};

export const getUser = async (id) => fetchHandler(`${baseUrl}/${id}`);

export const updateUsername = async ({ id, username }) => (
  fetchHandler(`${baseUrl}/${id}`, getPatchOptions({ id, username }))
);
