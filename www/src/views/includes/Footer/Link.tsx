export default function FooterLink({ name }: any) {
    return (
        <li>
        <a href="#" className="mr-4 text-black hover:underline md:mr-6">
          {`${name}`}
        </a>
      </li>
    )
}