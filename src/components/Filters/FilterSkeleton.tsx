import ContentLoader, { IContentLoaderProps } from "react-content-loader";
import theme from "theme";

const FilterSkeleton: React.FC<IContentLoaderProps> = (props) => (
  <ContentLoader
    speed={2}
    width="100%"
    height="24"
    backgroundColor={theme.colors.blackScale.black50}
    foregroundColor={theme.colors.blackScale.black100}
    {...props}
  >
    <rect x="1" y="1" rx="4" ry="4" width="24" height="24" />
    <rect x="32" y="1" rx="4" ry="4" width="100%" height="24" />
  </ContentLoader>
);

export default FilterSkeleton;
