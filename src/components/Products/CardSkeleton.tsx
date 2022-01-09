import ContentLoader, { IContentLoaderProps } from "react-content-loader";
import theme from "theme";

const CardSkeleton: React.FC<IContentLoaderProps> = (props) => (
  <ContentLoader
    speed={2}
    width={124}
    height={226}
    viewBox="0 0 126 226"
    backgroundColor={theme.colors.blackScale.black50}
    foregroundColor={theme.colors.blackScale.black100}
    {...props}
  >
    <rect x="1" y="1" rx="12" ry="12" width="124" height="124" />
    <path d="M 17 17 h 92 v 92 H 17 z" />
    <rect x="1" y="204" rx="2" ry="2" width="124" height="22" />
    <rect x="1" y="133" rx="2" ry="2" width="54" height="13" />
    <rect x="1" y="163" rx="2" ry="2" width="108" height="13" />
    <rect x="1" y="183" rx="2" ry="2" width="39" height="13" />
  </ContentLoader>
);

export default CardSkeleton;
