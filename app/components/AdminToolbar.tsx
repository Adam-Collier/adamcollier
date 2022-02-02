type AdminToolbarProps = {
  user: string | null
  children: React.ReactNode
}

const AdminToolbar = ({ user, children }: AdminToolbarProps) => {
  return user ? (
    <div className="fixed top-0 block w-full left-0">
      <div className="py-2 px-4 space-x-4 flex text-xs bg-zinc-200 sm:bg-white backdrop-filter backdrop-blur-sm sm:backdrop-filter-none sm:backdrop-blur-none space-x-1 underline dark:bg-zinc-900 dark:text-zinc-200">
        {children}
      </div>
    </div>
  ) : null
}

export default AdminToolbar
