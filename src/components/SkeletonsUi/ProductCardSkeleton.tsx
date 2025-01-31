import ContentLoader from "react-content-loader";
import { useAppSelector } from "../../store/hooks";

interface IProps {
  grid: boolean;
}

const ProductCardSkeleton = ({ grid }: IProps) => {
  const { isDarkMode } = useAppSelector((state) => state?.darkMode);

  if (grid) {
    return (
      <ContentLoader
        speed={2}
        width="100%"
        height={300}
        viewBox="0 0 350 300"
        backgroundColor={isDarkMode ? "#1a1a1a" : "#f3f3f3"}
        foregroundColor={isDarkMode ? "#2a2a2a" : "#ecebeb"}
        aria-label="Loading product..."
      >
        <rect x="0" y="0" rx="8" ry="8" width="100%" height="160" />
        <rect x="0" y="175" rx="4" ry="4" width="80%" height="20" />
        <rect x="0" y="205" rx="4" ry="4" width="90%" height="15" />
        <rect x="0" y="225" rx="4" ry="4" width="70%" height="15" />
        <rect x="0" y="255" rx="4" ry="4" width="30%" height="20" />
        <rect x="70%" y="250" rx="8" ry="8" width="30%" height="40" />
        <rect x="0" y="290" rx="4" ry="4" width="20%" height="15" />
        <rect x="25%" y="290" rx="4" ry="4" width="20%" height="15" />
      </ContentLoader>
    );
  } else {
    return (
      <ContentLoader
        speed={2}
        width="100%"
        height={150}
        viewBox="0 0 350 150"
        backgroundColor={isDarkMode ? "#1a1a1a" : "#f3f3f3"}
        foregroundColor={isDarkMode ? "#2a2a2a" : "#ecebeb"}
        aria-label="Loading product..."
      >
        <rect x="0" y="0" rx="8" ry="8" width="120" height="120" />
        <rect x="140" y="10" rx="4" ry="4" width="60%" height="20" />
        <rect x="140" y="40" rx="4" ry="4" width="80%" height="15" />
        <rect x="140" y="60" rx="4" ry="4" width="70%" height="15" />
        <rect x="140" y="90" rx="4" ry="4" width="30%" height="20" />
        <rect x="140" y="120" rx="8" ry="8" width="30%" height="40" />
      </ContentLoader>
    );
  }
};

export default ProductCardSkeleton;