export interface HeaderProps {
  variant?: 'front-page'
}

export default function Header({ variant }: HeaderProps) {
  return (
    <header className="flex my-4">
      <div>{variant !== 'front-page' ? <a href="/">zacharytamas</a> : null}</div>
    </header>
  )
}
