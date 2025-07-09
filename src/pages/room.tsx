import { Link, Navigate, useParams } from 'react-router-dom'

type RoomParams = {
  roomId: string
}

export function Room() {
  const params = useParams<RoomParams>()

  if (!params.roomId) {
    return <Navigate replace to="/" />
  }

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-4">
      <h1 className="m-1.5 text-8xl">Room details</h1>
      <p>{JSON.stringify(params.roomId)}</p>
      <Link className="m-1.5 rounded-full bg-blue-800 p-2 text-5xl" to="/">
        Go to Create Room
      </Link>
    </div>
  )
}
