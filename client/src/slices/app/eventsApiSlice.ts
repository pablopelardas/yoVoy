import { apiSlice } from "../authentication/apiSlice";
import { Event } from "../../types";

export const eventsApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    updateEvent: builder.mutation<Event,{id: string, updatedEvent: any}>({
      query: ({id, updatedEvent}) => {
        // do something
        return{
          url: `/api/event/${id}`,
          method:`PUT`,
          body: {...updatedEvent}
        }
      }
    }),
    createEvent: builder.mutation<Event,{newEvent: any}>({
      query: ({newEvent}) => {
        // do something
        return{
          url: `/api/event`,
          method:`POST`,
          body: {...newEvent}
        }
      }
    }),
    getEvent: builder.query<Event,{id: string}>({
      query: ({id}) => {
      console.log({id})
      return {
        url: `api/event/${id}`
      }
      }
    })
  })
})

export const{
  useUpdateEventMutation,
  useCreateEventMutation,
  useGetEventQuery,
} = eventsApiSlice