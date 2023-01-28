interface FooterProps {}

export default function Footer(_props: FooterProps) {
  return (
    <footer className="mt-8 border-t-2 pt-4 text-sm md:text-base">
      <span>Copyright &copy; 2008-{new Date().getFullYear()} Zachary Jones</span>
    </footer>
  )
}
