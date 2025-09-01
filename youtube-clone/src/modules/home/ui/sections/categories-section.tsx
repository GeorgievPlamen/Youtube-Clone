"use client";

import { ErrorBoundary } from "react-error-boundary";
import { trpc } from "@/trpc/client";
import { Suspense } from "react";
import FilterCarousel from "@/components/filter-carousel/filter-carousel";

const CategoriesSectionSuspense = ({ categoryId }: { categoryId?: string }) => {
  const [categories] = trpc.categories.getMany.useSuspenseQuery();

  const data = categories.map(({ name, id }) => ({
    value: id,
    label: name,
  }));

  return (
    <FilterCarousel
      onSelect={(x) => console.log(x)}
      value={categoryId}
      data={data}
    />
  );
};

const CategoriesSection = ({ categoryId }: { categoryId?: string }) => {
  return (
    <Suspense
      fallback={<FilterCarousel isLoading data={[]} onSelect={() => {}} />}
    >
      <ErrorBoundary fallback={<p>Error</p>}>
        <CategoriesSectionSuspense categoryId={categoryId} />
      </ErrorBoundary>
    </Suspense>
  );
};

export default CategoriesSection;
