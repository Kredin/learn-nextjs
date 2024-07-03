import React from "react";

interface Props {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
}

const SortUsersPage = ({
  params: { slug },
  searchParams: { sortOrder },
}: Props) => {
  return;
  <div>
    SortUsersPage {slug} {sortOrder}
  </div>;
};

export default SortUsersPage;
