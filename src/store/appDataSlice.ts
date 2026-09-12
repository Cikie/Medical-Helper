import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchAlbumsFromApi,
  fetchCommentsFromApi,
  fetchPostsFromApi,
  fetchTodosFromApi,
  fetchUsersFromApi,
} from "../services/jsonPlaceholderApi";

export type AppDataState = {
  users: Awaited<ReturnType<typeof fetchUsersFromApi>>;
  posts: Awaited<ReturnType<typeof fetchPostsFromApi>>;
  comments: Awaited<ReturnType<typeof fetchCommentsFromApi>>;
  todos: Awaited<ReturnType<typeof fetchTodosFromApi>>;
  albums: Awaited<ReturnType<typeof fetchAlbumsFromApi>>;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
};

const initialState: AppDataState = {
  users: [],
  posts: [],
  comments: [],
  todos: [],
  albums: [],
  status: "idle",
  error: null,
};

export const fetchAppData = createAsyncThunk(
  "appData/fetchAll",
  async (_, { signal, rejectWithValue }) => {
    try {
      const [users, posts, comments, todos, albums] = await Promise.all([
        fetchUsersFromApi(signal),
        fetchPostsFromApi(signal),
        fetchCommentsFromApi(signal),
        fetchTodosFromApi(signal),
        fetchAlbumsFromApi(signal),
      ]);

      return { users, posts, comments, todos, albums };
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        throw error;
      }
      return rejectWithValue("Unable to load JSONPlaceholder data.");
    }
  },
);

const appDataSlice = createSlice({
  name: "appData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAppData.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchAppData.fulfilled, (state, action) => {
        state.status = "succeeded";
        Object.assign(state, action.payload);
      })
      .addCase(fetchAppData.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          typeof action.payload === "string"
            ? action.payload
            : "Unable to load JSONPlaceholder data.";
      });
  },
});

export default appDataSlice.reducer;
