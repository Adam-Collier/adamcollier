type AdminToolbarProps = {
  user: string | null
  children: React.ReactNode
}

const AdminToolbar = ({ user, children }: AdminToolbarProps) => {
  return user ? (
    <div className="fixed top-0 block w-full left-0">
      <div className="py-2 px-4 space-x-4 flex text-xs bg-zinc-200 bg-opacity-70 backdrop-filter backdrop-blur-sm space-x-1 backdrop-filter backdrop-blur-sm underline dark:bg-zinc-700 dark:bg-opacity-40 dark:text-zinc-200 sm:bg-transparent sm:dark:bg-transparent">
        {children}
      </div>
    </div>
  ) : null
}

export default AdminToolbar
