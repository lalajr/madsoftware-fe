import { Footer } from 'flowbite-react'

const CustomFooter = () => {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="/"
              src="/your-logo.png" // Replace with your logo path
              alt="Your Logo"
              name="Your Brand"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link href="/about">About Us</Footer.Link>
                <Footer.Link href="/services">Services</Footer.Link>
                <Footer.Link href="/contact">Contact</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" target="_blank">
                  Facebook
                </Footer.Link>
                <Footer.Link href="#" target="_blank">
                  Instagram
                </Footer.Link>
                <Footer.Link href="#" target="_blank">
                  Twitter
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms & Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Your Brand™"
            year={new Date().getFullYear()}
          />
        </div>
      </div>
    </Footer>
  )
}

export default CustomFooter 