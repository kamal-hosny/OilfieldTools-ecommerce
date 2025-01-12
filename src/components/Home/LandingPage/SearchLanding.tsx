import Button from "../../ui/Button"

const SearchLanding = () => {
  return (
    <div>
        <input type="search" className="h-10 w-72 p-2 text-[#0a0a0a] rounded-s-md" placeholder="Search..." />
        <Button className="bg-[#171717] text-[#ffffff]  hover:bg-[#2e2e2e] rounded-s-none">Search</Button>
    </div>
  )
}

export default SearchLanding