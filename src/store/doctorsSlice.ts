import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { doctors as fallbackDoctors, type Doctor } from "../data/healthData";
import { fetchDoctorsFromApi } from "../services/jsonPlaceholderApi";

type DoctorsState = {
  items: Doctor[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
};

const initialState: DoctorsState = {
  items: fallbackDoctors,
  status: "idle",
  error: null,
};

export const fetchDoctors = createAsyncThunk(
  "doctors/fetchDoctors",
  async (_, { signal, rejectWithValue }) => {
    try {
      const users = await fetchDoctorsFromApi(signal);
      return users.map((user, index) => ({
        ...fallbackDoctors[index % fallbackDoctors.length],
        id: `api-doctor-${user.id}`,
        name: user.name,
        specialty: user.company.name,
        location: user.address.city,
      }));
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        throw error;
      }
      return rejectWithValue("Unable to load live doctors.");
    }
  },
);

const doctorsSlice = createSlice({
  name: "doctors",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDoctors.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchDoctors.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchDoctors.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          typeof action.payload === "string"
            ? action.payload
            : "Unable to load live doctors.";
      });
  },
});

export default doctorsSlice.reducer;
