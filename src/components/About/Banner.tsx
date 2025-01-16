import Button from "../ui/Button"

const Banner = () => {
  return (
    <div className="p-10 flex justify-between max-md:flex-col max-md:text-center max-md:gap-8 items-center bg-section-color rounded">
        <div className="contact space-y-4">
        <div className="title text-color-text-1 font-bold text-2xl">
              Start Your Oilfield Tools Journey
            </div>
            <div className="title text-color-text-2 text-xs leading-6 max-w-[800px]">
              Explore, Buy, Rent, and Manage the Best Tools for Your Projects
              Explore, Buy, Rent, and Manage the Best Tools for Your Projects
              Explore, Buy, Rent, and Manage the Best Tools for Your Projects
            </div>
        </div>
        <div>
            <Button className="bg-button-color hover:bg-button-hover-color text-main-color-background font-bold" >Explore Tools</Button>
        </div>
    </div>
  )
}

export default Banner
