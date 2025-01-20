import Button from "../ui/Button"

const Search = () => {
  return (
    <div className="search flex">
    <input type="text" className="w-full rounded-s bg-section-color border-2 text-color-text-1 border-color-border focus:ring-2 focus:border-cyan-500 focus:outline-none px-2" placeholder="Search" />
    <Button className=" text-main-color-background rounded-s-none bg-button-color hover:button-hover-color ">Search</Button>
  </div>
  )
}

export default Search