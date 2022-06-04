import { NavBar, SideBar, SideBarPage } from '.';

const MainPage = () => {
  return (
    <section>

      <NavBar />

      <section className="grid grid-cols-12">
        
        <div className="col-span-2 h-screen bg-gray-800">
          <SideBar />
        </div>

        <div className="col-span-10 h-screen bg-green-200">
          <SideBarPage />
        </div>

      </section>

    </section>
  )
}

export default MainPage