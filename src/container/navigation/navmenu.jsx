import "./navmenu.css";
export default function NavMenu() {
  return (
    <>
      <div className='container-nav'>
        <div className='row-list-items'>
          <ul className='nav-ul'>
            <li>
              <a href='#'>Phone: 0426 543 033</a>
            </li>
            <li>
              <a href='#'>Email: jhamghatkhajaghar@gmail.com</a>
            </li>
          </ul>
        </div>
        <div className='row-list-end-items'>
          <ul className='nav-ul'>
            <ul className="nav-ul-social-media">
              <li>
                <a href='#'>Tiktok</a>
              </li>
              <li>
                <a href='#'>Facebook</a>
              </li>
              <li>
                <a href='#'>Youtube</a>
              </li>
            </ul>
            <li href='#'>Order Online</li>
          </ul>
        </div>
      </div>
    </>
  );
}
