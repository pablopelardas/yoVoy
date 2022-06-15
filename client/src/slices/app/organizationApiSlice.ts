import { apiSlice } from "../authentication/apiSlice";
import { postOrganization } from "../../types";

export const eventsApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    createOrganization: builder.mutation<postOrganization,{organization: string}>({
      query: ({organization}) => {
        return{
          url: '/api/organization',
          method:'POST',
          body: {name: organization}
        }
      }
    }),
    getOrganizations: builder.query<postOrganization,{_:string}>({
      query: ({_}) => '/api/users',
    }),
    getOrganization: builder.query<postOrganization,{id: any}>({
      query(id){
        console.log(id)
       return{ 
        url:`/api/users/${id}`,
       }
      }
    }),
    deleteOrganization: builder.mutation<postOrganization,{id: number}>({
      query(id) {
        return {
          url:`api/users/${id}`,
          method: `Delete`
        }
      }
    }) 
  })
})

export const{
  useCreateOrganizationMutation,
  useGetOrganizationQuery,
  useGetOrganizationsQuery,
  useDeleteOrganizationMutation,
} = eventsApiSlice