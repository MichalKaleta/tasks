import { useQuery, gql } from '@apollo/client';
const GET_TASKS = gql`
  {
    tasks {
      id
      title
    }
  }
`;
function Tasks() {
  const { loading, error, data } = useQuery(GET_TASKS);
  console.log(data, loading, error);
  if (loading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div>
      <h1>
        {data.tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </h1>
    </div>
  );
}
export default Tasks;
