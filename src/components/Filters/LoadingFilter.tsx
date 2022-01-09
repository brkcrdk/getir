import FilterSkeleton from "./FilterSkeleton";

const LoadingFilter = () => {
  return (
    <>
      {[...Array(4).fill(0)].map((_, i: number) => (
        <FilterSkeleton key={`filter-skeleton-${i}`} />
      ))}
    </>
  );
};

export default LoadingFilter;
