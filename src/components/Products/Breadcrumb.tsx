import { Slash } from "lucide-react";
import { Link } from 'react-router-dom'; 
import { Fragment } from "react/jsx-runtime";
interface IBreadcrumb {
     label: string;
      link: string;
}

interface BreadcrumbProps {
    items: IBreadcrumb[];
    itemNow: string | null;
  }

const Breadcrumb = ({ items, itemNow }: BreadcrumbProps) => {
  return (
    <div className="">
      <ul className="flex gap-2 text-xs text-color-text-2 items-center">
        {items.map((item, index) => (
          <Fragment key={index}>
          <li  className="cursor-pointer p-2 rounded-md transition-all hover:text-color-text-1 duration-300 flex gap-2">
            <Link to={item.link}>{item.label}</Link>
          </li>
          {index < items.length - 1 && <Slash size={15} />}
          </Fragment>
        ))}
        <Slash size={15} />
         <li className="p-2 rounded-md transition-all duration-300">
            {itemNow}
         </li>
      </ul>
    </div>
  );
};

export default Breadcrumb;