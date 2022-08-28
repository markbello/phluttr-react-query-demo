import { User as UserType } from '../../utils/createMockendSchema'

const User = ({ user }: { user: UserType }) => {
  return (
    <div className="m-4 flex w-96 rounded-xl border bg-white p-4 shadow-sm">
      <img src={user.profilePictureUrl} className="h-12 w-12 rounded-full" />
      <div className="ml-4">
        <h2 className="text-lg font-semibold">{`${user.firstName} ${user.lastName}`}</h2>
      </div>
    </div>
  )
}

export default User
