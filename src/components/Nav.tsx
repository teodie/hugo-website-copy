import CallToAction from "@/elements/CallToAction"
import FacebookIcon from "@/elements/icons/Facebook"
import InstagramIcon from "@/elements/icons/InstagramIcon"
import Image from "next/image"

const Nav = () => {
  return (
    <header className="bg-transparent fixed z-50 top-0 left-0 right-0 flex">
      <div className="flex mx-auto gap-10 items-center my-2 px-6 text-gray-300/80 mr-30">
        <nav className="">
          <ul className="flex gap-10 font-barlowCondensed uppercase tracking-tight font-semibold items-center font-stretch-ultra-condensed text-md text-sm">
            <li><a href="">about</a></li>
            <li><a href="">services</a></li>
            <li>
              <a href="#">
                <Image src='/assets/images/hugobuilders_log.png' width={52} height={52} alt="Hugo Builders Logo" />
              </a>
            </li>
            <li><a href="">financing</a></li>
            <li><a href="">contact</a></li>
          </ul>
        </nav>
        <div className="flex items-center gap-5">
          <FacebookIcon />
          <InstagramIcon />
        </div>

        <CallToAction />
      </div>

    </header>
  )
}

export default Nav