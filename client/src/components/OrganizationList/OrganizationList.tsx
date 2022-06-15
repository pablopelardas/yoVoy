import { useGetOrganizationsQuery, useDeleteOrganizationMutation } from "../../slices/app/organizationApiSlice";
import { Link, useNavigate, useParams } from "react-router-dom";
import styleUserList from './user-list.module.css'

const OrganizationList = () => {
  const [deleteOrganization] = useDeleteOrganizationMutation();
  const navigate = useNavigate();
  const{
    data: organizations,
    isLoading,
    isSuccess,
    isError,
    error,
    refetch
  } = useGetOrganizationsQuery({_:''}, {refetchOnMountOrArgChange: true,})

  const handleDelete = async (id: any) => {
    if (
      window.confirm('Seguro que quieres eliminar esta organizacion?')
    ){
      await deleteOrganization(id)
      refetch()
      alert('Organizacion eliminada correactamente')
    }
  }

  let content = <span></span>;
  if (isLoading){
    content = <p>Cargando...</p>
  } else if (isSuccess){
    content = (
      <div style={{ marginTop: "100px" }}>
      <table className={styleUserList.table_users}>
          <tbody>
          <tr>
            <th></th>
            <th style={{ textAlign: "center" }}>Name</th>
          </tr>
      

          {organizations?.map((organization: any, index: any) => {
            return (
              <tr key={organization.id}>
                <th scope="row">{index + 1}</th>
                <td className={styleUserList.th_users}>{organization.name}</td>
                <td className={styleUserList.th_users}>
                  <Link to={`/update-organization/${organization.id}`}>
                    <button>Editar</button>
                  </Link>
                  <button
                  onClick={()=> handleDelete(organization.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
              );
            })}
            </tbody>
        </table>
      </div>
    )
  } else if (isError){
    content = <p>{JSON.stringify(error)}</p>
  }
  return content
}

export default OrganizationList