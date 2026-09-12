export type JsonPlaceholderUser = {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
  company: {
    name: string;
  };
};

export async function fetchDoctorsFromApi(signal?: AbortSignal) {
  return fetchUsersFromApi(signal);
}

async function fetchJson<T>(path: string, signal?: AbortSignal) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/${path}`, {
    signal,
  });

  if (!response.ok) {
    throw new Error(`JSONPlaceholder request failed: ${response.status}`);
  }

  return (await response.json()) as T;
}

export type JsonPlaceholderPost = {
  id: number;
  userId: number;
  title: string;
  body: string;
};
export type JsonPlaceholderComment = {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
};
export type JsonPlaceholderTodo = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};
export type JsonPlaceholderAlbum = {
  id: number;
  userId: number;
  title: string;
};

export function fetchUsersFromApi(signal?: AbortSignal) {
  return fetchJson<JsonPlaceholderUser[]>("users", signal);
}

export function fetchPostsFromApi(signal?: AbortSignal) {
  return fetchJson<JsonPlaceholderPost[]>("posts", signal);
}

export function fetchCommentsFromApi(signal?: AbortSignal) {
  return fetchJson<JsonPlaceholderComment[]>("comments", signal);
}

export function fetchTodosFromApi(signal?: AbortSignal) {
  return fetchJson<JsonPlaceholderTodo[]>("todos", signal);
}

export function fetchAlbumsFromApi(signal?: AbortSignal) {
  return fetchJson<JsonPlaceholderAlbum[]>("albums", signal);
}
