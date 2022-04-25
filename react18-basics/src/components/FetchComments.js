import { useQueryComments } from '../hooks/useQueryComments'

export const FetchComments = () => {
  const { status, data } = useQueryComments()
  // if (status === 'loading') return <p>Loading...</p>
  // if (status === 'error') return <p>Error</p>
  return (
    <div className="my-3 text-center">
      <p className="my-3 font-bold">Comment List</p>
      {data?.map((comment) => (
        <p className="my-3 text-sm" key={comment.id}>
          {comment.name}
        </p>
      ))}
    </div>
  )
}
